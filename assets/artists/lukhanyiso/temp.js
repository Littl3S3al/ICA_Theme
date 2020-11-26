import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import { CSS3DRenderer, CSS3DObject } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/renderers/CSS3DRenderer.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';




// variables for event listeners
const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const canvas = document.querySelector('#c');

let camera, scene, renderer;

let scene2, renderer2;

let controls;

let model;

let video, image1, image3, image4;


function init() {

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(0, -2, 0);

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 'black' );

    scene2 = new THREE.Scene();


    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.domElement.style.opacity = 0;
    canvas.appendChild( renderer.domElement );

    renderer2 = new CSS3DRenderer();
    renderer2.setSize( window.innerWidth, window.innerHeight );
    renderer2.domElement.style.position = 'absolute';
    renderer2.domElement.style.top = 0;
    canvas.appendChild( renderer2.domElement );

    controls = new OrbitControls( camera, renderer2.domElement );
    controls.enableDamping = true;

    // // rotation up and down
    controls.maxPolarAngle = Math.PI/180*90;
    controls.minPolarAngle = Math.PI/180*90;

    // // zoom controls
    controls.enableZoom = false;


    window.addEventListener( 'resize', onWindowResize, false );

    // lights
    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.AmbientLight(color, intensity);
        scene.add(light);
    }
    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.PointLight(color, intensity);
        light.position.set(0, 0, 0);
        scene.add(light);
    }


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
    
        // // move the camera to a position distance units way from the center
        // // in whatever direction the camera was from the center already
        // camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
    
        // pick some near and far values for the frustum that
        // will contain the box.
        camera.near = boxSize / 100;
        camera.far = boxSize * 100;
    
        camera.updateProjectionMatrix();
    
        // point the camera to look at the center of the box
        
      }
    
      {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(assets + 'scene_01.gltf', (gltf) => {
          const root = gltf.scene;
          scene.add(root);

          
          video = root.children[0];
          
    
          // compute the box that contains all the stuff
          // from root and below
          const box = new THREE.Box3().setFromObject(root);
    
          const boxSize = box.getSize(new THREE.Vector3()).length();
          const boxCenter = box.getCenter(new THREE.Vector3());
    
          // set the camera to frame the box
          frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
    
          // update the Trackball controls to handle the new size
        //   controls.maxDistance = boxSize * 10;
          controls.target.set(0, 0, 0);
          camera.lookAt(boxCenter);
          camera.position.z += 3;
          camera.position.y += 2;
          controls.update();


          

          
        }, 
        // called while loading is progressing
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        });
      };
    

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    renderer2.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );

    controls.update();

    

    renderer.render( scene, camera );
    // renderer2.render( scene2, camera );



}



beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
    threeJsWindow.classList.remove('d-none');
    init();
    animate();
})


function Element () {
    const element = document.createElement( 'div' );
    element.style.width = '1000px';
    element.style.height = '1000px';
    element.style.background = 'red';

    const object = new CSS3DObject( element ); 
    object.position.set(0, 0, -10);

    return object;
}