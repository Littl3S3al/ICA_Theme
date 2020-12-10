import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';
import { GodRaysFakeSunShader, GodRaysDepthMaskShader, GodRaysCombineShader, GodRaysGenerateShader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/shaders/GodRaysShader.js';

import Stats from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/libs/stats.module.js';
import { GUI } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/libs/dat.gui.module.js';


import { LightningStrike } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/geometries/LightningStrike.js';
import { LightningStorm } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/objects/LightningStorm.js';
import { EffectComposer } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/postprocessing/OutlinePass.js';


import { MarchingCubes } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/objects/MarchingCubes.js';
import { ToonShader1, ToonShader2, ToonShaderHatching, ToonShaderDotted } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/shaders/ToonShader.js';

import { ShaderPass } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/postprocessing/UnrealBloomPass.js';

import { Water } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/objects/Water.js';
import { Sky } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/objects/Sky.js';


const trans = document.querySelector('.transition');

let version = 'main';
let stop = false;
let currentObject;
let selected = ['1'];

const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');


const loadingElem = document.querySelector('#loading');
const progressBarElem = loadingElem.querySelector('.progressbar');

const video_container = document.querySelector('#video-1');
const video1 = document.querySelector('#video-1 iframe');
const player = new Vimeo.Player(video1);


const guide_1 = document.querySelector('#one');
const guide_all = document.querySelector('#all');


// soundcloud widgets
const soundContainer = document.querySelector('.sounds');
const allSC = soundContainer.querySelectorAll('iframe');
let widget1, widget2, widget3, widget4, widget5, widget6, widget7;
let allWidgets = [widget1, widget2, widget3, widget4, widget5, widget6];

allSC.forEach((clip, index) => {
    allWidgets[index] = SC.Widget(clip);
})

const allAudio = ['world-1.mp3', 'world-2.mp3','world-3.mp3', 'world-4.mp3', 'world-5.mp3', 'world-6.mp3', 'world-7.mp3'];

beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
    threeJsWindow.classList.remove('d-none');
    loadingElem.style.display = 'none';
    init_1();
    begin = true;
})

guide_1.addEventListener('click', () => {
    guide_1.style.display = 'none';
    video_container.style.display = 'none';
    player.pause();
    version = 'main';
    main();
})

guide_all.addEventListener('click', () => {
    guide_all.style.display = 'none';
    clearAll();
    version = 'main';
    main();
    allWidgets.forEach(widget => {
        widget.pause();
        widget.seekTo(0);
    })
})

// three.js functions
function init_1(){
    guide_1.style.display = 'block';
    video_container.style.display = 'flex';
    player.play();

}

