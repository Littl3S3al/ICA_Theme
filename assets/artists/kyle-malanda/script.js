import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';
import { RectAreaLightHelper } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/lights/RectAreaLightUniformsLib.js';
import { Water } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/objects/Water.js';
import { Sky } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/objects/Sky.js';


// variables for event listeners
const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');

const loadingElem = document.querySelector('#loading');
const progressBarElem = loadingElem.querySelector('.progressbar');

let rectLight, rectLightHelper;
let water, sun;
let renderer, camera;

function main() {
  const canvas = document.querySelector('#c');
  renderer = new THREE.WebGLRenderer({canvas, antialias: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  const controls = new OrbitControls(camera, canvas);
  controls.update();
  controls.maxPolarAngle = Math.PI * 0.45;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('white');

  
  // loaders
  const loadManager = new THREE.LoadingManager();
  const textureLoader = new THREE.TextureLoader(loadManager);


  sun = new THREE.Vector3();

  
    const waterGeometry = new THREE.PlaneBufferGeometry( 10000, 10000 );


    water = new Water(
        waterGeometry,
        {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load( assets + 'waternormals.jpg', function ( texture ) {

                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

            } ),
            alpha: 1.0,
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor:  0x4473D9,
            distortionScale: 0.5,
            fog: scene.fog !== undefined
        }
    );

    water.rotation.x = - Math.PI / 2;
    scene.add(water);
  

   // Skybox

   var sky = new Sky();
   sky.scale.setScalar( 10000 );
   scene.add( sky );

   var uniforms = sky.material.uniforms;

   uniforms[ 'turbidity' ].value = 10;
   uniforms[ 'rayleigh' ].value = 2;
   uniforms[ 'mieCoefficient' ].value = 0.005;
   uniforms[ 'mieDirectionalG' ].value = 0.8;

   var parameters = {
     inclination: 0.49,
     azimuth: 0.0205
   };

   var pmremGenerator = new THREE.PMREMGenerator( renderer );

   function updateSun() {

     var theta = Math.PI * ( parameters.inclination - 0.5 );
     var phi = 2 * Math.PI * ( parameters.azimuth - 0.5 );

     sun.x = Math.cos( phi );
     sun.y = Math.sin( phi ) * Math.sin( theta );
     sun.z = Math.sin( phi ) * Math.cos( theta );

     sky.material.uniforms[ 'sunPosition' ].value.copy( sun );
     water.material.uniforms[ 'sunDirection' ].value.copy( sun ).normalize();

     scene.environment = pmremGenerator.fromScene( sky ).texture;

   }

   updateSun();



  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
    const distance = 50;
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, -0.8, 1))
        .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
    camera.aspect = window.innerWidth / window.innerHeight;

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

let mixer, clip, clip2, clip3, clip4, clip5, action, action2, action3, action4, action5;
let corecube;
let outer = [];
let all = [];
let root;
let clock = new THREE.Clock();
  
    const gltfLoader = new GLTFLoader();
    gltfLoader.load( assets + 'shell-w-animation.gltf', (gltf) => {
      root = gltf.scene;
      root.position.y = 2.2;
        root.scale.x = 0.5;
        root.scale.y = 0.5; 
        root.scale.z = 0.5;
      scene.add(root);


      console.log(root)
      corecube = root.children[4];

      for(let i = 0; i < 4; i ++){
        const texture = textureLoader.load(assets + 'inner/' + (i+1) + '.jpg');
        const material = new THREE.MeshBasicMaterial({map: texture});
        root.children[4].children[i].material = material;
      }

      mixer = new THREE.AnimationMixer( root );
      clip = gltf.animations[ 0 ];
      clip2 = gltf.animations[ 1 ];
      clip3 = gltf.animations[ 2 ];
      clip4 = gltf.animations[ 3 ];
      clip5 = gltf.animations[ 4 ];
        
        action = mixer.clipAction( clip );
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;

        action2 = mixer.clipAction( clip2 );
        action3 = mixer.clipAction( clip3 );
        action4 = mixer.clipAction( clip4 );
        action5 = mixer.clipAction( clip5 );

        action2.clampWhenFinished = true;
        action2.clampWhenFinished = true;
        action2.loop = THREE.LoopOnce;

        action3.clampWhenFinished = true;
        action3.clampWhenFinished = true;
        action3.loop = THREE.LoopOnce;

        action4.clampWhenFinished = true;
        action4.clampWhenFinished = true;
        action4.loop = THREE.LoopOnce;

        action5.clampWhenFinished = true;
        action5.clampWhenFinished = true;
        action5.loop = THREE.LoopOnce;
        
        action.play();
        action2.play();
        action3.play();
        action4.play();
        action5.play();

      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

      // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize * 10;
      controls.target.copy(boxCenter);
      controls.update();





      const geometry = new THREE.PlaneBufferGeometry(40, 23);
      RectAreaLightUniformsLib.init();

      for(let i = 0; i < 5; i++){
        const texture = textureLoader.load(assets + 'outer/' + (i+1) + '.jpg');
        const material = new THREE.MeshBasicMaterial({map: texture});

        rectLight = new THREE.RectAreaLight( 0xffffff, 1, 40, 23 );
        rectLight.position.set( 50*Math.sin(i*72*Math.PI/180), 15, 50*Math.cos(i * 72*Math.PI/180) );
        rectLight.lookAt(0, 30, 0);
        corecube.add( rectLight );

        const plane = new THREE.Mesh(geometry, material);
        plane.position.set( 50*Math.sin(i*72*Math.PI/180), 15, 50*Math.cos(i * 72*Math.PI/180) );
        plane.lookAt(0, 30, 0);
        corecube.add(plane);

        plane.name = `outer=${i+1}`;
        all.push(plane);
      }

      

      loadManager.onLoad = () => {
        render();
        loadingElem.style.display = 'none';
    };

    loadManager.onProgress = (urlOfLastItemLoaded, itemsLoaded, itemsTotal) => {
        const progress = itemsLoaded / itemsTotal*100;
        progressBarElem.style.width = progress + '%';
      };
      

    });
  

  function render() {


    if(mixer){
        mixer.update( clock.getDelta() );
        corecube.rotation.y -= 0.01;
        // rectLightHelper.update();
        root.children[2].rotation.z -=0.01;
    }

    

    water.material.uniforms[ 'time' ].value += 1.0 / 60.0;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  
}

window.addEventListener( 'resize', onWindowResize, false );

beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
    threeJsWindow.classList.remove('d-none');
    main();
    begin = true;
})


function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}