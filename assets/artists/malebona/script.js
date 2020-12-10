import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';

import Stats from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/libs/stats.module.js';

import { GUI } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/libs/dat.gui.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import { Water } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/objects/Water.js';
import { Sky } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/objects/Sky.js';

import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';


const text_box = document.querySelector('.text');
const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const canvas = document.querySelector('#c');

const loadingElem = document.querySelector('#loading');
const progressBarElem = loadingElem.querySelector('.progressbar');

let stats;
let camera, scene, renderer;
let controls, water, sun;
let columns;
let count = 0;
let root;


const ambient = document.querySelector('#ambient');
var widget1 = SC.Widget(ambient);


widget1.bind(SC.Widget.Events.FINISH, function(){
    widget1.play();
});

beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
    threeJsWindow.classList.remove('d-none');
    init();
    animate();
    begin = true;
    beginText();
})
let text = [
    'We pray for peaceful sleep one day.',
    'We yearn for some respite from the suffering so we can sip slowly as the sun sets.',
    'We demand that we are unburdened',
    'through public communal confessionals of our collective traumas.',
    'So we can find healing from private suffering.',
    'We will take what is owed in order to achieve spiritual restoration',
    'since the source of disorder is spirit loss.',
    'We pray for peaceful sleep one day.'
]
function beginText(){
    text_box.classList.remove('d-none');
    let i = 1;
    setInterval(() => {
        text_box.innerHTML = text[i];
        i ++;
        if (i === 8){
            i = 0;
        }
    }, 15000);
}