function main() {
    const canvas = document.querySelector('#c-1');
    canvas.style.display = 'block';
    loadingElem.style.display = 'flex';
    let camera, scene, materialDepth;
    let orbiting = false;
    let root;

    const sunPosition = new THREE.Vector3( 0, 2000, -1000 );
    const clipPosition = new THREE.Vector4();
    const screenSpacePosition = new THREE.Vector3();

    const postprocessing = { enabled: true };

    const orbitRadius = 200;

    const bgColor = 0x000511;
    const sunColor = 0xffffff;

    // bring in audio listener
    const listener = new THREE.AudioListener();
    const audioLoader = new THREE.AudioLoader();

    // Use a smaller size for some of the god-ray render targets for better performance.
    const godrayRenderTargetResolutionMultiplier = 1.0 / 4.0;

    let loadedAudios = [];

    //

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 3000 );
    camera.position.z = 200;

    scene = new THREE.Scene();

    scene.add( new THREE.AmbientLight( 0x404040, 0.5));

    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    renderer.setClearColor( 0xffffff);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    renderer.autoClear = false;

    const controls = new OrbitControls( camera, renderer.domElement );
    // controls.maxPolarAngle = Math.PI * 0.2;
    // controls.minPolarAngle = Math.PI * 0.6;
    controls.target.set( 0, 10, 0 );
    controls.minDistance = 0;
    controls.maxDistance = 50.0;
    controls.update();

    //

    materialDepth = new THREE.MeshDepthMaterial();

    // tree

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
    
        // move the camera to a position distance units way from the center
        // in whatever direction the camera was from the center already
        camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
    
        // pick some near and far values for the frustum that
        // will contain the box.
        camera.near = boxSize / 100;
        camera.far = boxSize * 100;
    
        camera.updateProjectionMatrix();
    
        // point the camera to look at the center of the box
        camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
      }
    
    let mixer, clips;
    let clock = new THREE.Clock();
    let mesh;
      
    const gltfLoader = new GLTFLoader();
    gltfLoader.load( assets + 'tree.gltf', (gltf) => {
        root = gltf.scene;
        root.scale.y = 1000;
        root.scale.z = 1000;
        root.scale.x = 1000;

        scene.add(root);
        console.log(root);

        root.children.forEach((child, index) => {
            let skip = false;
            selected.forEach(item => {
                if(child.name === item){
                    skip = true;
                }
            })

            
            if(index !== 0){
                const sound = new THREE.PositionalAudio( listener );
                audioLoader.load( assets + 'sounds/' + allAudio[parseInt(child.name) - 1], function ( buffer ) {

                    sound.setLoop()
                    sound.setBuffer( buffer );
                    sound.setRefDistance( 500 );
                    sound.play()

                } );
                loadedAudios.push(sound);
                child.add( sound );
            }

            if(index !== 0 && !skip){


                child.material.morphTargets = true;
        
                const pointsMaterial = new THREE.PointsMaterial( {
        
                    size: 1,
                    sizeAttenuation: false,
                    map: new THREE.TextureLoader().load( assets + 'disc.png' ),
                    alphaTest: 0.5,
                    morphTargets: true
        
                } );
        
                const points = new THREE.Points( child.geometry, pointsMaterial );
        
                points.morphTargetInfluences = child.morphTargetInfluences;
                points.morphTargetDictionary = child.morphTargetDictionary;
        
                child.add( points );
            }
        })

        
                    
        mixer = new THREE.AnimationMixer( root );
        clips = gltf.animations;

        // Play all animations
        clips.forEach( function ( clip ) {
            mixer.clipAction( clip ).play();
        } );

        // compute the box that contains all the stuff
        // from root and below
        const box = new THREE.Box3().setFromObject(root);

        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());

        // set the camera to frame the box
        frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

        // update the Trackball controls to handle the new size
        controls.maxDistance = boxSize*1.5;
        controls.minDistance = 0;
        controls.target.copy(boxCenter);
        controls.update();
    },
    
    // called while loading is progressing
	( xhr ) => {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        progressBarElem.style.width = xhr.loaded / xhr.total *100 + '%';
        if(xhr.loaded === xhr.total){
            // count ++;
            // console.log(count);
            orbiting = false;
            loadingElem.classList.add('d-none');
        }
	},
	// called when loading has errors
	( error ) => {

		console.log( 'An error happened' );

    }
    );

    

    // raycasting
    // raycasting
    class PickHelper {
        constructor() {
          this.raycaster = new THREE.Raycaster();
          this.raycaster.far = 100000;
          this.pickedObject = null;
          this.pickedObjectSavedColor = 0;
        }
        pick(normalizedPosition, scene, camera) {
          // restore the color if there is a picked object
          if (this.pickedObject) {
            this.pickedObject = undefined;
          }
    
          // cast a ray through the frustum
          this.raycaster.setFromCamera(normalizedPosition, camera);
          // get the list of objects the ray intersected

            if(root !== undefined){
                var intersectedObjects = this.raycaster.intersectObjects(root.children);
                if (intersectedObjects.length) {
                // pick the first object. It's the closest one
                this.pickedObject = intersectedObjects[0].object;
                }
            }

        }
      }
    
      const pickPosition = {x: 0, y: 0};
      const pickHelper = new PickHelper();
      clearPickPosition();
    

    //

    window.addEventListener( 'resize', onWindowResize, false );

    //

    initPostprocessing( window.innerWidth, window.innerHeight );

    function onWindowResize() {

        const renderTargetWidth = window.innerWidth;
        const renderTargetHeight = window.innerHeight;

        camera.aspect = renderTargetWidth / renderTargetHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( renderTargetWidth, renderTargetHeight );
        postprocessing.rtTextureColors.setSize( renderTargetWidth, renderTargetHeight );
        postprocessing.rtTextureDepth.setSize( renderTargetWidth, renderTargetHeight );
        postprocessing.rtTextureDepthMask.setSize( renderTargetWidth, renderTargetHeight );

        const adjustedWidth = renderTargetWidth * godrayRenderTargetResolutionMultiplier;
        const adjustedHeight = renderTargetHeight * godrayRenderTargetResolutionMultiplier;
        postprocessing.rtTextureGodRays1.setSize( adjustedWidth, adjustedHeight );
        postprocessing.rtTextureGodRays2.setSize( adjustedWidth, adjustedHeight );

        }

    function initPostprocessing( renderTargetWidth, renderTargetHeight ) {

        postprocessing.scene = new THREE.Scene();

        postprocessing.camera = new THREE.OrthographicCamera( - 0.5, 0.5, 0.5, - 0.5, - 10000, 10000 );
        postprocessing.camera.position.z = 100;

        postprocessing.scene.add( postprocessing.camera );

        const pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };
        postprocessing.rtTextureColors = new THREE.WebGLRenderTarget( renderTargetWidth, renderTargetHeight, pars );

        // Switching the depth formats to luminance from rgb doesn't seem to work. I didn't
        // investigate further for now.
        // pars.format = LuminanceFormat;

        // I would have this quarter size and use it as one of the ping-pong render
        // targets but the aliasing causes some temporal flickering

        postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget( renderTargetWidth, renderTargetHeight, pars );
        postprocessing.rtTextureDepthMask = new THREE.WebGLRenderTarget( renderTargetWidth, renderTargetHeight, pars );

        // The ping-pong render targets can use an adjusted resolution to minimize cost

        const adjustedWidth = renderTargetWidth * godrayRenderTargetResolutionMultiplier;
        const adjustedHeight = renderTargetHeight * godrayRenderTargetResolutionMultiplier;
        postprocessing.rtTextureGodRays1 = new THREE.WebGLRenderTarget( adjustedWidth, adjustedHeight, pars );
        postprocessing.rtTextureGodRays2 = new THREE.WebGLRenderTarget( adjustedWidth, adjustedHeight, pars );

        // god-ray shaders

        const godraysMaskShader = GodRaysDepthMaskShader;
        postprocessing.godrayMaskUniforms = THREE.UniformsUtils.clone( godraysMaskShader.uniforms );
        postprocessing.materialGodraysDepthMask = new THREE.ShaderMaterial( {

            uniforms: postprocessing.godrayMaskUniforms,
            vertexShader: godraysMaskShader.vertexShader,
            fragmentShader: godraysMaskShader.fragmentShader

        } );

        const godraysGenShader = GodRaysGenerateShader;
        postprocessing.godrayGenUniforms = THREE.UniformsUtils.clone( godraysGenShader.uniforms );
        postprocessing.materialGodraysGenerate = new THREE.ShaderMaterial( {

            uniforms: postprocessing.godrayGenUniforms,
            vertexShader: godraysGenShader.vertexShader,
            fragmentShader: godraysGenShader.fragmentShader

        } );

        const godraysCombineShader = GodRaysCombineShader;
        postprocessing.godrayCombineUniforms = THREE.UniformsUtils.clone( godraysCombineShader.uniforms );
        postprocessing.materialGodraysCombine = new THREE.ShaderMaterial( {

            uniforms: postprocessing.godrayCombineUniforms,
            vertexShader: godraysCombineShader.vertexShader,
            fragmentShader: godraysCombineShader.fragmentShader

        } );

        const godraysFakeSunShader = GodRaysFakeSunShader;
        postprocessing.godraysFakeSunUniforms = THREE.UniformsUtils.clone( godraysFakeSunShader.uniforms );
        postprocessing.materialGodraysFakeSun = new THREE.ShaderMaterial( {

            uniforms: postprocessing.godraysFakeSunUniforms,
            vertexShader: godraysFakeSunShader.vertexShader,
            fragmentShader: godraysFakeSunShader.fragmentShader

        } );

        postprocessing.godraysFakeSunUniforms.bgColor.value.setHex( bgColor );
        postprocessing.godraysFakeSunUniforms.sunColor.value.setHex( sunColor );

        postprocessing.godrayCombineUniforms.fGodRayIntensity.value = 0.3;

        postprocessing.quad = new THREE.Mesh(
            new THREE.PlaneBufferGeometry( 1.0, 1.0 ),
            postprocessing.materialGodraysGenerate
        );
        postprocessing.quad.position.z = - 9900;
        postprocessing.scene.add( postprocessing.quad );

    }

    function animate() {

    requestAnimationFrame( animate, renderer.domElement );
    render();


    }

    animate();

    function getStepSize( filterLen, tapsPerPass, pass ) {

    return filterLen * Math.pow( tapsPerPass, - pass );

    }

    function filterGodRays( inputTex, renderTarget, stepSize ) {

    postprocessing.scene.overrideMaterial = postprocessing.materialGodraysGenerate;

    postprocessing.godrayGenUniforms[ "fStepSize" ].value = stepSize;
    postprocessing.godrayGenUniforms[ "tInput" ].value = inputTex;

    renderer.setRenderTarget( renderTarget );
    renderer.render( postprocessing.scene, postprocessing.camera );
    postprocessing.scene.overrideMaterial = null;

    }

    function render() {
        if(version !== 'main'){
            loadedAudios.forEach(audio => {
                audio.pause();
            })
        }
        if(version === 'main'){

            if(mixer){
                mixer.update(clock.getDelta());
            }

            pickHelper.pick(pickPosition, scene, camera);
            controls.update();
                
            if(pickHelper.pickedObject && !orbiting){
                if(pickHelper.pickedObject.name){
                    currentObject = pickHelper.pickedObject.name;
                }
            }

            if ( postprocessing.enabled ) {

                clipPosition.x = sunPosition.x;
                clipPosition.y = sunPosition.y;
                clipPosition.z = sunPosition.z;
                clipPosition.w = 1;

                clipPosition.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

                // perspective divide (produce NDC space)

                clipPosition.x /= clipPosition.w;
                clipPosition.y /= clipPosition.w;

                screenSpacePosition.x = ( clipPosition.x + 1 ) / 2; // transform from [-1,1] to [0,1]
                screenSpacePosition.y = ( clipPosition.y + 1 ) / 2; // transform from [-1,1] to [0,1]
                screenSpacePosition.z = clipPosition.z; // needs to stay in clip space for visibilty checks

                // Give it to the god-ray and sun shaders

                postprocessing.godrayGenUniforms[ "vSunPositionScreenSpace" ].value.copy( screenSpacePosition );
                postprocessing.godraysFakeSunUniforms[ "vSunPositionScreenSpace" ].value.copy( screenSpacePosition );

                // -- Draw sky and sun --

                // Clear colors and depths, will clear to sky color

                renderer.setRenderTarget( postprocessing.rtTextureColors );
                renderer.clear( true, true, false );

                // Sun render. Runs a shader that gives a brightness based on the screen
                // space distance to the sun. Not very efficient, so i make a scissor
                // rectangle around the suns position to avoid rendering surrounding pixels.

                const sunsqH = 0.74 * window.innerHeight; // 0.74 depends on extent of sun from shader
                const sunsqW = 0.74 * window.innerHeight; // both depend on height because sun is aspect-corrected

                screenSpacePosition.x *= window.innerWidth;
                screenSpacePosition.y *= window.innerHeight;

                renderer.setScissor( screenSpacePosition.x - sunsqW / 2, screenSpacePosition.y - sunsqH / 2, sunsqW, sunsqH );
                renderer.setScissorTest( true );

                postprocessing.godraysFakeSunUniforms[ "fAspect" ].value = window.innerWidth / window.innerHeight;

                postprocessing.scene.overrideMaterial = postprocessing.materialGodraysFakeSun;
                renderer.setRenderTarget( postprocessing.rtTextureColors );
                renderer.render( postprocessing.scene, postprocessing.camera );

                renderer.setScissorTest( false );

                // -- Draw scene objects --

                // Colors

                scene.overrideMaterial = null;
                renderer.setRenderTarget( postprocessing.rtTextureColors );
                renderer.render( scene, camera );

                // Depth

                scene.overrideMaterial = materialDepth;
                renderer.setRenderTarget( postprocessing.rtTextureDepth );
                renderer.clear();
                renderer.render( scene, camera );

                //

                postprocessing.godrayMaskUniforms[ "tInput" ].value = postprocessing.rtTextureDepth.texture;

                postprocessing.scene.overrideMaterial = postprocessing.materialGodraysDepthMask;
                renderer.setRenderTarget( postprocessing.rtTextureDepthMask );
                renderer.render( postprocessing.scene, postprocessing.camera );

                // -- Render god-rays --

                // Maximum length of god-rays (in texture space [0,1]X[0,1])

                const filterLen = 1.0;

                // Samples taken by filter

                const TAPS_PER_PASS = 6.0;

                // Pass order could equivalently be 3,2,1 (instead of 1,2,3), which
                // would start with a small filter support and grow to large. however
                // the large-to-small order produces less objectionable aliasing artifacts that
                // appear as a glimmer along the length of the beams

                // pass 1 - render into first ping-pong target
                filterGodRays( postprocessing.rtTextureDepthMask.texture, postprocessing.rtTextureGodRays2, getStepSize( filterLen, TAPS_PER_PASS, 1.0 ) );

                // pass 2 - render into second ping-pong target
                filterGodRays( postprocessing.rtTextureGodRays2.texture, postprocessing.rtTextureGodRays1, getStepSize( filterLen, TAPS_PER_PASS, 2.0 ) );

                // pass 3 - 1st RT
                filterGodRays( postprocessing.rtTextureGodRays1.texture, postprocessing.rtTextureGodRays2, getStepSize( filterLen, TAPS_PER_PASS, 3.0 ) );

                // final pass - composite god-rays onto colors

                postprocessing.godrayCombineUniforms[ "tColors" ].value = postprocessing.rtTextureColors.texture;
                postprocessing.godrayCombineUniforms[ "tGodRays" ].value = postprocessing.rtTextureGodRays2.texture;

                postprocessing.scene.overrideMaterial = postprocessing.materialGodraysCombine;

                renderer.setRenderTarget( null );
                renderer.render( postprocessing.scene, postprocessing.camera );
                postprocessing.scene.overrideMaterial = null;

            } else {

                renderer.setRenderTarget( null );
                renderer.clear();
                renderer.render( scene, camera );

            }

        }

    }

    function getCanvasRelativePosition(event) {
		const rect = canvas.getBoundingClientRect();
		return {
		x: (event.clientX - rect.left) * canvas.width  / rect.width,
		y: (event.clientY - rect.top ) * canvas.height / rect.height,
		};
	}

	function setPickPosition(event) {
		const pos = getCanvasRelativePosition(event);
		pickPosition.x = (pos.x /  canvas.width ) *  2 - 1;
        pickPosition.y = (pos.y / canvas.height) * -2 + 1;  // note we flip Y
	}

	
    controls.addEventListener('change', () => {

        orbiting = true;
        // console.log(orbiting)

    });

	function clearPickPosition() {
		// unlike the mouse which always has a position
		// if the user stops touching the screen we want
		// to stop picking. For now we just pick a value
		// unlikely to pick something
		pickPosition.x = -100000;
		pickPosition.y = -100000;
  }
  

    canvas.addEventListener('mousemove', setPickPosition);
	canvas.addEventListener('mouseout', clearPickPosition);
    canvas.addEventListener('mouseleave', clearPickPosition);
    canvas.addEventListener('click', () => {
        orbiting = false;
        // console.log(orbiting);
        if(begin && version === 'main'){
            checkForClick();
        }
    })


	canvas.addEventListener('touchstart', (event) => {
		// prevent the window from scrolling
		event.preventDefault();
        setPickPosition(event.touches[0]);
        if(version === 'main'){checkForClick();}
	}, {passive: false});

	canvas.addEventListener('touchmove', (event) => {
        setPickPosition(event.touches[0]);
        if(version === 'main'){checkForClick();}
	});

	canvas.addEventListener('touchend', () => {
        clearPickPosition();
        orbiting = false;
        if(version === 'main'){checkForClick();}
	})

}

