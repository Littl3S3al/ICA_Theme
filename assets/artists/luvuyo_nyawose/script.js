import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/loaders/GLTFLoader.js';



// variables for event listeners
const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const closeBtn = document.querySelectorAll('.btn-close');
const popupWindows = document.querySelectorAll('.popup-window');
const ambient = document.querySelector('#ambient');

let currentObject;
let looking = false;
let picked = false;

// loader
const loadingElem = document.querySelector('#loading');
const progressBarElem = loadingElem.querySelector('.progressbar');

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let orbiting = false;
let viewing = false;

let clientX = 0;

let camX = 0;
let camY = 0;
let camZ = 0;

const next = document.querySelector('#next');
const previous = document.querySelector('#previous');

let newLocation = 45 + 22.5;
let current = 1;

let mousedown;




// three.js functions
const main  = () => {
    const canvas = document.querySelector('#c');

    // renderer
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true,});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // camera
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
    camera.position.set( 0, 500, 0);


    // scene
    const scene = new THREE.Scene();

    // controls
    const controls = new OrbitControls( camera, renderer.domElement );


    

    // loaders
    const loadManager = new THREE.LoadingManager();
    const textureLoader = new THREE.TextureLoader(loadManager);

    const addPointLight = (shade, intense, parent, angle, far, top, z,  distance) => {
        const color = shade;
        const intensity = intense;
        const light = new THREE.SpotLight(color, intensity);
        light.castShadow = true;
        light.position.set(0, top, z);
        light.target.position.set(0, 0, 0);
        light.penumbra = 1;
        light.angle = angle;
        light.far = far;
        light.distance = distance;
        parent.add(light);
        parent.add(light.target);
    }

    addPointLight(0xFFFFFF, 1, scene, 95, 50, 20, 140, 1000);
    addPointLight(0xffffff, 1, scene, 100, 100, 500, 0,  1000)

    // scene.add( new THREE.AmbientLight( 0xffffff, 0.1 ) );

    

    // add two torus
    let column;
    let roof1;
    let roofLip;
    let roof2;
    let floor;
    let floorLip;
    let env;

    // center column

    {
        const radius = 20;
        const height = 50;
        const outerRadius = 100;
        const outerHeight = 5;
        const radialSegments = 100;
        const concrete = textureLoader.load( assets + 'concrete.jpg');
        concrete.magFilter = THREE.NearestFilter;
        concrete.wrapS = THREE.RepeatWrapping;
        concrete.wrapT = THREE.RepeatWrapping;
        concrete.magFilter = THREE.NearestFilter;
        concrete.repeat.set(radialSegments/30, height/30);

        const geometry = new THREE.CylinderGeometry( radius, radius, height, radialSegments,radialSegments,true );
        const material = new THREE.MeshPhongMaterial({map: concrete, side: THREE.DoubleSide, shininess: 0.2});
        column = new THREE.Mesh(geometry, material);
        column.rotation.z = 180* Math.PI/180;
        column.position.y = height/2 - 5;
        column.rotation.y = 22.5* Math.PI/180;

        const outerGeo = new THREE.CylinderGeometry(outerRadius, outerRadius, outerHeight, radialSegments, radialSegments, true);
        roofLip =  new THREE.Mesh(outerGeo, material);
        roofLip.position.y = - height/2 + outerHeight/2;
        roofLip.rotation.y = 22.5* Math.PI/180;

        floorLip =  new THREE.Mesh(outerGeo, material);
        floorLip.position.y = + height/2 - outerHeight;
        floorLip.rotation.y = 22.5* Math.PI/180;

        
    }

    // floor and roof
    {
        const innerRadius = 20;  
        const outerRadius = 100;  
        const thetaSegments = 100;  
        const geometry = new THREE.RingBufferGeometry(
            innerRadius, outerRadius, thetaSegments);

        const concrete = textureLoader.load( assets + 'concrete.jpg');
        concrete.magFilter = THREE.NearestFilter;
        concrete.wrapS = THREE.RepeatWrapping;
        concrete.wrapT = THREE.RepeatWrapping;
        concrete.magFilter = THREE.NearestFilter;
        concrete.repeat.set(outerRadius/15, outerRadius/15);

        const material = new THREE.MeshPhongMaterial({map: concrete, side: THREE.DoubleSide, shininess: 0.2});

        roof1 = new THREE.Mesh(geometry, material);
        roof1.castShadow = true;
        roof1.position.y = -25;
        roof1.rotation.x = 90* Math.PI/180;
        roof2 = new THREE.Mesh(geometry, material);
        roof2.castShadow = true;
        roof2.position.y = -20;
        roof2.rotation.x = 90* Math.PI/180;

        floor = new THREE.Mesh(geometry, material);
        floor.position.y = 20;
        floor.rotation.x = 90* Math.PI/180;
        floor.receiveShadow = true;

    }

    // equirectangular environment
    {
        const basicSphere = new THREE.SphereBufferGeometry( 500, 60, 40 );
        const sphereTexture = textureLoader.load( assets + 'equirectangular.jpg');
        basicSphere.scale( -1, 1, 1 );
        const sphereMaterial = new THREE.MeshBasicMaterial({map: sphereTexture});
        env = new THREE.Mesh( basicSphere, sphereMaterial);
        env.rotation.x = Math.PI
    }

    let walls = [];
    const centerWidth = 0;
    const centerHeight = 0;
    const width = 80;  
    const height = 40;

    const concrete = textureLoader.load(assets + 'concrete.jpg');
        concrete.magFilter = THREE.NearestFilter;
        concrete.wrapS = THREE.RepeatWrapping;
        concrete.wrapT = THREE.RepeatWrapping;
        concrete.magFilter = THREE.NearestFilter;
        concrete.repeat.set(width/30, height/30);

    for(let i = 0; i < 8; i++){
        createWall(-45*i);
    }

    function createWall(angle){
        const centerGeometery = new THREE.PlaneBufferGeometry(centerWidth, centerHeight);
        const geometry = new THREE.PlaneBufferGeometry(width, height);
        const material = new THREE.MeshPhongMaterial({color: 0xffffff});
        const centerMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0})
        const center = new THREE.Mesh(centerGeometery, centerMaterial);
        center.rotation.y = angle * Math.PI/180;
        const wall = new THREE.Mesh(geometry, material);
        wall.position.x = 20 + width/2;

        const sideGeometry = new THREE.PlaneBufferGeometry(10, height);
        const sideMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, map: concrete});
        const side = new THREE.Mesh(sideGeometry, sideMaterial);
        side.position.x = width/2;
        side.rotation.y = 90 * Math.PI/180;

        walls.push({center, wall, side});

        // console.log(walls)

    }

    let lenses = [];
    for(let i = 0; i < walls.length; i++){
        makeLens(i + 1);
    }

    function makeLens(index) {
        {
            const geometry = new THREE.PlaneBufferGeometry(width, height);
            const texture = textureLoader.load(assets + 'stills/a' + index + '.jpg'); 
            const material = new THREE.MeshPhongMaterial({map: texture});
            const lens = new THREE.Mesh(geometry, material);
            lens.name = 'a' + index;
            lens.position.z = 5
            lens.rotation.z = Math.PI;
            lenses.push(lens);
        }

        {
            const geometry = new THREE.PlaneBufferGeometry(width, height);
            let texture;
            let name;
            if (index > 1){ 
                name = 'b' + (index -1 );
                texture = textureLoader.load(assets + 'stills/b' + (index -1) + '.jpg');
            }
            else{
                name = 'b' + (8);
                texture = textureLoader.load(assets + 'stills/b' + 8 + '.jpg');
            } 
            const material = new THREE.MeshPhongMaterial({map: texture});
            const lens = new THREE.Mesh(geometry, material);
            lens.name = name;
            lens.position.z = -5
            lens.rotation.x = Math.PI;
            lenses.push(lens);
        }


    }



    loadManager.onLoad = () => {
        loadingElem.style.display = 'none';
        scene.add(column);
        column.add(roof1);
        column.add(roofLip);
        column.add(roof2);
        column.add(floor);
        column.add(floorLip);

        walls.forEach((wall, index) => {
            column.add(wall.center);
            wall.center.add(wall.wall);
            wall.wall.name = index;
            wall.wall.add(wall.side);
        });

        lenses.forEach((lens, index) => {
            if(index % 2 === 0){
                //even number
                const barrier = walls[index/2].wall;
                barrier.add(lens);
            } else {
                const barrier = walls[(index - 1)/2].wall;
                barrier.add(lens);
            }
        });

        column.add(env);

        requestAnimationFrame(render);
        
    };

    

    loadManager.onProgress = (urlOfLastItemLoaded, itemsLoaded, itemsTotal) => {
        const progress = itemsLoaded / itemsTotal*100;
        progressBarElem.style.width = progress + '%';
    };


    
  class PickHelper {
    constructor() {
      this.raycaster = new THREE.Raycaster();
      this.raycaster.far = 100;
      this.pickedObject = null;
      this.pickedObjectSavedColor = 0;
      this.point = new THREE.Vector3(0, 0, 0);
    }
    
    pick(normalizedPosition, scene, camera) {
      // restore the color if there is a picked object
      if (this.pickedObject) {
        this.pickedObject = null;
        this.point = new THREE.Vector3(0, 0, 0);
      }
      if(clientX < window.innerWidth/2) {
        var intersectedObjects = this.raycaster.intersectObjects(walls[current-1].wall.children)
        if(intersectedObjects.length){
            this.pickedObject = intersectedObjects[0].object;
            this.point = intersectedObjects[0].point;
        }
      } else {
        var intersectedObjects;

        if(current === 8){
            intersectedObjects  = this.raycaster.intersectObjects(walls[0].wall.children)
        } else {
            intersectedObjects  = this.raycaster.intersectObjects(walls[current].wall.children)
        }
        if(intersectedObjects.length){
            this.pickedObject = intersectedObjects[0].object;
            this.point = intersectedObjects[0].point;
        }
      }
      

      // cast a ray through the frustum
      this.raycaster.setFromCamera(normalizedPosition, camera);
      // get the list of objects the ray intersected
      
      
      
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

    let intro = true;
    let controlsReset = true;
    let lookingPos = {x: 0, y: 0, z: 0};
    let position = null;
    
  

    const render = () => {

        looking = false;

        if(camera.position.y > 30 && intro){
            camera.position.y -= camera.position.y/100;
        } else if (camera.position.z < 110 && intro){
            camera.position.z ++;
        } else {
            intro = false;
        }
        if(!intro && controlsReset){
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.screenSpacePanning = false;
            controls.minDistance = 40;
            controls.maxDistance = 150;
            controls.minPolarAngle = 70 * Math.PI/180;
            controls.maxPolarAngle = 85 * Math.PI/180;
            controls.enableKeys = false;
            controls.maxAzimuthAngle = Math.PI * 0.07;
            controls.minAzimuthAngle = Math.PI * -0.07;
            controls.panSpeed = 0.2;
            controls.rotateSpeed = 0.2;
            controls.zoomSpeed = 0.2;

            controlsReset = false;
        }
        if(controlsReset){
            camera.lookAt(0, 0, 0);
        }

        // console.log(camera);


        let itemSelected = false;
        window.addEventListener('resize', onWindowResize, false);

        pickHelper.pick(pickPosition, scene, camera);
        
        if(pickHelper.pickedObject){
            if(pickHelper.pickedObject.name){
                currentObject = pickHelper.pickedObject;
                itemSelected = true;
                color(currentObject, true);
                looking = true;
                if(mousedown && !viewing){
                    picked = true
                }
                position = pickHelper.point;
                console.log(currentObject.name)
            }
        }

        if(!viewing && picked){
            lookingPos = {x: distance(lookingPos.x, position.x), y: distance(lookingPos.y, position.y), z: distance(lookingPos.z, position.z)};
            camera.lookAt(lookingPos.x, lookingPos.y, lookingPos.z);
            if(camera.position.z > 90){
                camera.position.z -= 0.5
            } 
            if(camera.position.z < 95){
                openWindow(currentObject.name);
                picked = false;
                lookingPos = {x: 0, y: 0, z: 0}
            }
        } 
        if(!viewing && !picked && !controlsReset) {
            lookingPos = {x: distance(0, lookingPos.x), y: distance(0, lookingPos.y), z: distance(0, lookingPos.z)}
            camera.lookAt(lookingPos.x, lookingPos.y, lookingPos.z);

            if(camera.position.x > 0){camera.position.x -= 0.05}
            if(camera.position.x < 0){camera.position.x += 0.05}

            if(camera.position.z < 110){camera.position.z += 0.5}

            if(camera.position.y > 30){camera.position.y -= 0.05}
            if(camera.position.y < 30){camera.position.y += 0.05}
        }

        lenses.forEach(lens => {
            color(lens, false);
        })

        const location = newLocation * Math.PI/180;
        if(column.rotation.y !== location){
            column.rotation.y += ((location - column.rotation.y) )/100
            if(!controlsReset && Math.sqrt(Math.pow(location - column.rotation.y, 2)) > 22.5 * Math.PI/180){
                camera.position.z += 0.5
            } else if (!controlsReset && camera.position.z >= 111) {
                camera.position.z -= 0.5
            } 
        }
        if(!mousedown){
            controls.enabled = false;
        } else {
            controls.enabled = true;
        }
        
        renderer.setPixelRatio( window.devicePixelRatio );

        renderer.render(scene, camera);


        requestAnimationFrame(render);


        
    }

    
    controls.update();

    const color = (object, bool) => {
        let g = object.material.color.g;
        let b = object.material.color.b;
        if( g < 1 && !bool){ g += 0.05/4 };
        if( b < 1 && !bool){ b += 0.05/4 };
        if( g > 0.5 && bool){ g -= 0.05/2 };
        if( b > 0 && bool){ b -= 0.1/2 };
        object.material.color.setRGB(1, g, b);
    }

    function distance(A, B){
        if(A > B){
            return A - Math.sqrt(Math.pow(A - B, 2))/50
        } else if (A < B) {
            return A + Math.sqrt(Math.pow(A - B, 2))/50
        } else {
            return 0;
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

    });

	function clearPickPosition() {
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
        mousedown = true;
		event.preventDefault();
        setPickPosition(event.touches[0]);
	}, {passive: false});

	window.addEventListener('touchmove', (event) => {
        setPickPosition(event.touches[0]);
    });
    
    window.addEventListener('mousedown', () => {
        mousedown = true;
    });
    window.addEventListener('mouseup', () => {
        mousedown = false;
    })

	window.addEventListener('touchend', () => {
        mousedown = false;
        clearPickPosition();
        orbiting = false;
	})
}


// event listeners
beginBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    main();
    begin = true;
    ambient.play();
});

beginBtn.addEventListener('touchend', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    main();
    begin = true;
    ambient.play();
});


// functions

window.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-close')){
        closeWindow();
    }
})
window.addEventListener('touchend', (e) => {
    if(e.target.classList.contains('btn-close')){
        closeWindow();
    }
})

function closeWindow() {
    popupWindows.forEach(window => {
        window.style.opacity = 0;
        window.style.zIndex = -10;
    })
    viewing = false;
}
function openWindow(target){
    let window = document.querySelector(`#${target}`)
    window.style.opacity = 1;
    window.style.zIndex = 100;
    viewing = true;
    mousedown = false;
    ambient.pause();
    looking = false;
    currentObject = undefined;
}

next.addEventListener('click', () => {
    newLocation -= 45;
    if(current < 8){
        current ++
    } else {
        current = 1
    }
    console.log(current)
});
previous.addEventListener('click', () => {
    newLocation += 45;
    if(current > 1){
        current --
    } else {
        current = 8
    }
    console.log(current)
})

document.addEventListener('mousemove', e => {
    clientX = e.clientX;
});
document.addEventListener('touchstart', e => {
   clientX = e.touches[0].clientX;
});