function init() {



    renderer = new THREE.WebGLRenderer({canvas});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    //

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.set( 30, 30, 100 );

    //
    const light = new THREE.HemisphereLight( 0xffffff, 0x5D1192, 1 );
    scene.add( light );

    sun = new THREE.Vector3();

    // Water

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
            sunColor: 0x9734DB,
            waterColor:  0x6C11AB,
            distortionScale: 3.7,
            fog: scene.fog !== undefined
        }
    );

    water.rotation.x = - Math.PI / 2;

    scene.add( water );

    // Skybox

    const sky = new Sky();
    sky.scale.setScalar( 450000  );
    // scene.add( sky );

    const skyUniforms = sky.material.uniforms;

    skyUniforms[ 'turbidity' ].value = 0;
    skyUniforms[ 'rayleigh' ].value = 0.01;
    skyUniforms[ 'mieCoefficient' ].value = 0.5;
    skyUniforms[ 'mieDirectionalG' ].value = 0.8;

    const parameters = {
        inclination: 0,
        azimuth: 0.23
    };

    const pmremGenerator = new THREE.PMREMGenerator( renderer );

    function updateSun() {

        const theta = Math.PI * ( parameters.inclination - 0.5 );
        const phi = 2 * Math.PI * ( parameters.azimuth - 0.5 );

        sun.x = Math.cos( phi );
        sun.y = Math.sin( phi ) * Math.sin( theta );
        sun.z = Math.sin( phi ) * Math.cos( theta );

        sky.material.uniforms[ 'sunPosition' ].value.copy( sun );
        water.material.uniforms[ 'sunDirection' ].value.copy( sun ).normalize();

        scene.environment = pmremGenerator.fromScene( sky ).texture;

    }

    updateSun();


    //

    controls = new OrbitControls( camera, renderer.domElement );
    controls.maxPolarAngle = Math.PI * 0.45;
    controls.target.set( 0, 10, 0 );
    controls.minDistance = 40.0;
    controls.maxDistance = 50.0;
    controls.update();

    const geometry = new THREE.SphereBufferGeometry( 5000, 60, 40 );
    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale( - 1, 1, 1 );

    const texture = new THREE.TextureLoader().load( assets + 'env.jpg' );
    const material = new THREE.MeshBasicMaterial( { map: texture } );

    const mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh );
    
    
    //add model
    function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
        const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
        const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
        const distance = 100;
        // compute a unit vector that points in the direction the camera is now
        // in the xz plane from the center of the box
        const direction = (new THREE.Vector3())
            .subVectors(camera.position, boxCenter)
            .multiply(new THREE.Vector3(1, -0.8, 1))
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
        camera.lookAt(boxCenter.x, boxCenter.y - 10, boxCenter.z);
      }
      
    const gltfLoader = new GLTFLoader();
    gltfLoader.load( assets + 'scene.gltf', (gltf) => {
          root = gltf.scene;
          root.position.y = -2;
          root.rotation.y = -72* Math.PI/180;
          root.scale.x = 1.5;
          root.scale.y = 1.5; 
          root.scale.z = 1.5;

          console.log(root);
          scene.add(root);


          root.children[8].position.y = 6;
          root.children[9].position.y = 6;
          root.children[1].position.y = 6;
          root.children[2].position.y = 6;
          root.children[7].position.y = 10;

        
    
          // compute the box that contains all the stuff
          // from root and below
          const box = new THREE.Box3().setFromObject(root);
    
          const boxSize = box.getSize(new THREE.Vector3()).length();
          const boxCenter = box.getCenter(new THREE.Vector3());
    
          // set the camera to frame the box
          frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
    
          // update the Trackball controls to handle the new size
          controls.maxDistance = boxSize;
          controls.target.copy(boxCenter);
          controls.target.y = 10;
          controls.update();
    },
    
    // called while loading is progressing
	( xhr ) => {

		// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        if(xhr.loaded === xhr.total){
            count ++;
            // console.log(count);
        }
	},
	// called when loading has errors
	( error ) => {

		console.log( 'An error happened' );

	}
    
    
    );
      

    

    gltfLoader.load( assets + 'columns.gltf', (gltf) => {
        columns = gltf.scene;
        columns.position.y = -30;
        columns.rotation.y = -72* Math.PI/180;
        columns.scale.x = 1.5;
        columns.scale.y = 1.5; 
        columns.scale.z = 1.5;

        // console.log(columns);
        scene.add(columns);
  },
    
  // called while loading is progressing
  ( xhr ) => {

    //   console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      if(xhr.loaded === xhr.total){
        count ++;
        // console.log(count)
    }
  },
  // called when loading has errors
  ( error ) => {

      console.log( 'An error happened' );

  }
  
  
  );
        


    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );
    render();

}

let loaded = false;

function render() {

    const time = performance.now() * 0.001;

    if(count === 2 && !loaded){
        setTimeout(() => {
            loadingElem.classList.add('d-none');
            widget1.play();
        }, 1000);
    }
    if(count === 2 && columns.position.y < 0){
        columns.position.y += 0.05;
    } else if (count === 2 && columns.position.y >= 0){
        
        // columns.position.y -= Math.sin(time*5)/2;
        columns.children.forEach((child, index) => {
            child.position.y +=  0.005*index*Math.cos(time/5);
        })
    } 

    if(count ===2){
        columns.rotation.y += 0.002;

        root.children[3].rotation.x = Math.sin(time/2);
        root.children[4].rotation.x = Math.cos(time/3)/2;
        root.children[5].rotation.x = Math.sin(time);
        root.children[6].rotation.x = Math.cos(time);

        root.children[3].rotation.z = Math.cos(time/2);
        root.children[4].rotation.z = Math.sin(time)/2;
        root.children[5].rotation.z = Math.cos(time/3);
        root.children[6].rotation.z = Math.sin(time);

        root.children[3].position.y -= Math.sin(time)/15;
        root.children[4].position.y -= Math.sin(time)/15;
        root.children[5].position.y -= Math.sin(time)/15;
        root.children[6].position.y -= Math.sin(time)/15;
;
    }


    water.material.uniforms[ 'time' ].value += 1.0 / 60.0;

    renderer.render( scene, camera );

}