function init_2(){

    selected.push('2');

    guide_all.style.display = 'block';
    guide_all.style.top = '50px';
    guide_all.style.left = '100px';

    let canvas = document.querySelector('#c-2');
    canvas.style.display = 'block';

    let scene, camera, renderer;
    let geometry, mesh, material;
    let mouse, center;

    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set( 0, 0, 500 );

    scene = new THREE.Scene();
    center = new THREE.Vector3();
    center.z = - 1000;

    const video = document.getElementById( 'video-2' );

    const texture = new THREE.VideoTexture( video );
    texture.minFilter = THREE.NearestFilter;

    const width = 640, height = 480;
    const nearClipping = 850, farClipping = 4000;

    geometry = new THREE.BufferGeometry();

    const vertices = new Float32Array( width * height * 3 );

    for ( let i = 0, j = 0, l = vertices.length; i < l; i += 3, j ++ ) {

        vertices[ i ] = j % width;
        vertices[ i + 1 ] = Math.floor( j / width );

    }

    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

    material = new THREE.ShaderMaterial( {

        uniforms: {

            "map": { value: texture },
            "width": { value: width },
            "height": { value: height },
            "nearClipping": { value: nearClipping },
            "farClipping": { value: farClipping },

            "pointSize": { value: 5 },
            "zOffset": { value: 1000 }

        },
        vertexShader: document.getElementById( 'vs' ).textContent,
        fragmentShader: document.getElementById( 'fs' ).textContent,
        blending: THREE.AdditiveBlending,
        depthTest: false, depthWrite: false,
        transparent: true

    } );

    mesh = new THREE.Points( geometry, material );
    scene.add( mesh );

    video.play();

    renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    mouse = new THREE.Vector3( 0, 0, 1 );

    canvas.addEventListener( 'mousemove', onDocumentMouseMove, false );

    //

    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove( event ) {

        mouse.x = ( event.clientX - window.innerWidth / 2 ) * 8;
        mouse.y = ( event.clientY - window.innerHeight / 2 ) * 8;

    }

    function animate() {

        requestAnimationFrame( animate );

        render();

    }

    animate();

    function render() {

        if(version === 2){
            camera.position.x += ( mouse.x - camera.position.x ) * 0.05;
            camera.position.y += ( - mouse.y - camera.position.y ) * 0.05;
            camera.lookAt( center );

            renderer.render( scene, camera );
        }

    }
}

