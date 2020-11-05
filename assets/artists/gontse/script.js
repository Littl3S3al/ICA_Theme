import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import { CSS3DRenderer, CSS3DObject } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/renderers/CSS3DRenderer.js';




// variables for event listeners
const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');

var rotate = 0;

const rhs = document.querySelector('#right');
const left = document.querySelector('#left');

let position = 1;

const mapBtn = document.querySelector('#map-btn');
const mapBtnText = mapBtn.querySelector('span');
// map iframe
const mapFrame = document.querySelector('.modal-body iframe');
const gallery1 = document.querySelector('.modal-body .gallery1');
const gallery2 = document.querySelector('.modal-body .gallery2');

// three.js functions
const main  = () => {

    const canvas = document.querySelector('#c');
    var renderer = new CSS3DRenderer({antialias: true,alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight);
    canvas.appendChild( renderer.domElement );
    
    // camera
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
    camera.position.set( 0, -100, 1000 );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const group1 = new THREE.Group();
    group1.add( new Element( '475426865 ', 0, 0, 240, 0, 'a1' ) );
    group1.add( new Element( '475426879', 240, 0, 0, Math.PI / 2 , 'a4') );
    group1.add( new Element( '475426904', 0, 0, - 240, Math.PI , 'a3' )  );
    group1.add( new Element( '472261566', - 240, 0, 0, - Math.PI / 2 , 'a2') );
    scene.add( group1 );

    group1.position.x = -300;
    group1.rotation.z = 25 * Math.PI/180;

    const group2 = new THREE.Group();
    group2.add( new Element( '475335510', 0, 0, 240, 0 , 'b1') );
    group2.add( new Element( '475335581', 240, 0, 0, Math.PI / 2 , 'b4') );
    group2.add( new Element( '475340486', 0, 0, - 240, Math.PI , 'b3' ) );
    group2.add( new Element( '475334111', - 240, 0, 0, - Math.PI / 2 , 'b2') );
    scene.add( group2 );

    group2.position.x = 300;
    group2.rotation.x = -25 * Math.PI/180;
    


    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0.5, 1, 1 ).normalize();
    scene.add( light );

    scene.add( new THREE.AmbientLight( 0xffffff, 0.5 ) );



    
    
    



     // render the scene
     renderer.render(scene, camera);

     // create a loop to render animation
     const render = () => {

        if(group1.rotation.y < rotate * Math.PI /180){
            group1.rotation.y += (rotate * Math.PI /180 - group1.rotation.y)/10
        } else if(group1.rotation.y > rotate * Math.PI /180){
            group1.rotation.y -= (group1.rotation.y - rotate * Math.PI /180)/10
        } 

        if(group2.rotation.y < rotate * Math.PI /180){
            group2.rotation.y += (rotate * Math.PI /180 - group2.rotation.y)/10
        } else if(group2.rotation.y > rotate * Math.PI /180){
            group2.rotation.y -= (group2.rotation.y - rotate * Math.PI /180)/10
        }
    


         renderer.render(scene, camera);

         requestAnimationFrame(render);


         
     }
     requestAnimationFrame(render);
     

     function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );

    }
    window.addEventListener( 'resize', onWindowResize, false );

 }; //end of function


 function Element( id, x, y, z, ry, name ) {
    const div = document.createElement( 'div' );
    div.style.width = '480px';
    div.style.height = '360px';
    div.style.backgroundColor = '#000';

    const iframe = document.createElement( 'iframe' );
    iframe.style.width = '480px';
    iframe.style.height = '360px';
    iframe.style.border = '0px';
    iframe.id = name;
    iframe.src = [ 'https://player.vimeo.com/video/', id, '?title=0&byline=0&portrait=0&autopause=0&loop=1' ].join( '' );
    div.appendChild( iframe );

    const object = new CSS3DObject( div );
    object.position.set( x, y, z );
    object.rotation.y = ry;

    return object;
};



// event listeners
beginBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    main();
    initPlay();
});


left.addEventListener('click', () => {
    let oldPos = position;
    rotate -= 90;
    if(position > 1){
        position --;
    } else {
        position = 4;
    }
    playSequence(oldPos, position);

    
})

rhs.addEventListener('click', () => {
    let oldPos = position;
    rotate += 90;
    if(position < 4){
        position ++;
    } else {
        position = 1;
    }
    playSequence(oldPos, position);

    
})


function playSequence(oldPos, position) {

    const iframeA0 = document.querySelector(`#a${oldPos}`);
    const playerA0 = new Vimeo.Player(iframeA0);

    const iframeB0 = document.querySelector(`#b${oldPos}`);
    const playerB0 = new Vimeo.Player(iframeB0);


    const iframeA = document.querySelector(`#a${position}`);
    const playerA = new Vimeo.Player(iframeA);

    const iframeB = document.querySelector(`#b${position}`);
    const playerB = new Vimeo.Player(iframeB);

    playerA0.pause();
    playerB0.pause();
    playerA.play();
    playerB.play();


    if(position === 4){
        mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011.4324741637064!2d27.853256027506017!3d-26.248522197782606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE0JzU0LjAiUyAyN8KwNTEnMTMuNiJF!5e0!3m2!1sen!2sza!4v1604491703226!5m2!1sen!2sza';
        gallery1.classList.add('d-none');
        gallery2.classList.remove('d-none');
        mapBtnText.innerHTML = `
            Check out "Location 2"
        `;
        mapBtn.classList.add('location-2');
    } else {
        mapFrame.scr = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.17958871541424!2d27.941311058182993!3d-26.247645429795575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE0JzUxLjMiUyAyN8KwNTYnMjkuMiJF!5e0!3m2!1sen!2sza!4v1604491656385!5m2!1sen!2sza';
        gallery1.classList.remove('d-none');
        gallery2.classList.add('d-none');
        mapBtnText.innerHTML = `
            Check out "Location 1"
        `;
        mapBtn.classList.remove('location-2');
    };
}



function initPlay () {
    const iframeA = document.querySelector(`#a1`);
    const playerA = new Vimeo.Player(iframeA);

    const iframeB = document.querySelector(`#b1`);
    const playerB = new Vimeo.Player(iframeB);

    playerA.play();
    playerB.play()
}

