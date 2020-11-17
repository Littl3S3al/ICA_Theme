import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import { CSS3DRenderer, CSS3DObject } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/renderers/CSS3DRenderer.js';
import { TrackballControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/TrackballControls.js';




// variables for event listeners
const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const canvas = document.querySelector('#c');

const next = document.querySelector('.fa-angle-right');
const next_next = document.querySelector('.fa-angle-double-right');

let rotation = 0;


let camera, scene, renderer;

let scene2, renderer2;

let controls;

let group1, group2, group3;




function init() {

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set( 0, 0, 5500 );

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 'black' );

    scene2 = new THREE.Scene();

    //groups
    group1 = new THREE.Group();
    group2 = new THREE.Group();
    group3 = new THREE.Group();




    // group 1 elements
    const frame_1 = new Frame();
    group1.add(frame_1);

    // Layers_1(x, y, width, height, id, name)
    const div_1 = new Layers_1(-3553/1.8, 2000/3.5, 3555/2.3, 2000/2.3, '476576335', 'rex-opening');
    const div_2 = new Layers_1(3555/3, 2000/4, 3555/2.3, 2000/2.3, '476574725', 'rex-ghosts');
    const div_3 = new Layers_1(-3555/3, -2000/4, 3555/2.3, 2000/2.3, '476576278', 'rex-ghosts');
    const div_4 = new Layers_1(3555/3, -2000/4, 3555/2.3, 2000/2.3, '476576123', 'rex-ghosts');
    frame_1.add(div_1, div_2, div_3, div_4);

    // svg
    // pattern (svg, id)
    const layer_2 = new Pattern (rex_svg, 'rex');
    frame_1.add(layer_2);

    // polaroids
    // function Polaroid(img, id, name, label, x, y, z)
    const polar_1 = new Polaroid(assets + '1-2-1.jpg', '476575468', 'video-rex', false, -3555/3.5-100, 0, 500);
    const polar_2 = new Polaroid(assets + '1-2-2.jpg', '476575203', 'video-rex', false, -3555/5-100, 2000/6, 100);
    const polar_3 = new Polaroid(assets + '1-2-3.jpg', false, 'image-rex', false, -3555/10-100, 2000/20, 400);
    const polar_4 = new Polaroid(assets + '1-2-4.jpg', false, 'image-rex', false, -3555/20-100, -500, 200);
    const polar_5 = new Polaroid(assets + '1-2-5.jpg', false, 'image-rex',  false, 3555/3-100, 2000/3, 200);
    const polar_6 = new Polaroid(assets + '1-2-6.jpg', false, 'image-rex',  false, 3555/3.2-100, 2000/20, 0);
    const polar_7 = new Polaroid(assets + '1-2-7.jpg', '476575416', 'video-rex', false, 3555/2.5-100, 0, 300);
    const polar_8 = new Polaroid(assets + '1-2-8.jpg', false, 'image-rex', false, 3555/2.7-100, -2000/4, 500);
    const polar_9 = new Polaroid(assets + '1-2-9.jpg', '476575411', 'video-rex', assets + '1-2-9-L.jpg', 3555/3.5-100, -2000/10, 700);
    const polar_10 = new Polaroid(assets + '1-2-10.jpg', '476575371', 'video-rex', false, 3555/10-100, 0, 200);

    frame_1.add(polar_1, polar_2, polar_3, polar_4, polar_5, polar_6, polar_7, polar_8, polar_9, polar_10)




    // group 2 elements
    const frame_2 = new Frame();
    group2.add(frame_2);
    group2.rotation.y = Math.PI/180 * 120;

    // Layers_1(x, y, width, height, id, name)
    const div_2_1 = new Layers_1(-3553/1.8, 2000/10, 3555/2.3, 2000/2.3, '476575942', 'suit-opening');
    const div_2_2 = new Layers_1(0, 2000/10, 3555/2.3, 2000/2.3, '476575920', 'suit-ghosts');
    const div_2_3 = new Layers_1(400, 600, 3555/2.3, 2000/2.3, '480167770', 'suit-ghosts');
    const div_2_4 = new Layers_1(3555/2, -2000/4, 3555/2.3, 2000/2.3, '476575863', 'suit-ghosts');
    frame_2.add(div_2_1, div_2_2, div_2_3, div_2_4);

    // svg
    // pattern (svg, id)
    const layer_2_2 = new Pattern (rex_svg, 'suit');
    frame_2.add(layer_2_2);










    // group 3 elements
    const frame_3 = new Frame();
    group3.add(frame_3);
    group3.rotation.y = Math.PI/180 * - 120;

    // Layers_1(x, y, width, height, id, name)
    const div_3_1 = new Layers_1(-3553/3, 300, 3555/3, 2000/3, '476575829', 'ct-opening');
    const div_3_2 = new Layers_1(-3553/10, 300, 3555/3, 2000/3, '476575711', 'ct-ghosts');
    const div_3_3 = new Layers_1(1000, 300, 3555/2.3, 2000/2.3, '476575585', 'ct-ghosts');
    const div_3_4 = new Layers_1(100, -2000/4, 3555/3, 2000/3, '476576671', 'ct-ghosts');
    const div_3_5 = new Layers_1(100, -2000/2, 3555/3, 2000/3, '476575534', 'ct-ghosts');
    frame_3.add(div_3_1, div_3_2, div_3_3, div_3_4, div_3_5);

    // svg
    // pattern (svg, id)
    const layer_3_2 = new Pattern (rex_svg, 'ct');
    frame_3.add(layer_3_2);














    
    scene2.add(group1, group2, group3);

    //

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    canvas.appendChild( renderer.domElement );

    renderer2 = new CSS3DRenderer();
    renderer2.setSize( window.innerWidth, window.innerHeight );
    renderer2.domElement.style.position = 'absolute';
    renderer2.domElement.style.top = 0;
    canvas.appendChild( renderer2.domElement );

    controls = new TrackballControls( camera, renderer2.domElement );
    controls.minDistance = 1000;
    controls.zoomSpeed = 0.5;

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

    if(group1.rotation.y < rotation){
        group1.rotation.y += (rotation - group1.rotation.y)/20;
        group2.rotation.y += ((rotation + 120 * Math.PI/180) - group2.rotation.y)/20;
        group3.rotation.y += ((rotation - 120 * Math.PI/180) - group3.rotation.y)/20;
    } else if(group1.rotation.y > rotation){
        group1.rotation.y -= (group1.rotation.y - rotation)/20;
        group2.rotation.y -= (group2.rotation.y - (rotation + 120 * Math.PI/180))/20;
        group3.rotation.y -= (group3.rotation.y - (rotation - 120 * Math.PI/180))/20;
    }

}