function init_3(){
    selected.push('3');

    guide_all.style.display = 'block';
    guide_all.style.top = '80vh';
    guide_all.style.left = '100px';

    let canvas = document.querySelector('#c-3');
    canvas.style.display = 'block';

    init();

    function init() {

        let container, stats;

        let scene, renderer, composer, gui;

        let currentSceneIndex = 0;

        let currentTime = 0;

        const sceneCreators = [
            createConesScene
        ];

        const clock = new THREE.Clock();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();


        renderer = new THREE.WebGLRenderer({canvas, antialias: true});
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.outputEncoding = THREE.sRGBEncoding;


        composer = new EffectComposer( renderer );


        window.addEventListener( 'resize', onWindowResize, false );

        createScene();



        animate();




        function createScene() {

scene = sceneCreators[ currentSceneIndex ]();

createGUI();

}

function onWindowResize() {

scene.userData.camera.aspect = window.innerWidth / window.innerHeight;
scene.userData.camera.updateProjectionMatrix();

renderer.setSize( window.innerWidth, window.innerHeight );

composer.setSize( window.innerWidth, window.innerHeight );

}

//


function createGUI() {

scene.userData.sceneIndex = currentSceneIndex;

scene.userData.timeRate = 1;

scene.userData.lightningColorRGB = [
    scene.userData.lightningColor.r * 255,
    scene.userData.lightningColor.g * 255,
    scene.userData.lightningColor.b * 255
];


}

//

function animate() {

requestAnimationFrame( animate );

render();

}

function render() {

if(version === 3){
    currentTime += scene.userData.timeRate * clock.getDelta()/2;

scene.userData.rayParams.radius0 = 2 + 2*Math.sin(currentTime);
scene.userData.rayParams.radius1 = 2 + -2*Math.sin(currentTime);
scene.userData.rayParams.subrayPeriod = 3.5 + 5 * Math.sin(currentTime);
scene.userData.rayParams.recursionProbability = 0.6 + 0.6*Math.sin(currentTime);

if ( currentTime < 0 ) {

    currentTime = 0;

}

scene.userData.render( currentTime );

}
}

function createOutline( scene, objectsArray, visibleColor ) {

const outlinePass = new OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), scene, scene.userData.camera, objectsArray );
outlinePass.edgeStrength = 2.5;
outlinePass.edgeGlow = 0.7;
outlinePass.edgeThickness = 2.8;
outlinePass.visibleEdgeColor = visibleColor;
outlinePass.hiddenEdgeColor.set( 0 );
composer.addPass( outlinePass );

scene.userData.outlineEnabled = true;

return outlinePass;

}

