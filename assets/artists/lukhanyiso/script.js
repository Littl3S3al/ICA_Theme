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

// scenes
let environment;

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


    

    
    
// width, height, z, id, image, rot
    if(currentWindow === 1){
        let video = new Element ( 1600, 900, 800, '484764814',false, 0);

        let image1 = new Element ( 600, 850, 1500, false, 'Part-1-Image-1.jpg', -45 -27);
        let image2 = new Element ( 600, 850, 1300, false, 'Part-1-Image-2.jpg', -45 - 27*2);
        let image3 = new Element ( 600, 850, 1600, false, 'Part-1-Image-3.jpg', -45 -27*3);
        let image4 = new Element ( 600, 850, 900, false, 'Part-1-Image-4.jpg', -45 - 27*4);
        let image5 = new Element ( 600, 850, 1500, false, 'Part-1-Image-5.jpg', -45 -27*5);
        let image6 = new Element ( 600, 850, 1000, false, 'Part-1-Image-6.jpg', -45 - 27*6);
        let image7 = new Element ( 600, 850, 800, false, 'Part-1-Image-7.jpg', -45 - 27*7);
        let image8 = new Element ( 600, 850, 1000, false, 'Part-1-Image-8.jpg', -45 -27*8);
        let image9 = new Element ( 600, 850, 1400, false, 'Part-1-Image-9.jpg', -45 - 27*9);


        scene2.add(video, image1, image2, image3, image4, image5, image6, image7, image8, image9);

        const texture = loader.load( assets + 'one.jpg' );
        const material = new THREE.MeshBasicMaterial( { map: texture } );
        environment = new THREE.Mesh( geometry, [material, basicMaterial, basicMaterial] );
        

        loadManager.onLoad = () => {
            loadingElem.classList.add('d-none');
            scene.add( environment );
          };


        

    } else if (currentWindow === 2){
        // width, height, z, id, image, rot

        let video = new Element ( 1600, 900, 800, '484769045', false, 0);

        let image1 = new Element ( 600, 850, 1000, false, 'Part-2-Image-1.jpg', -45 -38);
        let image2 = new Element ( 600, 850, 800, false, 'Part-2-Image-2.jpg', -45 -38*2);
        let image3 = new Element ( 600, 850, 1500, false, 'Part-2-Image-3.jpg', -45 -38*3);
        let image4 = new Element ( 600, 850, 600, false, 'Part-2-Image-4.jpg', -45 -38*4);
        let image5 = new Element ( 600, 850, 1500, false, 'Part-3-Image-1.jpg', -45 -38*5);
        let image6 = new Element ( 600, 850, 1000, false, 'Part-3-Image-2.jpg', -45 -38*6);

        scene2.add(video, image1, image2, image3, image4, image5, image6);

        const texture = new THREE.TextureLoader().load( assets + 'two.jpg' );
        const material = new THREE.MeshBasicMaterial( { map: texture } );
        environment = new THREE.Mesh( geometry, [material, basicMaterial, basicMaterial] );
        scene.add( environment );
        
    } else {

        // width, height, z, id, image, rot
        let video = new Element ( 1600, 900, 600, '484766989',false, 0);

        

        scene2.add(video);

        const texture = new THREE.TextureLoader().load( assets + 'three.jpg' );
        const material = new THREE.MeshBasicMaterial( { map: texture } );
        environment = new THREE.Mesh( geometry, [material, basicMaterial, basicMaterial] );
        scene.add( environment );
        
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

    environment.rotation.y += 0.001;

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
    begin = true;
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


function Element ( width, height, z, id, image, rot) {
    const element = document.createElement('div');
    element.style.width = width + 'px'; 
    element.style.height = height + 'px';

    let thetaX = z * Math.sin(rot*Math.PI/180);
    let thetaY = z * Math.cos(rot*Math.PI/180);
    if(rot === 0 || rot === 360){
        thetaY = z;
    }

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
    object.position.set(-thetaX, 0, -thetaY);
    object.rotation.y = (Math.PI/180 * rot);
    object.scale.x = 0.5;
    object.scale.y = 0.5;

    return object
}
