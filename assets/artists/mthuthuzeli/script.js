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

const iframe = document.querySelector('#ambient');
var ambient = SC.Widget(iframe);

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let number = 0;

// loader
// const loadingElem = document.querySelector('#loading');
// const progressBarElem = loadingElem.querySelector('.progressbar');


let orbiting = false;
let viewing = false;

let currentObject;

let glitchPass;


// three.js functions


function main() {

ambient.play();



  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
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


const light = new THREE.AmbientLight(0xFFFFFF, 0.5);
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

  const loadManager = new THREE.LoadingManager();
  const loader = new THREE.TextureLoader(loadManager);

  const materials = [
    new THREE.MeshBasicMaterial({map: loader.load(assets + 'frames/1.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load(assets + 'frames/2.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load(assets + 'frames/3.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load(assets + 'frames/4.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load(assets + 'frames/5.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load(assets + 'frames/6.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load(assets + 'frames/7.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load(assets + 'frames/8.jpg')}),

  ];

 var children = [];

  {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load( assets + 'shack.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      root.children.forEach(child => {
          if(child.isMesh){
              children.push(child)
          }
      })

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

// raycasting
class PickHelper {
    constructor() {
      this.raycaster = new THREE.Raycaster();
      this.raycaster.far = 300;
      this.pickedObject = null;
      this.pickedObjectSavedColor = 0;
    }
    pick(normalizedPosition, scene, camera) {
      // restore the color if there is a picked object
      if (this.pickedObject) {
        this.pickedObject = undefined;
      }

      // cast a ray through the frustum
      this.raycaster.setFromCamera(normalizedPosition, camera);
      // get the list of objects the ray intersected
      const intersectedObjects = this.raycaster.intersectObjects(children);
      if (intersectedObjects.length) {
        // pick the first object. It's the closest one
        this.pickedObject = intersectedObjects[0].object;
        if(this.pickedObject.name === "Plane001" || this.pickedObject.name === "Plane002"||  this.pickedObject.name === "Plane003" || this.pickedObject.name === "Plane004"  || this.pickedObject.name === 'frame' && !orbiting && !viewing){
            currentObject = this.pickedObject.name;
        }
        
      }
    }
  }

  const pickPosition = {x: 0, y: 0};
  const pickHelper = new PickHelper();
  clearPickPosition();

  function render() {

    if (resizeRendererToDisplaySize(renderer )) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    pickHelper.pick(pickPosition, scene, camera);


    composer.render();

    requestAnimationFrame(render);
  }

  composer.render();
  render();
  requestAnimationFrame(render);



  window.addEventListener('click', () => {
    if(pickHelper.pickedObject && pickHelper.pickedObject.name === 'frame'){
        if(number < 7){
          number ++
        } else {
          number = 0;
        }
        pickHelper.pickedObject.material = materials[number];
      
    }
  })



  function getCanvasRelativePosition(event) {
    const rect = canvas.getBoundingClientRect();
    return {
    x: (event.clientX - rect.left) * canvas.width  / rect.width,
    y: (event.clientY - rect.top ) * canvas.height / rect.height,
    };
}

function setPickPosition(event) {
    const pos = getCanvasRelativePosition(event);
    pickPosition.x = (pos.x /  canvas.width ) *  2 - 1;
    pickPosition.y = (pos.y / canvas.height) * -2 + 1;  // note we flip Y
}


controls.addEventListener('change', () => {

    orbiting = true;

});

function clearPickPosition() {
    // unlike the mouse which always has a position
    // if the user stops touching the screen we want
    // to stop picking. For now we just pick a value
    // unlikely to pick something
    pickPosition.x = -100000;
    pickPosition.y = -100000;
}


window.addEventListener('mousemove', setPickPosition);
window.addEventListener('mouseout', clearPickPosition);
window.addEventListener('mouseleave', clearPickPosition);
window.addEventListener('mouseup', () => {
    setTimeout(() => {
        orbiting = false;
    }, 500);
})


window.addEventListener('touchstart', (event) => {
    // prevent the window from scrolling
    event.preventDefault();
    setPickPosition(event.touches[0]);
}, {passive: false});

window.addEventListener('touchmove', (event) => {
    setPickPosition(event.touches[0]);
    checkForClick();
});

window.addEventListener('click', () => {
    clearPickPosition();
    setTimeout(() => {
        orbiting = false;
    }, 500);
    checkForClick();
})

}



// event listeners
beginBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    main();
    begin = true;
})


const checkForClick = () => {
   if(currentObject !== undefined && !viewing && !orbiting && currentObject !== 'frame'){
       openWindow(currentObject);
      //  console.log(currentObject);
       currentObject = undefined;
   }
}


closeBtn.addEventListener('click', () => {
    popupWindow.classList.add('d-none');
    let video = popupWindow.querySelector('.video')
    video.innerHTML = '';
    
    ambient.play();

    setTimeout(() => {
        viewing = false;
    }, 500);
})


function openWindow(number){
    popupWindow.classList.remove('d-none');
    viewing = true;
    let video = popupWindow.querySelector('.video');
    // console.log(number);
    if(number === 'Plane001'){
      video.innerHTML = '<iframe src="https://player.vimeo.com/video/476267660?&title=0&byline=0&portrait=0&autoplay=1" style="width:100%;height:100%;" frameborder="0" allow="autoplay, fullscreen"></iframe>';
    } else if(number === 'Plane002'){
      video.innerHTML = '<iframe src="https://player.vimeo.com/video/476272656?&title=0&byline=0&portrait=0&autoplay=1" style="width:100%;height:100%;" frameborder="0" allow="autoplay, fullscreen"></iframe>';
    } else if(number === 'Plane003'){
      video.innerHTML = '<iframe src="https://player.vimeo.com/video/476284396?&title=0&byline=0&portrait=0&autoplay=1" style="width:100%;height:100%;" frameborder="0" allow="autoplay, fullscreen"></iframe>';
    } else if(number === 'Plane004'){
      video.innerHTML = '<iframe src="https://player.vimeo.com/video/476268019?&title=0&byline=0&portrait=0&autoplay=1" style="width:100%;height:100%;" frameborder="0" allow="autoplay, fullscreen"></iframe>';
    }
    ambient.pause();

    var iframe = video.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.on('ended', function () {
      popupWindow.classList.add('d-none');
      let video = popupWindow.querySelector('.video')
      video.innerHTML = '';

      ambient.play();

      setTimeout(() => {
          viewing = false;
      }, 500);
    })
}


// set audio to loop
ambient.bind(SC.Widget.Events.FINISH, function(){
    ambient.seekTo(0);
    ambient.play();
});