//

function createConesScene() {

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x050505 );

scene.userData.canGoBackwardsInTime = true;

scene.userData.camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 200, 100000 );

// Lights

scene.userData.lightningColor = new THREE.Color( 0xB0FFFF );
scene.userData.outlineColor = new THREE.Color( 0x00FFFF );

const posLight = new THREE.PointLight( 0x00ffff, 1, 5000, 2 );
scene.add( posLight );

// Ground

const ground = new THREE.Mesh( new THREE.PlaneBufferGeometry( 200000, 200000 ), new THREE.MeshPhongMaterial( { color: 0xC0C0C0, shininess: 0 } ) );
ground.rotation.x = - Math.PI * 0.5;
scene.add( ground );

// Cones

const conesDistance = 1000;
const coneHeight = 200;
const coneHeightHalf = coneHeight * 0.5;

posLight.position.set( 0, ( conesDistance + coneHeight ) * 0.5, 0 );
posLight.color = scene.userData.outlineColor;

scene.userData.camera.position.set( 5 * coneHeight, 4 * coneHeight, 18 * coneHeight );

const coneMesh1 = new THREE.Mesh( new THREE.ConeBufferGeometry( 5, 5, 30, 1, false ), new THREE.MeshPhongMaterial( { color: 0x00000, transparent: true, opacity: 1 } ) );
coneMesh1.rotation.x = Math.PI;
coneMesh1.position.y = conesDistance + coneHeight;
scene.add( coneMesh1 );

const coneMesh2 = new THREE.Mesh( coneMesh1.geometry.clone(), new THREE.MeshPhongMaterial( { color: 0x00000, transparent: true, opacity: 1 } ) );
coneMesh2.position.y = coneHeightHalf;
scene.add( coneMesh2 );

// bottom model
const gltfLoader = new GLTFLoader();
    gltfLoader.load( assets + 'desperate.gltf', (gltf) => {
        let root = gltf.scene;
        root.scale.y = 300;
        root.scale.x = 300;
        root.scale.z = 300;
        root.position.y = 100;
        // root.rotation.x = Math.PI;
        coneMesh2.add(root);
        console.log(root);

    },
    
    // called while loading is progressing
	( xhr ) => {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	( error ) => {
		console.log( 'An error happened' );
    }
);

// top model
const gltfLoader2 = new GLTFLoader();
    gltfLoader.load( assets + 'swimming.gltf', (gltf) => {
        let root2 = gltf.scene;
        root2.scale.y = 300;
        root2.scale.x = 300;
        root2.scale.z = 300;
        root2.rotation.x = Math.PI;
        root2.position.y = 50;
        coneMesh1.add(root2);
        console.log(root2);
        

    },
    
    // called while loading is progressing
	( xhr ) => {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	( error ) => {
		console.log( 'An error happened' );
    }
);

// Lightning strike

scene.userData.lightningMaterial = new THREE.MeshBasicMaterial( { color: scene.userData.lightningColor } );

scene.userData.rayParams = {

    sourceOffset: new THREE.Vector3(),
    destOffset: new THREE.Vector3(),
    radius0: 4,
    radius1: 4,
    minRadius: 2.5,
    maxIterations: 7,
    isEternal: true,

    timeScale: 0.7,

    propagationTimeFactor: 0.05,
    vanishingTimeFactor: 0.95,
    subrayPeriod: 3.5,
    subrayDutyCycle: 0.6,
    maxSubrayRecursion: 3,
    ramification: 7,
    recursionProbability: 0.6,

    roughness: 0.85,
    straightness: 0.6

};

let lightningStrike;
let lightningStrikeMesh;
const outlineMeshArray = [];

scene.userData.recreateRay = function () {

    if ( lightningStrikeMesh ) {

        scene.remove( lightningStrikeMesh );

    }

    lightningStrike = new LightningStrike( scene.userData.rayParams );
    lightningStrikeMesh = new THREE.Mesh( lightningStrike, scene.userData.lightningMaterial );

    outlineMeshArray.length = 0;
    outlineMeshArray.push( lightningStrikeMesh );

    scene.add( lightningStrikeMesh );

};

scene.userData.recreateRay();

// Compose rendering

composer.passes = [];
composer.addPass( new RenderPass( scene, scene.userData.camera ) );
createOutline( scene, outlineMeshArray, scene.userData.outlineColor );

// Controls

const controls = new OrbitControls( scene.userData.camera, renderer.domElement );
controls.target.y = ( conesDistance + coneHeight ) * 0.5;
controls.enableDamping = true;
controls.dampingFactor = 0.05;

scene.userData.render = function ( time ) {

    // Move cones and Update ray position
    coneMesh1.position.set( Math.sin( 0.5 * time ) * conesDistance * 0.6, conesDistance + coneHeight, Math.cos( 0.5 * time ) * conesDistance * 0.6 );
    coneMesh2.position.set( Math.sin( 0.9 * time ) * conesDistance, coneHeightHalf, 0 );
    lightningStrike.rayParameters.sourceOffset.copy( coneMesh1.position );
    lightningStrike.rayParameters.sourceOffset.y -= coneHeightHalf;
    lightningStrike.rayParameters.destOffset.copy( coneMesh2.position );
    lightningStrike.rayParameters.destOffset.y += coneHeightHalf;

    lightningStrike.update( time );

    controls.update();

    // Update point light position to the middle of the ray
    posLight.position.lerpVectors( lightningStrike.rayParameters.sourceOffset, lightningStrike.rayParameters.destOffset, 0.5 );

    if ( scene.userData.outlineEnabled ) {

        composer.render();

    }	else {

        renderer.render( scene, scene.userData.camera );

    }

};

return scene;

}


    }
}

