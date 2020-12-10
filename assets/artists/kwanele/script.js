import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';
import Stats from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/libs/stats.module.js';
import { GUI } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/libs/dat.gui.module.js';

import { GPUComputationRenderer } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/misc/GPUComputationRenderer.js';

const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const canvas = document.querySelector('#c-1');
const canvas_2 = document.querySelector('#c-2');

const loadingElem = document.querySelector('#loading');
const progressBarElem = loadingElem.querySelector('.progressbar');

let camera, scene, renderer, controls;
let root;

const grey_screen = document.querySelector('.grey');
const buttons = document.querySelector('.buttons');
const next_btn = document.querySelector('#next');

let current_scene = 1;
let current_video = 0;

const videos = document.querySelector('.videos');
const video_divs = document.querySelectorAll('.video-div');

let player1, player2, player3, player4, player5;

let all_players = [player1, player2, player3, player4, player5];

video_divs.forEach((div, index) => {
    let iframe = div.querySelector('iframe');
    all_players[index] = new Vimeo.Player(iframe);
})

const world_1 = document.querySelector('#world-1');
const world_2 = document.querySelector('#world-2')
const world3_sound = document.querySelector('#world-3');
const widget1 = SC.Widget(world3_sound);

beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
    // begin = true;
    grey_screen.style.display = 'flex';
    buttons.classList.remove('d-none');
    world_1.play();
})

next_btn.addEventListener('click', () => {
    if(current_scene === 1){
        world_1.pause();
        world_2.play();
        grey_screen.style.display = 'none';
        threeJsWindow.classList.remove('d-none');
        init_1();
        current_scene = 2;
        canvas.classList.remove('d-none');
    } else if(current_scene === 2){
        canvas.classList.add('d-none');
        widget1.play();
        world_2.pause();
        canvas_2.classList.remove('d-none');
        init_2();
        current_scene = 3;
        canvas.classList.add('d-none');
        canvas_2.classList.remove('d-none');
        loadingElem.style.display = 'flex';
    } else if(current_scene === 3){
        video_divs.forEach((video, index) => {
            if(index === current_video){
                video.style.display = 'block';
            } else{
                video.style.display = 'none';
            }
        })
        canvas_2.style.opacity = 0.5;
        videos.classList.remove('d-none');
        
        all_players[current_video].play();
        if(current_video < 4){
            current_video ++
        } else{
            current_video = 0;
        }
    }
})

all_players.forEach(player => {
    player.on('ended', function() {
        next_btn.click();
      });
})

widget1.bind(SC.Widget.Events.FINISH, function(){
    widget1.seekTo(0);
    widget1.play();
});

