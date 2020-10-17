import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js';



// variables for event listeners
const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const popupWindow = document.querySelector('.popup-window');
const closeBtn = document.querySelector('#btn-close');


const content = document.querySelector('.content');

let currentObject;

// loader
const loadingElem = document.querySelector('#loading');
const progressBarElem = loadingElem.querySelector('.progressbar');

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let orbiting = false;
let viewing = false;



// three.js functions
const main  = () => {
    const canvas = document.querySelector('#c');

    // renderer
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // bring in audio listener
    const listener = new THREE.AudioListener();
    const audioLoader = new THREE.AudioLoader();

    // camera
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
    camera.position.set( 0, 2, 2 );


    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff);
    scene.fog = new THREE.FogExp2( 0xffffff, 0.01 );

    // controls
    const controls = new OrbitControls( camera, renderer.domElement );
 //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 10;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 15, 0);

    

    // loaders
    const loadManager = new THREE.LoadingManager();
    const textureLoader = new THREE.TextureLoader(loadManager);

    const addPointLight = (shade, intense, parent, angle, far, top, distance) => {
        const color = shade;
        const intensity = intense;
        const light = new THREE.SpotLight(color, intensity);
        light.castShadow = true;
        light.position.set(0, top, 0);
        light.target.position.set(-4, 0, -4);
        light.penumbra = 1;
        light.angle = angle;
        light.far = far;
        light.distance = distance;
        parent.add(light);
        parent.add(light.target);
    }

    addPointLight(0xFFFFFF, 1, scene, 1, 50, 500, 1000);

    scene.add( new THREE.AmbientLight( 0xffffff, 0.6 ) );

    // set up ground plane
    const groundSize = 300;
    const groundTexture = textureLoader.load(gridTexture);
    groundTexture.magFilter = THREE.NearestFilter;
    groundTexture.wrapS = THREE.RepeatWrapping;
    groundTexture.wrapT = THREE.RepeatWrapping;
    const repeats = groundSize / 8;
    groundTexture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneBufferGeometry(groundSize, groundSize);
    const planeMat = new THREE.MeshPhongMaterial({map: groundTexture});
    planeMat.transparent = true;
    planeMat.alphaTest = 0.1;

    const mapMesh = new THREE.Mesh(planeGeo, planeMat);
    mapMesh.receiveShadow = true;
    mapMesh.rotation.x = Math.PI * -.5;
    mapMesh.rotation.z = Math.PI/180 *45;
    mapMesh.position.y = -2;

    
    // add in random pyramids
    var beacons = [];
    
    var invismaterial = new THREE.MeshBasicMaterial( {color: 0x000000, transparent: true, opacity: 0})

    for ( var i = 0; i < 100; i ++ ) {
        var material = new THREE.MeshPhongMaterial( { color: 0xcccccc } );
        var height = Math.random() * 5 + 5;
        var geometry = new THREE.CylinderBufferGeometry( 0, 4, height, 4, 1 );

        var center = new THREE.Mesh( geometry, invismaterial);
        center.position.set( 0, 0, 0);
        scene.add(center);

        var mesh = new THREE.Mesh( geometry, material );
        mesh.position.x = i + 10  + Math.random() * 10;
        mesh.position.y = height/2;
        mesh.position.z = i + Math.random() * 5;
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        center.add( mesh );
        

        center.rotation.y = (i*(Math.random() * 10 + 30)*Math.PI/180)
        beacons.push( mesh );

    }

    // add photo planes
    var photos = [];
    for ( var i = 0; i < 10; i ++){
        var texture = textureLoader.load(`${assets}/${i+1}.png`);
        var photoMaterial = new THREE.MeshPhongMaterial({color: 'rgb(255, 255, 255)', map: texture});
        photoMaterial.transparent = true;
        photoMaterial.alphaTest = 0.1;
        photoMaterial.side = THREE.DoubleSide;
        var width = 10;
        var height = 10;
        var geometry = new THREE.PlaneBufferGeometry(width, height);

        var photoMesh = new THREE.Mesh(geometry, photoMaterial);
        
        photos.push(photoMesh);
    }

    


    // add kartographi logo
    var logo;
    {
        var kartographiTexture = textureLoader.load(`${assets}/logo.png`);
        var logoMaterial = new THREE.MeshPhongMaterial({map: kartographiTexture });
        logoMaterial.transparent = true;
        logoMaterial.alphaTest = 0.1;
        logoMaterial.side = THREE.DoubleSide;
        var logoGeomery = new THREE.PlaneBufferGeometry( 15 , 10 );
        logo = new THREE.Mesh( logoGeomery, logoMaterial );
        logo.position.set(0, 15 ,0);
        logo.lookAt(0, 15, 0 );
    }
    

    var possibleObjects = [];

    loadManager.onLoad = () => {
        loadingElem.style.display = 'none';
        scene.add(mapMesh); 
        scene.add(logo);

        for(var i = 0; i < photos.length; i ++){
            const beaconi = beacons[i * 5]
            beaconi.add(photos[i]);
            photos[i].position.set(0, 10, 0);
            photos[i].name = i + 1;
            photos[i].updateMatrix();
            possibleObjects.push(photos[i]);
            
            
        }
        
    };

    loadManager.onProgress = (urlOfLastItemLoaded, itemsLoaded, itemsTotal) => {
        const progress = itemsLoaded / itemsTotal*100;
        progressBarElem.style.width = progress + '%';
    };


    
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
      beacons.forEach(beacon => {
        var intersectedObjects = this.raycaster.intersectObjects(beacon.children);
        if (intersectedObjects.length) {
          // pick the first object. It's the closest one
          this.pickedObject = intersectedObjects[0].object;
        }
      })
    }
  }

  const pickPosition = {x: 0, y: 0};
  const pickHelper = new PickHelper();
  clearPickPosition();

    

    renderer.render( scene, camera );

    // resize function
    const onWindowResize = () => {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
    
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    
    }
    

    let up = true;

    const render = () => {
        currentObject = undefined;
        let itemSelected = false;
        window.addEventListener('resize', onWindowResize, false);


        // logo.lookAt(camera.position);
        if(logo.position.z > -50){
            logo.position.z -= 0.1;
            logo.position.y += 0.05;
        }
        if (logo.position.z < -30 && logo.material.opacity > 0) {
            logo.material.opacity -= 0.01;
        }

        let pinY = photos[5].position.y;
        
        if(pinY > 12){
            up = false
        } 
        if (pinY < 10){
            up = true;
        }
        if(up){
            photos[5].position.y += 0.05;
        } else {
            photos[5].position.y -= 0.05;
        }

        pickHelper.pick(pickPosition, scene, camera);
        
        if(pickHelper.pickedObject && !orbiting){
            if(pickHelper.pickedObject.name){
                currentObject = pickHelper.pickedObject.name;
                itemSelected = true;
                redColor(pickHelper.pickedObject, true);
            }
        }

        photos.forEach(photo => {
            if(!itemSelected){
                redColor(photo, false);
            }
        })
        
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.render(scene, camera);

        requestAnimationFrame(render);


        
    }

    requestAnimationFrame(render);
    controls.update();

    const redColor = (object, red) => {
        let g = object.material.color.g;
        let b = object.material.color.b;
        if( g < 1 && !red){ g += 0.05 };
        if( b < 1 && !red){ b += 0.05 };
        if( g > 0.5 && red){ g -= 0.05 };
        if( b > 0.5 && red){ b -= 0.05 };
        object.material.color.setRGB(1, g, b);
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
    window.addEventListener('mouseup', () => {
        orbiting = false;
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
}


// event listeners
beginBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    main();
});

beginBtn.addEventListener('touchend', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    main();
});


// functions
window.addEventListener('mouseup', () => {
    checkForClick();
});

const checkForClick = () => {
    if(!orbiting && !viewing && currentObject){
        openWindow();
        if(currentObject === 6){
            content.innerHTML = `<h1>${currentObject}</h1>`;
        } else if(currentObject === 1 || currentObject === 3 || currentObject === 5 || currentObject === 8 || currentObject === 9) {
            content.innerHTML = `
                <img src="${assets}popups/${currentObject}.GIF">
            `;
        } else {
            content.innerHTML = `
            <img src="${assets}popups/${currentObject}.jpg">
        `; 
        }
        
        
        console.log(currentObject);
    }
    currentObject = undefined;
}

closeBtn.addEventListener('click', () => {
    closeWindow();
})
closeBtn.addEventListener('touchstart', () => {
    closeWindow();
})

function closeWindow() {
    popupWindow.style.opacity = 0;
    popupWindow.style.zIndex = -10;
    viewing = false;
}
function openWindow(){
    popupWindow.style.opacity = 1;
    popupWindow.style.zIndex = 100;
    viewing = true;
}