function init_4(){
    selected.push('4');

    guide_all.style.display = 'block';
    guide_all.style.top = '70vh';
    guide_all.style.left = '90vw';

    let canvas = document.querySelector('#c-4');
    canvas.style.display = 'block';

    init();


function init() {

    let container, stats;

    let camera, scene, renderer;

    let materials, current_material;

    let light, pointLight, ambientLight;

    let effect, resolution;

    let effectController;

    let time = 0;
    const clock = new THREE.Clock();

    // CAMERA

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( - 500, 500, 1500 );

    // SCENE

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x050505 );

    // LIGHTS

    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0.5, 0.5, 1 );
    scene.add( light );

    pointLight = new THREE.PointLight( 0xff3300 );
    pointLight.position.set( 0, 0, 100 );
    scene.add( pointLight );

    ambientLight = new THREE.AmbientLight( 0x080808 );
    scene.add( ambientLight );

    // MATERIALS

    materials = generateMaterials();
    current_material = "shiny";

    // MARCHING CUBES

    resolution = 28;

    effect = new MarchingCubes( resolution, materials[ current_material ].m, true, true );
    effect.position.set( 0, 0, 0 );
    effect.scale.set( 700, 700, 700 );

    effect.enableUvs = false;
    effect.enableColors = false;

    scene.add( effect );

    // RENDERER

    renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    // CONTROLS

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = 500;
    controls.maxDistance = 5000;



    // GUI

    setupGui();

    // EVENTS

    window.addEventListener( 'resize', onWindowResize, false );

    animate();

    function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function generateMaterials() {

    // environment map

    const path = assets + "SwedishRoyalCastle/";
    const format = '.jpg';
    const urls = [
        path + 'px' + format, path + 'nx' + format,
        path + 'py' + format, path + 'ny' + format,
        path + 'pz' + format, path + 'nz' + format
    ];

    const cubeTextureLoader = new THREE.CubeTextureLoader();

    const reflectionCube = cubeTextureLoader.load( urls );
    const refractionCube = cubeTextureLoader.load( urls );
    refractionCube.mapping = THREE.CubeRefractionMapping;

    // toons

    const toonMaterial1 = createShaderMaterial( ToonShader1, light, ambientLight );
    const toonMaterial2 = createShaderMaterial( ToonShader2, light, ambientLight );
    const hatchingMaterial = createShaderMaterial( ToonShaderHatching, light, ambientLight );
    const dottedMaterial = createShaderMaterial( ToonShaderDotted, light, ambientLight );

    const texture = new THREE.TextureLoader().load( "assets/uv_grid_opengl.jpg" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    const materials = {

        "shiny": {
            m: new THREE.MeshStandardMaterial( { color: 0x550000, envMap: reflectionCube, roughness: 0.1, metalness: 1.0 } ),
            h: 0, s: 0.8, l: 0.2
        }
    };

    return materials;

    }

    function createShaderMaterial( shader, light, ambientLight ) {

    const u = THREE.UniformsUtils.clone( shader.uniforms );

    const vs = shader.vertexShader;
    const fs = shader.fragmentShader;

    const material = new THREE.ShaderMaterial( { uniforms: u, vertexShader: vs, fragmentShader: fs } );

    material.uniforms[ "uDirLightPos" ].value = light.position;
    material.uniforms[ "uDirLightColor" ].value = light.color;

    material.uniforms[ "uAmbientLightColor" ].value = ambientLight.color;

    return material;

    }

    //

    function setupGui() {

    const createHandler = function ( id ) {

        return function () {

            const mat_old = materials[ current_material ];
            mat_old.h = m_h.getValue();
            mat_old.s = m_s.getValue();
            mat_old.l = m_l.getValue();

            current_material = id;

            const mat = materials[ id ];
            effect.material = mat.m;

            m_h.setValue( mat.h );
            m_s.setValue( mat.s );
            m_l.setValue( mat.l );

            effect.enableUvs = ( current_material === "textured" ) ? true : false;
            effect.enableColors = ( current_material === "colors" || current_material === "multiColors" ) ? true : false;

        };

    };

    effectController = {

        material: "shiny",

        speed: 1.0,
        numBlobs: 10,
        resolution: 35,
        isolation: 80,

        floor: true,
        wallx: false,
        wallz: false,

        hue: 0.0,
        saturation: 0.8,
        lightness: 0.1,

        lhue: 0.04,
        lsaturation: 1.0,
        llightness: 0.5,

        lx: 0.5,
        ly: 0.5,
        lz: 1.0,

        dummy: function () {}

    };

    let h;

    

    
    }

    // this controls content of marching cubes voxel field

    function updateCubes( object, time, numblobs, floor, wallx, wallz ) {

    object.reset();

    // fill the field with some metaballs

    const rainbow = [
        new THREE.Color( 0xff0000 ),
        new THREE.Color( 0xff7f00 ),
        new THREE.Color( 0xffff00 ),
        new THREE.Color( 0x00ff00 ),
        new THREE.Color( 0x0000ff ),
        new THREE.Color( 0x4b0082 ),
        new THREE.Color( 0x9400d3 )
    ];
    const subtract = 12;
    const strength = 1.2 / ( ( Math.sqrt( numblobs ) - 1 ) / 4 + 1 );

    for ( let i = 0; i < numblobs; i ++ ) {

        const ballx = Math.sin( i + 1.26 * time * ( 1.03 + 0.5 * Math.cos( 0.21 * i ) ) ) * 0.27 + 0.5;
        const bally = Math.abs( Math.cos( i + 1.12 * time * Math.cos( 1.22 + 0.1424 * i ) ) ) * 0.77; // dip into the floor
        const ballz = Math.cos( i + 1.32 * time * 0.1 * Math.sin( ( 0.92 + 0.53 * i ) ) ) * 0.27 + 0.5;

        if ( current_material === 'multiColors' ) {

            object.addBall( ballx, bally, ballz, strength, subtract, rainbow[ i % 7 ] );

        } else {

            object.addBall( ballx, bally, ballz, strength, subtract );

        }

    }

    if ( floor ) object.addPlaneY( 2, 12 );
    if ( wallz ) object.addPlaneZ( 2, 12 );
    if ( wallx ) object.addPlaneX( 2, 12 );

    }

    //

    function animate() {

    requestAnimationFrame( animate );

    render();

    }

    function render() {

   if(version === 4){
    const delta = clock.getDelta();
    

    time += delta * 0.5;
    

    
    effectController.speed = 10 - 8 * Math.sin(time/10);
    effectController.numBlobs = 10 - 10 * Math.sin(time/10);
    effectController.isolation  = 80 - 20 * Math.sin(time/10);
   

    // marching cubes

    if ( effectController.resolution !== resolution ) {

        resolution = effectController.resolution;
        effect.init( Math.floor( resolution ) );

    }

    if ( effectController.isolation !== effect.isolation ) {

        effect.isolation = effectController.isolation;

    }

    updateCubes( effect, time, effectController.numBlobs, effectController.floor, effectController.wallx, effectController.wallz );

    // materials

    if ( effect.material instanceof THREE.ShaderMaterial ) {

        effect.material.uniforms[ "uBaseColor" ].value.setHSL( effectController.hue, effectController.saturation, effectController.lightness );

    } else {

        effect.material.color.setHSL( effectController.hue, effectController.saturation, effectController.lightness );

    }

    // lights

    light.position.set( effectController.lx, effectController.ly, effectController.lz );
    light.position.normalize();

    pointLight.color.setHSL( effectController.lhue, effectController.lsaturation, effectController.llightness );

    // render

    renderer.render( scene, camera );
   }

    }

}
}