// event listeners
beginBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    init();
    animate();
    begin = true;
    listen();
    playGhost(rex_opening, 'opening');
    
});

next.addEventListener('click', () => {
    // console.log('should end')
    player.getDuration().then(function(duration) {
        player.setCurrentTime(duration - 1)
      });
    
})

next_next.addEventListener('click', () => {
    // console.log('pause and rotate')
    rotation -= Math.PI/180 * (180/3*2);
    if(player){
        player.pause();
    }
})


function Frame () {
    let div = document.createElement('div');
    div.style.width = '3555px';
    div.style.height = '2000px';
    // div.style.backgroundColor = 'black';

    const object = new CSS3DObject( div );
    object.position.z = 1200;
    return object;
}

function Layers_1(x, y, width, height, id, name){
    let div = document.createElement('div');
    div.classList.add(name);
    div.style.width = width + 'px';
    div.style.height = height + 'px';

    const iframe = `<iframe src="https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" allow="autoplay"></iframe>`;
    div.innerHTML += iframe;

    const innerDiv = document.createElement( 'div' );
    innerDiv.className = 'innerDiv';
    div.appendChild(innerDiv);

    const object = new CSS3DObject( div );
    object.position.set(x, y, 10);

    return object;
}


function Pattern (svg, id) {
    let div = document.createElement ( 'div' );
    div.id = id;
    div.className = 'pattern'
    div.style.width = '3000px';
    div.style.height = '3000px';

    div.innerHTML = svg;

    const object = new CSS3DObject( div );
    object.position.set(0, 0, 1000);

    return object;
}

function Polaroid(img, id, name, label, x, y, z){
    let div = document.createElement ( 'div' );
    div.classList.add(name, 'polaroid')
    div.style.width = '400px';
    div.style.height = '480px';
    div.backgroundColor = 'white';

    let image = document.createElement('img');
    image.src = img;
    image.classList.add('polaroid-image')
    div.appendChild(image);

    if(id){
        let iframe = `<iframe src="https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0" width="390px" height="390px" frameborder="0" allow="autoplay"></iframe>`;
        div.innerHTML += iframe;
    }

    if(label){
        let image = document.createElement('img');
        image.src = label;
        image.className = 'label-image'
        div.appendChild(image);
    }

    const object = new CSS3DObject( div );
    object.position.set(x, y, 1500 + z);

    return object;

}