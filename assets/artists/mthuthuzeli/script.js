import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/postprocessing/GlitchPass.js';




// variables for event listeners
const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');


const popupWindow = document.querySelector('.popup-window');
const video = document.querySelector('.video iframe')


const closeBtn = document.querySelector('#btn-close');

const ambient = document.querySelector('audio');

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

    

// loader
// const loadingElem = document.querySelector('#loading');
// const progressBarElem = loadingElem.querySelector('.progressbar');


let orbiting = false;
let viewing = false;

let currentObject;

let glitchPass;


// three.js functions


function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.shadowMap.enable = true;

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('black');



// window 1 light
  {
    const color = 0xFFFFFF;
    const intensity = 0.5;
    const light = new THREE.SpotLight(color, intensity);
    light.position.set(-4.2, 3, 0);
    light.target.position.set(4.2, 0, 0);
    light.penumbra = 0.01;
    light.castShadow = true;
    light.angle = 13;
    scene.add(light);
    scene.add(light.target);
}

// window 2 light
{
    const color = 0xFFFFFF;
    const intensity = 0.5;
    const light = new THREE.SpotLight(color, intensity);
    light.position.set(-4, 3, -1);
    light.target.position.set(-3.1, 2.1, -1.8);
    light.penumbra = 0.01;
    scene.add(light);
    scene.add(light.target);

  }

// window 3 light
{
    const color = 0xFFFFFF;
    const intensity = 0.5;
    const light = new THREE.SpotLight(color, intensity);
    light.position.set(1.3, 2, 2);
    light.target.position.set(-6.6, 0, -10);
    light.penumbra = 0.01;
    light.castShadow = true;
    light.angle = 13;
    scene.add(light);
    scene.add(light.target);
}

//   window 4 light
{
    const color = 0xFFFFFF;
    const intensity = 0.5;
    const light = new THREE.SpotLight(color, intensity);
    light.position.set(-1, 3, 2);
    light.target.position.set(-0.4, 0, -10);
    light.penumbra = 0.01;
    light.castShadow = true;
    light.angle = 13;
    scene.add(light);
    scene.add(light.target);
}



const composer = new EffectComposer( renderer );
composer.addPass( new RenderPass( scene, camera ) );

glitchPass = new GlitchPass();
glitchPass.renderToScreen = true;
composer.addPass( glitchPass );


const light = new THREE.AmbientLight(0xFFFFFF, 0.2);
scene.add(light);

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load( assets + 'shack.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);

      console.log(root);

      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

      // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize / 10;
      controls.target.copy(boxCenter);
      controls.update();
    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
      composer.setSize( width, height );
    }
    return needResize;
  }

  let then = 0;

  function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    composer.render();

    requestAnimationFrame(render);
  }

  composer.render();
  render();
  requestAnimationFrame(render);
}



// event listeners
beginBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    main();
    begin = true;
})



// functions
window.addEventListener('mouseup', () => {
    checkForClick();
});

const checkForClick = () => {
   
}


closeBtn.addEventListener('click', () => {
    closeWindow();
})


function closeWindow() {
    popupWindow.classList.add('d-none');
}

function openWindow(number){
    popupWindow.classList.remove('d-none');
    viewing = true;


}