function init_5(){
    selected.push('5');

    guide_all.style.display = 'block';
    guide_all.style.top = '50px';
    guide_all.style.left = '100px';

    let canvas = document.querySelector('#c-5');
    canvas.style.display = 'block';

    init();

    function init(){
        let torus;
    
        const ENTIRE_SCENE = 0, BLOOM_SCENE = 1;
    
    const bloomLayer = new THREE.Layers();
    bloomLayer.set( BLOOM_SCENE );
    
    const darkMaterial = new THREE.MeshBasicMaterial( { color: "black" } );
    const materials = {};
    
    const renderer = new THREE.WebGLRenderer( { canvas, antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.toneMapping = THREE.ReinhardToneMapping;
    
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 200 );
    camera.position.set( 0, 0, 20 );
    camera.lookAt( 0, 0, 0 );
    
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minDistance = 1;
    controls.maxDistance = 100;
    controls.addEventListener( 'change', render );
    
    scene.add( new THREE.AmbientLight( 0x404040, 1 ) );
    
    const renderScene = new RenderPass( scene, camera );
    
    const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
    bloomPass.threshold = 0;
    bloomPass.strength = 5;
    bloomPass.radius = 0;
    
    const bloomComposer = new EffectComposer( renderer );
    bloomComposer.renderToScreen = false;
    bloomComposer.addPass( renderScene );
    bloomComposer.addPass( bloomPass );
    
    const finalPass = new ShaderPass(
        new THREE.ShaderMaterial( {
            uniforms: {
                baseTexture: { value: null },
                bloomTexture: { value: bloomComposer.renderTarget2.texture }
            },
            vertexShader: document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
            defines: {}
        } ), "baseTexture"
    );
    finalPass.needsSwap = true;
    
    const finalComposer = new EffectComposer( renderer );
    finalComposer.addPass( renderScene );
    finalComposer.addPass( finalPass );
    
    const raycaster = new THREE.Raycaster();
    
    const mouse = new THREE.Vector2();
    
    window.addEventListener( 'click', onDocumentMouseClick, false );
    
    
    setupScene();
    
    function onDocumentMouseClick( event ) {
    
        event.preventDefault();
    
    
    }
    
    window.onresize = function () {
    
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    
        renderer.setSize( width, height );
    
        bloomComposer.setSize( width, height );
        finalComposer.setSize( width, height );
    
        render();
    
    };
    
    function setupScene() {
    
        // scene.traverse( disposeMaterial );
        // scene.children.length = 0;
    
        const geometry = new THREE.IcosahedronBufferGeometry( 1, 15 );
        
        const star_material = new THREE.MeshBasicMaterial({color: 0xFCFF03});
        const star = new THREE.Mesh(geometry, star_material);
        scene.add(star);
        star.layers.enable( BLOOM_SCENE );
    
        const torus_geom = new THREE.TorusKnotBufferGeometry( 8, 1, 300, 32, 6, 8 );
        const torus_mat = new THREE.MeshPhongMaterial( { color: 0x6EF3F2, shininess: 2 } );
    
        torus = new THREE.Mesh( torus_geom, torus_mat );
        scene.add( torus );
    
        render();
    
    }
    
    function disposeMaterial( obj ) {
    
        if ( obj.material ) {
    
            obj.material.dispose();
    
        }
    
    }
    
    function render(time) {
    
        if(version === 5){
            time *= 0.00001;
        renderBloom( true );
    
        // render the entire scene, then render bloom scene on top
        finalComposer.render();
        torus.rotation.y += 0.001;
        torus.rotation.z += 0.0001;
    
        bloomPass.strength = 5 + 10*Math.sin(time);
        bloomPass.radius = 0.5 * Math.sin(time);
    
        requestAnimationFrame(render);
        }
    
    }
    
    function renderBloom( mask ) {
            scene.traverse( darkenNonBloomed );
            bloomComposer.render();
            scene.traverse( restoreMaterial );
    }
    
    function darkenNonBloomed( obj ) {
    
        if ( obj.isMesh && bloomLayer.test( obj.layers ) === false ) {
    
            materials[ obj.uuid ] = obj.material;
            obj.material = darkMaterial;
    
        }
    
    }
    
    function restoreMaterial( obj ) {
    
        if ( materials[ obj.uuid ] ) {
    
            obj.material = materials[ obj.uuid ];
            delete materials[ obj.uuid ];
    
        }
    
    }
    }
}

function init_6(){

    selected.push('6');
    
    guide_all.style.display = 'block';
    guide_all.style.top = '90vh';
    guide_all.style.left = '80vw';

    let canvas = document.querySelector('#c-6');
    canvas.style.display = 'block';

    let scene, camera, renderer;
    let geometry, mesh, material;
    let mouse, center;

    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set( 0, 0, 500 );

    scene = new THREE.Scene();
    center = new THREE.Vector3();
    center.z = - 1000;

    const video = document.getElementById( 'video-6' );

    const texture = new THREE.VideoTexture( video );
    texture.minFilter = THREE.NearestFilter;

    const width = 640, height = 480;
    const nearClipping = 850, farClipping = 4000;

    geometry = new THREE.BufferGeometry();

    const vertices = new Float32Array( width * height * 3 );

    for ( let i = 0, j = 0, l = vertices.length; i < l; i += 3, j ++ ) {

        vertices[ i ] = j % width;
        vertices[ i + 1 ] = Math.floor( j / width );

    }

    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

    material = new THREE.ShaderMaterial( {

        uniforms: {

            "map": { value: texture },
            "width": { value: width },
            "height": { value: height },
            "nearClipping": { value: nearClipping },
            "farClipping": { value: farClipping },

            "pointSize": { value: 8 },
            "zOffset": { value: 1000 }

        },
        vertexShader: document.getElementById( 'vs' ).textContent,
        fragmentShader: document.getElementById( 'fs' ).textContent,
        blending: THREE.AdditiveBlending,
        depthTest: false, depthWrite: false,
        transparent: true

    } );

    mesh = new THREE.Points( geometry, material );
    scene.add( mesh );

    video.play();

    renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    mouse = new THREE.Vector3( 0, 0, 1 );

    canvas.addEventListener( 'mousemove', onDocumentMouseMove, false );

    //

    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove( event ) {

        mouse.x = ( event.clientX - window.innerWidth / 2 ) * 8;
        mouse.y = ( event.clientY - window.innerHeight / 2 ) * 8;

    }

    function animate() {

        requestAnimationFrame( animate );

        render();

    }

    animate();

    function render() {

        if(version === 6){
            camera.position.x += ( mouse.x - camera.position.x ) * 0.05;
        camera.position.y += ( - mouse.y - camera.position.y ) * 0.05;
        camera.lookAt( center );

        renderer.render( scene, camera );
        }

    }
}

function init_7(){
    selected.push('7');

    loadingElem.style.display = 'flex';
    guide_all.style.display = 'block';
    guide_all.style.top = '50px';
    guide_all.style.left = '50vw';

    let canvas = document.querySelector('#c-7');
    canvas.style.display = 'block';

    init();
			

			function init() {

                let container, stats;
                let camera, scene, renderer;
                let controls, water, sun, mesh;

                

				//

				renderer = new THREE.WebGLRenderer({canvas, antialias: true});
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );

				//

				scene = new THREE.Scene();

				camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
				camera.position.set( 30, 30, 100 );

				//

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
						sunColor: 0xffffff,
						waterColor: 0x001e0f,
						distortionScale: 3.7,
						fog: scene.fog !== undefined
					}
				);

				water.rotation.x = - Math.PI / 2;

				scene.add( water );

				// Skybox

				const sky = new Sky();
				sky.scale.setScalar( 10000 );
				scene.add( sky );

				const skyUniforms = sky.material.uniforms;

				skyUniforms[ 'turbidity' ].value = 10;
				skyUniforms[ 'rayleigh' ].value = 2;
				skyUniforms[ 'mieCoefficient' ].value = 0.005;
				skyUniforms[ 'mieDirectionalG' ].value = 0.8;

				const parameters = {
					inclination: 0.49,
					azimuth: 0.205
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
                let root;

				// bottom model
                const gltfLoader = new GLTFLoader();
                    gltfLoader.load( assets + 'frames.gltf', (gltf) => {
                        root = gltf.scene;

                        // root.rotation.x = Math.PI;
                        scene.add(root);
                        console.log(root);

                    },
                    
                    // called while loading is progressing
                    ( xhr ) => {
                        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

                        progressBarElem.style.width = xhr.loaded / xhr.total *100 + '%';
                        if(xhr.loaded === xhr.total){
                            // count ++;
                            // console.log(count);
                            orbiting = false;
                            loadingElem.classList.add('d-none');
                        }
                    },
                    // called when loading has errors
                    ( error ) => {
                        console.log( 'An error happened' );
                    }
                );

				//

				controls = new OrbitControls( camera, renderer.domElement );
				controls.maxPolarAngle = Math.PI * 0.495;
				controls.target.set( 0, 10, 0 );
				controls.minDistance = 40.0;
				controls.maxDistance = 200.0;
				controls.update();

				//


				// GUI

				

				//

                window.addEventListener( 'resize', onWindowResize, false );
                

                function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

                }

                animate();

                function animate() {

                requestAnimationFrame( animate );
                render();

                }

                function render() {

                if(version === 7){
                    const time = performance.now() * 0.001;

                if(root !== undefined){
                    // root.children[8].position.y = Math.sin( time ) * 20 + 5;
                    // root.children[8].rotation.x = time * 0.5;
                    // root.children[8].rotation.z = time * 0.51;

                    root.children.forEach((child, index) => {
                        child.position.y = Math.sin(time*(index+5)/10) * (index+1) + 5;
                        child.rotation.z = Math.sin(time/10) * (index+1)/2;
                    })
                }

                water.material.uniforms[ 'time' ].value += 1.0 / 60.0;

                renderer.render( scene, camera );
                }

                }

			}
}







