import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import { CSS3DRenderer, CSS3DObject } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/renderers/CSS3DRenderer.js';




// variables for event listeners
const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const ending = document.querySelector('#ending-message');

let position = 1000;
let currentNumber = 0;
let frameNames = [];

const forwards = document.querySelector('#forwards');
const backwards = document.querySelector('#backwards');


// three.js functions
const main  = () => {

    const canvas = document.querySelector('#c');
    var renderer = new CSS3DRenderer({antialias: true,alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight);
    canvas.appendChild( renderer.domElement );
    
    // camera
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
    camera.position.set( 0, 0, 2000 );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();


    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0.5, 1, 1 ).normalize();
    scene.add( light );

    scene.add( new THREE.AmbientLight( 0xffffff, 0.5 ) );


    let frame1 = new Element('472334865', 0, 0, 0, 0, 'frame1');
    let frame2 = new Element('472335151', 0, 0, -(1 * 2000), 0, 'frame2');
    let frame3 = new Element('472335253', 0, 0, -(2 * 2000), 0, 'frame3');
    let frame4 = new Element('480260207', 0, 0, -(3 * 2000), 0, 'frame4');
    let frame5 = new Element('472335431', 0, 0, -(4 * 2000), 0, 'frame5');
    let frame6 = new Element('472335387', 0, 0, -(5 * 2000), 0, 'frame6');
    let frame7 = new Element('472335591', 0, 0, -(6.5 * 2000), 0, 'frame7');

    let frame8 = new Element('477919031', -1200, 450/2, -(6.5 * 2000) + 450 / 4, Math.PI/180 * 22.5, 'frame8', true);
    let frame9 = new Element('477918950', -1200, -450/2, -(6.5 * 2000) + 450 / 4, Math.PI/180 * 22.5, 'frame9', true);
    let frame10 = new Element('472334513', 1200, 450/2, -(6.5 * 2000) + 450 / 4, -Math.PI/180 * 22.5, 'frame10', true);
    let frame11 = new Element('477919018', 1200, -450/2, -(6.5 * 2000) + 450 / 4, -Math.PI/180 * 22.5, 'frame11', true);

    scene.add(frame1);
    scene.add(frame2);
    scene.add(frame3);
    scene.add(frame4);
    scene.add(frame5);
    scene.add(frame6);
    scene.add(frame7);

    scene.add(frame8);
    scene.add(frame9);
    scene.add(frame10);
    scene.add(frame11);

     // render the scene
     renderer.render(scene, camera);

     // create a loop to render animation
     const render = () => {

        if(camera.position.z > position){
            camera.position.z -= 10;
        } else if (camera.position.z < position){
            camera.position.z += 10;
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


 function Element( id, x, y, z, ry, name, half) {
    const div = document.createElement( 'div' );
    div.style.width = '1600px';
    div.style.height = '900px';
    div.style.backgroundColor = '#000';

    let iframe;

    iframe = `
        <iframe id="${name}" src="https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&autopause=0" width="1600px" height="900px" frameborder="0" allow="autoplay"></iframe>
    `;

    if(half){
        div.style.width = '800px';
        div.style.height = '450px';

        iframe = `
        <iframe id="${name}" src="https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&autopause=0" width="800px" height="450px" frameborder="0" allow="autoplay"></iframe>
        `;
    }

    
    div.innerHTML = iframe;

    frameNames.push(name);

    const object = new CSS3DObject( div );
    object.position.set( x, y, z );
    object.rotation.y = ry;

    return object;
};



// videos



// event listeners
beginBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    main();
    playSequence(currentNumber);
    
});

function playSequence (number) {
    const iframe1 = document.querySelector(`#${frameNames[number]}`);
    const player1 = new Vimeo.Player(iframe1);

    player1.play();

    player1.on('ended', () => {
        if(number < 6){
            position -= 2000;
            currentNumber ++;
            playSequence(currentNumber);
        } else {
            ending.classList.remove('d-none');
        }
    })

    if(number === 6){
        playFinal();
    }
}


function playFinal(){
    for(let i = 7; i < 11; i ++){
        const iframe = document.querySelector(`#${frameNames[i]}`);
        const player = new Vimeo.Player(iframe);
        player.play();
    }
}


forwards.addEventListener('click', () => {

    const iframe1 = document.querySelector(`#${frameNames[currentNumber]}`);
    const player1 = new Vimeo.Player(iframe1);

    player1.pause();

    

    if(currentNumber < 6){
        currentNumber ++
        position -= 2000;
    };
    playSequence(currentNumber);
})

backwards.addEventListener('click', () => {

    const iframe1 = document.querySelector(`#${frameNames[currentNumber]}`);
    const player1 = new Vimeo.Player(iframe1);

    player1.pause();

    if(currentNumber > 0){
        currentNumber --
        position += 2000;
    };
    playSequence(currentNumber);
})


