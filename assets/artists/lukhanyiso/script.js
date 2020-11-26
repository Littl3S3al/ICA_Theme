import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import { CSS3DRenderer, CSS3DObject } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/renderers/CSS3DRenderer.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';

import { TrackballControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/TrackballControls.js';



const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const canvas = document.querySelector('#c');
const nextBtn = document.querySelector('#forwards');

const loadingElem = document.querySelector('#loading');
const progressBarElem = loadingElem.querySelector('.progressbar');

let currentWindow = 1;

let camera, scene, renderer;

let scene2, renderer2;

let controls;


function init() {

    canvas.innerHTML = ' ';

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(0, -2, 200);
    camera.lookAt(0, 0, 0)

    scene = new THREE.Scene();
    scene.background = new THREE.Color( '0x000000' );

    scene2 = new THREE.Scene();


    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    canvas.appendChild( renderer.domElement );

    renderer2 = new CSS3DRenderer();
    renderer2.setSize( window.innerWidth, window.innerHeight );
    renderer2.domElement.style.position = 'absolute';
    renderer2.domElement.style.top = 0;
    canvas.appendChild( renderer2.domElement );

    controls = new OrbitControls( camera, renderer2.domElement );
    controls.enableDamping = true;
    controls.target.set(0, 0, 0);
    // // // rotation up and down
    controls.maxPolarAngle = Math.PI/180*90;
    controls.minPolarAngle = Math.PI/180*90;

    // // // zoom controls
    // controls.enableZoom = false;


    

    // loading geometry
        const loadManager = new THREE.LoadingManager();
        const loader = new THREE.TextureLoader(loadManager);

    // environment
        const basicMaterial = new THREE.MeshBasicMaterial( {color: 'black'})
        const geometry = new THREE.CylinderBufferGeometry(300, 300, 450, 100);
        // invert the geometry on the x-axis so that all of the faces point inward
        geometry.scale( - 1, 1, 1 );


    // gap for all images
        let gap = 120;

    
    

    //
    if(currentWindow === 1){
        let video = new Element ( 1600, 900, 0, 0 , '475844895');

        let image1 = new Element ( 730, 410, -435, 450 + 205 + gap, false, 'Part-1-Image-1.jpg' );
        let image2 = new Element ( 730, 410, 435, 450 + 205 + gap, false, 'Part-1-Image-2.jpg' );

        let image3 = new Element ( 400, 900, -800 - 200 - 400 - gap * 2, 0, false, 'Part-1-Image-3.jpg');
        let image4 = new Element ( 400, 900,- 800 - 200 - gap , 0, false, 'Part-1-Image-4.jpg' );

        let image5 = new Element ( 400, 900, 800 + 200 + gap , 0, false, 'Part-1-Image-5.jpg' );
        let image6 = new Element ( 400, 900, 800 + 200 + 400 + gap * 2, 0, false, 'Part-1-Image-6.jpg' );

        let image7 = new Element ( 730, 410, - 730 - gap, -450 - 205 - gap, false, 'Part-1-Image-7.jpg');
        let image8 = new Element ( 730, 410, 0, -450 - 205 - gap, false, 'Part-1-Image-8.jpg');
        let image9 = new Element ( 730, 410, 730 + gap, -450 - 205 - gap, false, 'Part-1-Image-9.jpg');


        scene2.add(video, image1, image2, image3, image4, image5, image6, image7, image8, image9);
        
        const texture = loader.load( assets + 'one.jpg' );
        const material = new THREE.MeshBasicMaterial( { map: texture } );
        const mesh = new THREE.Mesh( geometry, [material, basicMaterial, basicMaterial] );
        

        loadManager.onLoad = () => {
            loadingElem.classList.add('d-none');
            scene.add( mesh );
          };


        

    } else if (currentWindow === 2){
        let video = new Element ( 1600, 900, 0, 0 , '475845048');

        let image1 = new Element ( 900, 900, -800 -450 - gap, 450 + gap, false, 'Part-2-Image-1.jpg');
        let image3 = new Element ( 900, 900, -800 -450 -gap, -450-gap, false, 'Part-2-Image-3.jpg');

        let image2 = new Element ( 900, 900, +800 +450 + gap, 450 + gap, false, 'Part-2-Image-2.jpg');
        let image4 = new Element ( 900, 900, +800 +450 +gap, -450-gap, false, 'Part-2-Image-4.jpg')

        scene2.add(video, image1, image2, image3, image4);

        const texture = new THREE.TextureLoader().load( assets + 'two.jpg' );
        const material = new THREE.MeshBasicMaterial( { map: texture } );
        const mesh = new THREE.Mesh( geometry, [material, basicMaterial, basicMaterial] );
        scene.add( mesh );
        
    } else {

        let video = new Element ( 1600, 900, 0, 0 , '475845118');

        let image1 = new Element ( 1200, 400, -800 - gap, 450 + 200 + gap, false, 'Part-3-Image-1.jpg');
        let image2 = new Element ( 1200, 400, 800 + gap, 450 + 200 + gap, false, 'Part-3-Image-2.jpg');

        let image3 = new Element ( 600, 600, -800 - 300 - gap, 150);
        let image4 = new Element ( 600, 600, -800 - 300 - gap, -450 - gap);

        let image5 = new Element ( 600, 600, +800 + 300 + gap, 150);
        let image6 = new Element ( 600, 600, +800 + 300 + gap, -450 - gap);

        scene2.add(video, image1, image2, image3, image4, image5, image6);

        const texture = new THREE.TextureLoader().load( assets + 'three.jpg' );
        const material = new THREE.MeshBasicMaterial( { map: texture } );
        const mesh = new THREE.Mesh( geometry, [material, basicMaterial, basicMaterial] );
        scene.add( mesh );
        
    }




    loadManager.onProgress = (urlOfLastItemLoaded, itemsLoaded, itemsTotal) => {
        const progress = itemsLoaded / itemsTotal*100;
        progressBarElem.style.width = progress + '%';
      };

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
    loadingElem.classList.remove('d-none');
    init();
    animate();
})

nextBtn.addEventListener('click', () => {
    if(currentWindow < 3){
        currentWindow ++
    } else {
        currentWindow = 1;
    }
    progressBarElem.style.width = 0;
    loadingElem.classList.add('d-none')
    init();
    animate();
})


function Element ( width, height, x, y , id, image) {
    const element = document.createElement('div');
    element.style.width = width + 'px'; 
    element.style.height = height + 'px';

    if(id){
        let iframe = `<iframe src="https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&autoplay=1&loop=1" width="100%" height="100%" frameborder="0" allow="autoplay"></iframe>`;

        let innerDiv = document.createElement( 'div' );
        innerDiv.style.position = 'absolute';
        innerDiv.style.width = width + 'px';
        innerDiv.style.height = height + 'px';
        innerDiv.style.top = 0;
        innerDiv.style.left = 0;
        innerDiv.style.zIndex = 1000;
        
        element.innerHTML += iframe;
        element.appendChild( innerDiv );
    } else if (image){
        element.style.background = `url('${assets + image}') center center no-repeat`;
        element.style.backgroundSize = 'cover';
    }

    const object = new CSS3DObject( element );
    object.position.set(x, y, -3000);

    return object;
}