function clearAll(){
    let canvases = document.querySelectorAll('canvas');
    canvases.forEach(canvas => {
        canvas.style.display = 'none';
    })

}

function checkForClick(){
    if(version === 'main'){
        if(currentObject !== 'tree' && currentObject !== undefined){
            clearAll();
        }
        if( currentObject === '1' ){
            
            version = 1;
            currentObject = undefined;
            init_1();
            console.log('version = ' + version)
        } else if ( currentObject === '2' ){
            
            version = 2;
            currentObject = undefined;
            allWidgets[0].play();
            init_2();
            console.log('version = ' + version)

        } else if ( currentObject === '3' ){
            
            version = 3;
            currentObject = undefined;
            allWidgets[1].play();
            init_3();
            console.log('version = ' + version)
        } else if ( currentObject === '4' ){
            
            version = 4;
            currentObject = undefined;
            allWidgets[2].play();
            init_4();
            console.log('version = ' + version)
        } else if ( currentObject === '5' ){
            
            version = 5;
            currentObject = undefined;
            allWidgets[3].play();
            init_5();
            console.log('version = ' + version)
        } else if (currentObject === '6' ){
            
            version = 6;
            currentObject = undefined;
            allWidgets[4].play();
            init_6();
            console.log('version = ' + version)
        } else if (currentObject === '7' ){
            
            version = 7;
            currentObject = undefined;
            allWidgets[5].play();
            init_7();
            console.log('version = ' + version)
        }
    }
}

