import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import { CSS3DRenderer, CSS3DObject } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/renderers/CSS3DRenderer.js';
import { OrbitControls }  from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';

import { TrackballControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/TrackballControls.js';


const beginBtn = document.querySelector('#begin-btn');
const overlay = document.querySelector('.overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const canvas = document.querySelector('#c');

let camera, scene, renderer;

let scene2, renderer2;

let controls;

let bulbLight, bulbMat, hemiLight;

let floorMat;
let innerDivs;

function init() {

    canvas.innerHTML = ' ';

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 2, 1000 );
    camera.position.set( 0, 0, 2 );
    


    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x000000 );
    scene.fog = new THREE.FogExp2( 0x000000  , 0.1 );

    scene2 = new THREE.Scene();


    renderer = new THREE.WebGLRenderer();
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    canvas.appendChild( renderer.domElement );

    renderer2 = new CSS3DRenderer();
    renderer2.setSize( window.innerWidth, window.innerHeight );
    renderer2.domElement.style.position = 'absolute';
    renderer2.domElement.style.top = 0;
    canvas.appendChild( renderer2.domElement );

    controls = new OrbitControls( camera, renderer2.domElement );

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    controls.target.set(0, 0, 0);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 0;
    controls.maxDistance = 3;

    controls.maxPolarAngle = Math.PI / 2;



    // css elements
    let gap = 50;

    let layer1_image1 = new Element( 800, 450, -1, 1.1, -3, false, 'layer1/1.jpg');
    let layer1_image2 = new Element( 800, 450, 1, 1.1, -3, false, 'layer1/2.jpg');
    let layer1_image3 = new Element( 800, 450, -1, 0, -3, false, 'layer1/3.jpg');
    let layer1_image4 = new Element( 800, 450, 1, 0, -3, false, 'layer1/4.jpg');

    scene2.add(layer1_image1, layer1_image2, layer1_image3, layer1_image4);


    let layer2_image1 = new Element( 800, 450, 1, 1.1, 3, false, 'layer2/2.jpg', 180);
    let layer2_image2 = new Element( 800, 450, -1, 1.1, 3, false, 'layer2/1.jpg', 180);
    let layer2_image3 = new Element( 800, 450, 1, 0, 3, false, 'layer2/4.jpg', 180);
    let layer2_image4 = new Element( 800, 450, -1, 0, 3, false, 'layer2/3.jpg', 180);

    scene2.add(layer2_image1, layer2_image2, layer2_image3, layer2_image4);

    let video1 = new Element (1800, 1100, -3, 0.5, 0, '484409408', false, 90);
    let video2 = new Element (1800, 1100, 3, 0.5, 0, '484409474', false, -90);

    scene2.add(video1, video2);

    // lights

    const bulbGeometry = new THREE.SphereBufferGeometry( 0.02, 16, 8 );
    bulbLight = new THREE.PointLight( 0xffee88, 2, 1000, 2 );

    bulbMat = new THREE.MeshStandardMaterial( {
        emissive: 0xffffee,
        emissiveIntensity: 1,
        color: 0x000000
    } );
    // bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
    bulbLight.position.set( 0, 2, 0 );
    bulbLight.castShadow = true;
    scene.add( bulbLight );

    hemiLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 0.2 );
    scene.add( hemiLight );


    // hardwood floor
    floorMat = new THREE.MeshStandardMaterial( {
        roughness: 0.8,
        color: 0xffffff,
        metalness: 0.2,
        bumpScale: 0.0005
    } );
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load( assets + "hardwood2_diffuse.jpg", function ( map ) {

        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 4;
        map.repeat.set( 20, 48 );
        map.encoding = THREE.sRGBEncoding;
        floorMat.map = map;
        floorMat.needsUpdate = true;

    } );
    textureLoader.load( assets + "hardwood2_bump.jpg", function ( map ) {

        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 4;
        map.repeat.set( 20, 48 );
        floorMat.bumpMap = map;
        floorMat.needsUpdate = true;

    } );
    textureLoader.load( assets + "hardwood2_roughness.jpg", function ( map ) {

        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 4;
        map.repeat.set( 20, 48 );
        floorMat.roughnessMap = map;
        floorMat.needsUpdate = true;
    } );


    const floorGeometry = new THREE.PlaneBufferGeometry( 100, 100 );
    const floorMesh = new THREE.Mesh( floorGeometry, floorMat );
    floorMesh.receiveShadow = true;
    floorMesh.rotation.x = - Math.PI / 2.0;
    floorMesh.position.y = -1;
    scene.add( floorMesh );
  

    window.addEventListener( 'resize', onWindowResize, false );


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
    renderer2.render( scene2, camera );

}


beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
    threeJsWindow.classList.remove('d-none');
    init();
    animate();
    begin = true;

    innerDivs = document.querySelectorAll('.videoBtn');
    console.log(innerDivs)

    innerDivs.forEach(div => {
        div.addEventListener('click', () => {
            // console.log('click')
            let iframe =  div.parentNode.querySelector('iframe');
            const player = new Vimeo.Player(iframe);

            
            player.getPaused().then(function(paused) {
                if(paused){
                    player.play();
                    innerDivs.forEach(div => {
                        div.innerHTML = '<i class="far fa-play-circle"></i>'
                    })
                    div.innerHTML = ' ';
                } else {
                    player.pause();
                    div.innerHTML = '<i class="far fa-play-circle"></i>';
                }
            });
        })
    })
})

function Element ( width, height, x, y ,z, id, image, rotation) {
    const element = document.createElement('div');
    element.style.width = width + 'px'; 
    element.style.height = height + 'px';
    // element.style.background = 'red';

    if(id){
        let iframe = `<iframe src="https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&autoplay=0&loop=1" width="100%" height="100%" frameborder="0" allow="autoplay"></iframe>`;

        let innerDiv = document.createElement( 'div' );
        innerDiv.classList.add('videoBtn');
        innerDiv.style.position = 'absolute';
        innerDiv.style.width = width + 'px';
        innerDiv.style.height = height + 'px';
        innerDiv.innerHTML = '<i class="far fa-play-circle"></i>';
        innerDiv.style.top = 0;
        innerDiv.style.left = 0;
        // innerDiv.style.background = 'blue';
        innerDiv.style.zIndex = 1000;
        
        element.innerHTML += iframe;
        element.appendChild( innerDiv );
    } else if (image){
        element.style.background = `url('${assets + image}') center center no-repeat`;
        element.style.backgroundSize = 'cover';
    }

    const object = new CSS3DObject( element );
    object.position.set(x, y, z);
    object.scale.x = 0.002;
    object.scale.y = 0.002;
    if(rotation){
        object.rotation.y = Math.PI/180 * rotation;
    }

    return object;
}

