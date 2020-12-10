import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';

const ambient = document.querySelector('#ambient');
var widget1 = SC.Widget(ambient);

widget1.bind(SC.Widget.Events.FINISH, function(){
    widget1.play();
});

const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const canvas = document.querySelector('#c');

const loadingElem = document.querySelector('#loading');
const progressBarElem = loadingElem.querySelector('.progressbar');

let camera, scene, renderer, controls;
let root;

let orbiting = false;
let viewing = false;
let currentObject;

const popupWindow = document.querySelector('.popup-window');
const videoContainer = document.querySelector('.video');
const close = document.querySelector('#close');
const allIds = ['481118921', '481119074', '481119212', '481119274'];


const opening = document.querySelector('.opening-video');
const openingVideo = opening.querySelector('iframe');
const skip_opening = opening.querySelector('#skip-opening');

beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
    
    opening.style.display = 'flex';

    let player = new Vimeo.Player(openingVideo);

    player.play();

    player.on('ended', function() {
        threeJsWindow.classList.remove('d-none');
        init();
        begin = true;
        widget1.play();
        opening.style.display = 'none';
    });

    
    
})

skip_opening.addEventListener('click', () => {
    threeJsWindow.classList.remove('d-none');
    openingVideo.src = ' ';
    init();
    begin = true;
    widget1.play();
    opening.style.display = 'none';
})



function init() {



    renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    //

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.set( 30, 30, 100 );

    //directional light
    {
        const color = 0x8AFEDA;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(0, 120/2 -10, 0);
        light.target.position.set(0, 0, 0);
        scene.add(light);
        scene.add(light.target);
    }
    


    controls = new OrbitControls( camera, renderer.domElement );
    controls.maxPolarAngle = Math.PI * 0.45;
    controls.minPolarAngle = Math.PI * 0.45;
    controls.target.set( 0, 10, 0 );
    controls.minDistance = 5.0;
    controls.maxDistance = 50.0;
    controls.update();

    
    const geomLight = new THREE.CylinderGeometry(10, 60, 120, 20, 4);
    const material = new THREE.MeshBasicMaterial({ color: 0x00FFF1, opacity: 0.2, transparent: true,  visible: true});
    const meshLight = new THREE.Mesh(geomLight, material);
    meshLight.position.y = -10;
    scene.add(meshLight);

    const geomSource = new THREE.CircleBufferGeometry(10, 50);
    const sourceMaterial = new THREE.MeshBasicMaterial({ color: 0x0AC78D})
    const meshSource = new THREE.Mesh(geomSource, sourceMaterial);
    meshSource.position.y = 120/2 -10;
    meshSource.rotation.x = Math.PI/180 * 90;
    scene.add(meshSource);
    
    

    // raycasting
    class PickHelper {
        constructor() {
          this.raycaster = new THREE.Raycaster();
          this.raycaster.far = 300;
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
                // console.log(this.pickedObject)
                }
            }

        }
      }
    
      const pickPosition = {x: 0, y: 0};
      const pickHelper = new PickHelper();
      clearPickPosition();

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
          
          scene.add(root);
          console.log(root);

          // compute the box that contains all the stuff
          // from root and below
          const box = new THREE.Box3().setFromObject(root);
    
          const boxSize = box.getSize(new THREE.Vector3()).length();
          const boxCenter = box.getCenter(new THREE.Vector3());
    
          // set the camera to frame the box
          frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
    
          // update the Trackball controls to handle the new size
          controls.maxDistance = boxSize*1.5;
          controls.minDistance = boxSize*0.5;
          controls.target.copy(boxCenter);
          controls.target.y = 10;
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
      

    window.addEventListener( 'resize', onWindowResize, false );

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
  

    window.addEventListener('mousemove', setPickPosition);
	window.addEventListener('mouseout', clearPickPosition);
    window.addEventListener('mouseleave', clearPickPosition);
    window.addEventListener('click', () => {
        orbiting = false;
        // console.log(orbiting);
        if(begin){
            checkForClick();
        }
    })


	window.addEventListener('touchstart', (event) => {
		// prevent the window from scrolling
		event.preventDefault();
        setPickPosition(event.touches[0]);
        checkForClick();
	}, {passive: false});

	window.addEventListener('touchmove', (event) => {
        setPickPosition(event.touches[0]);
        checkForClick();
	});

	window.addEventListener('touchend', () => {
        clearPickPosition();
        orbiting = false;
        checkForClick();
	})


    function transparent(object, bool){
        let transparecy = object.material.opacity;
        if(bool && transparecy < 1){
            transparecy += 0.01;
        } else if(!bool && transparecy >0){
            transparecy -= 0.01;
        }
        object.material.opacity = transparecy;
    }

    function checkForClick(){
        console.log(currentObject);
        popup(currentObject);
    }


    function animate() {

        requestAnimationFrame( animate );
        render();
    
    }

    animate();

    function render() {

        // console.log(orbiting);
        currentObject = undefined;
    
        pickHelper.pick(pickPosition, scene, camera);
        controls.update();
            
        if(pickHelper.pickedObject && !orbiting){
            if(pickHelper.pickedObject.name){
                currentObject = pickHelper.pickedObject.name;
                // console.log(currentObject);
                if(currentObject === '1'){
                    transparent(root.children[1], true)
                } else if( currentObject === '2'){
                    transparent(root.children[4], true)
                } else if(currentObject === '3'){
                    transparent(root.children[6], true);
                } else if(currentObject === '4'){
                    transparent(root.children[9], true)
                }
            }
        }

        if(currentObject === undefined && root !== undefined){
            transparent(root.children[1], false)
            transparent(root.children[4], false)
            transparent(root.children[6], false);
            transparent(root.children[9], false)
        }
    
        renderer.render( scene, camera );
    
    }

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function popup(object){

    let video;
    if(object === '1' || object === 'text-01' || object === 'text-01-01'){
        video = 1;
    } else if( object === '2'|| object === 'text-02' || object === 'text-02-01'){
        video = 2;
    } else if(object === '3' || object === 'text-03-1' || object === 'text-03-2' || object === 'text-03-2-01' || object === 'text-03-2-02'){
        video = 3;
    } else if(object === '4' || object === 'text-04' || object === 'text-04-01'){
        video = 4;
    }
    if(video != undefined){
        let id = allIds[video-1];
        popupWindow.style.display = 'flex';
        videoContainer.innerHTML = `
        <iframe src="https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
        widget1.pause();


        let iframe = videoContainer.querySelector('iframe');
        let player = new Vimeo.Player(iframe);

        player.on('ended', function() {
            close.click();
        });
      
    }
}

close.addEventListener('click', () => {
    popupWindow.style.display = 'none';
    videoContainer.innerHTML = ' ';
    widget1.play();
})