function init_1(){


    /* TEXTURE WIDTH FOR SIMULATION */
    const WIDTH = 32;

    const BIRDS = WIDTH * WIDTH;

    // Custom Geometry - using 3 triangles each. No UVs, no normals currently.
    function BirdGeometry() {

        const triangles = BIRDS * 3;
        const points = triangles * 3;

        THREE.BufferGeometry.call( this );

        const vertices = new THREE.BufferAttribute( new Float32Array( points * 3 ), 3 );
        const birdColors = new THREE.BufferAttribute( new Float32Array( points * 3 ), 3 );
        const references = new THREE.BufferAttribute( new Float32Array( points * 2 ), 2 );
        const birdVertex = new THREE.BufferAttribute( new Float32Array( points ), 1 );

        this.setAttribute( 'position', vertices );
        this.setAttribute( 'birdColor', birdColors );
        this.setAttribute( 'reference', references );
        this.setAttribute( 'birdVertex', birdVertex );

        // this.setAttribute( 'normal', new Float32Array( points * 3 ), 3 );


        let v = 0;

        function verts_push() {

            for ( let i = 0; i < arguments.length; i ++ ) {

                vertices.array[ v ++ ] = arguments[ i ];

            }

        }

        const wingsSpan = 20;

        for ( let f = 0; f < BIRDS; f ++ ) {

            // Body
            verts_push(
                0, - 0, - 20,
                0, 4, - 20,
                0, 0, 30
            );

            // Left Wing
            verts_push(
                0, 0, - 15,
                - wingsSpan, 0, 0,
                0, 0, 15
            );

            // Right Wing
            verts_push(
                0, 0, 15,
                wingsSpan, 0, 0,
                0, 0, - 15
            );

        }

        for ( let v = 0; v < triangles * 3; v ++ ) {

            const i = ~ ~ ( v / 3 );
            const x = ( i % WIDTH ) / WIDTH;
            const y = ~ ~ ( i / WIDTH ) / WIDTH;

            const c = new THREE.Color(
                0x444444 +
                ~ ~ ( v / 9 ) / BIRDS * 0x666666
            );

            birdColors.array[ v * 3 + 0 ] = c.r;
            birdColors.array[ v * 3 + 1 ] = c.g;
            birdColors.array[ v * 3 + 2 ] = c.b;

            references.array[ v * 2 ] = x;
            references.array[ v * 2 + 1 ] = y;

            birdVertex.array[ v ] = v % 9;

        }

        this.scale( 0.2, 0.2, 0.2 );

    }

    BirdGeometry.prototype = Object.create( THREE.BufferGeometry.prototype );


    let canvas, stats;
    let camera, scene, renderer;
    let mouseX = 0, mouseY = 0;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const BOUNDS = 800, BOUNDS_HALF = BOUNDS / 2;

    let last = performance.now();

    let gpuCompute;
    let velocityVariable;
    let positionVariable;
    let positionUniforms;
    let velocityUniforms;
    let birdUniforms;

    init();
    animate();

    function init() {

        canvas = document.querySelector('#c-1');

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
        camera.position.z = 350;

        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xffffff );
        scene.fog = new THREE.Fog( 0xffffff, 100, 1000 );

        renderer = new THREE.WebGLRenderer({canvas});
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );

        initComputeRenderer();

        canvas.style.touchAction = 'none';
        canvas.addEventListener( 'pointermove', onPointerMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

        const gui = new GUI();


        const effectController = {
            separation: 20.0,
            alignment: 20.0,
            cohesion: 20.0,
            freedom: 0.75
        };

        const valuesChanger = function () {

            velocityUniforms[ "separationDistance" ].value = effectController.separation;
            velocityUniforms[ "alignmentDistance" ].value = effectController.alignment;
            velocityUniforms[ "cohesionDistance" ].value = effectController.cohesion;
            velocityUniforms[ "freedomFactor" ].value = effectController.freedom;

        };

        valuesChanger();

        gui.add( effectController, "separation", 0.0, 100.0, 1.0 ).onChange( valuesChanger );
        gui.add( effectController, "alignment", 0.0, 100, 0.001 ).onChange( valuesChanger );
        gui.add( effectController, "cohesion", 0.0, 100, 0.025 ).onChange( valuesChanger );
        gui.close();

        initBirds();

    }

    function initComputeRenderer() {

        gpuCompute = new GPUComputationRenderer( WIDTH, WIDTH, renderer );

        if ( isSafari() ) {

            gpuCompute.setDataType( THREE.HalfFloatType );

        }

        const dtPosition = gpuCompute.createTexture();
        const dtVelocity = gpuCompute.createTexture();
        fillPositionTexture( dtPosition );
        fillVelocityTexture( dtVelocity );

        velocityVariable = gpuCompute.addVariable( "textureVelocity", document.getElementById( 'fragmentShaderVelocity' ).textContent, dtVelocity );
        positionVariable = gpuCompute.addVariable( "texturePosition", document.getElementById( 'fragmentShaderPosition' ).textContent, dtPosition );

        gpuCompute.setVariableDependencies( velocityVariable, [ positionVariable, velocityVariable ] );
        gpuCompute.setVariableDependencies( positionVariable, [ positionVariable, velocityVariable ] );

        positionUniforms = positionVariable.material.uniforms;
        velocityUniforms = velocityVariable.material.uniforms;

        positionUniforms[ "time" ] = { value: 0.0 };
        positionUniforms[ "delta" ] = { value: 0.0 };
        velocityUniforms[ "time" ] = { value: 1.0 };
        velocityUniforms[ "delta" ] = { value: 0.0 };
        velocityUniforms[ "testing" ] = { value: 1.0 };
        velocityUniforms[ "separationDistance" ] = { value: 1.0 };
        velocityUniforms[ "alignmentDistance" ] = { value: 1.0 };
        velocityUniforms[ "cohesionDistance" ] = { value: 1.0 };
        velocityUniforms[ "freedomFactor" ] = { value: 1.0 };
        velocityUniforms[ "predator" ] = { value: new THREE.Vector3() };
        velocityVariable.material.defines.BOUNDS = BOUNDS.toFixed( 2 );

        velocityVariable.wrapS = THREE.RepeatWrapping;
        velocityVariable.wrapT = THREE.RepeatWrapping;
        positionVariable.wrapS = THREE.RepeatWrapping;
        positionVariable.wrapT = THREE.RepeatWrapping;

        const error = gpuCompute.init();

        if ( error !== null ) {

            console.error( error );

        }

    }

    function isSafari() {

        return !! navigator.userAgent.match( /Safari/i ) && ! navigator.userAgent.match( /Chrome/i );

    }

    function initBirds() {

        const geometry = new BirdGeometry();

        // For Vertex and Fragment
        birdUniforms = {
            "color": { value: new THREE.Color( 0xff2200 ) },
            "texturePosition": { value: null },
            "textureVelocity": { value: null },
            "time": { value: 1.0 },
            "delta": { value: 0.0 }
        };

        // THREE.ShaderMaterial
        const material = new THREE.ShaderMaterial( {
            uniforms: birdUniforms,
            vertexShader: document.getElementById( 'birdVS' ).textContent,
            fragmentShader: document.getElementById( 'birdFS' ).textContent,
            side: THREE.DoubleSide

        } );

        const birdMesh = new THREE.Mesh( geometry, material );
        birdMesh.rotation.y = Math.PI / 2;
        birdMesh.matrixAutoUpdate = false;
        birdMesh.updateMatrix();

        scene.add( birdMesh );

    }

    function fillPositionTexture( texture ) {

        const theArray = texture.image.data;

        for ( let k = 0, kl = theArray.length; k < kl; k += 4 ) {

            const x = Math.random() * BOUNDS - BOUNDS_HALF;
            const y = Math.random() * BOUNDS - BOUNDS_HALF;
            const z = Math.random() * BOUNDS - BOUNDS_HALF;

            theArray[ k + 0 ] = x;
            theArray[ k + 1 ] = y;
            theArray[ k + 2 ] = z;
            theArray[ k + 3 ] = 1;

        }

    }

    function fillVelocityTexture( texture ) {

        const theArray = texture.image.data;

        for ( let k = 0, kl = theArray.length; k < kl; k += 4 ) {

            const x = Math.random() - 0.5;
            const y = Math.random() - 0.5;
            const z = Math.random() - 0.5;

            theArray[ k + 0 ] = x * 10;
            theArray[ k + 1 ] = y * 10;
            theArray[ k + 2 ] = z * 10;
            theArray[ k + 3 ] = 1;

        }

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onPointerMove( event ) {

        if ( event.isPrimary === false ) return;

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        if(current_scene === 2){
            render();
        }

    }

    function render() {

        const now = performance.now();
        let delta = ( now - last ) / 1000;

        if ( delta > 1 ) delta = 1; // safety cap on large deltas
        last = now;

        positionUniforms[ "time" ].value = now;
        positionUniforms[ "delta" ].value = delta;
        velocityUniforms[ "time" ].value = now;
        velocityUniforms[ "delta" ].value = delta;
        birdUniforms[ "time" ].value = now;
        birdUniforms[ "delta" ].value = delta;

        velocityUniforms[ "predator" ].value.set( 0.5 * mouseX / windowHalfX, - 0.5 * mouseY / windowHalfY, 0 );

        mouseX = 10000;
        mouseY = 10000;

        gpuCompute.compute();

        birdUniforms[ "texturePosition" ].value = gpuCompute.getCurrentRenderTarget( positionVariable ).texture;
        birdUniforms[ "textureVelocity" ].value = gpuCompute.getCurrentRenderTarget( velocityVariable ).texture;

        renderer.render( scene, camera );

    }





}

function init_2(){
    const canvas = document.querySelector('#c-2');
    const renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true});

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

    const light = new THREE.AmbientLight( 0xC597FE, 1 ); // soft white light
    scene.add( light );

    {
        const color = 0xC597FE;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(5, 10, 2);
        scene.add(light);
        scene.add(light.target);
    }

    function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
        const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
        const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
        const distance = 7;
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
        camera.near = boxSize / 50;
        camera.far = boxSize * 100;

        camera.updateProjectionMatrix();

        // point the camera to look at the center of the box
        camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
    }

    {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load( assets + 'mannequin.gltf', (gltf) => {
        const root = gltf.scene;
        scene.add(root);

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
        }, 
        
        // called while loading is progressing
	( xhr ) => {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        progressBarElem.style.width = xhr.loaded / xhr.total *100 + '%';
        if(xhr.loaded === xhr.total){

            loadingElem.classList.add('d-none');
        }
	},
	// called when loading has errors
	( error ) => {

		console.log( 'An error happened' );

	}
    
    
    );
}

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
        renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render() {
        if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        }

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}