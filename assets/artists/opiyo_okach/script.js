import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js';
// import {GUI} from 'https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js';
import { PositionalAudioHelper } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/helpers/PositionalAudioHelper.js';




const makeInstance = (scene, geometry, x, y, z) => {
	const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	cube.position.set(  x, y, z );
	cube.material.transparent = true ;
	cube.material.opacity = 0;

	return cube;
};

// add a box
const boxWidth = 30;
const boxHeight = 20;
const boxDepth = 1;
const geometryBox = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

// interaction variables
let orbiting = false;
let viewing = true;

function main() {

  begin = true;

  // camera and canvas
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true});

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.set( 0, 25, 650 );

  // update camera
  function updateCamera() {
    camera.updateProjectionMatrix();
  }

  // orbit controls
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  // new scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('black');
  scene.fog = new THREE.FogExp2( 0x000000, 0.0005 );

  // add light
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 0.5, 1);
    light.target.position.set(0, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }

// bring in audio
// bring in audio listener
const listener = new THREE.AudioListener();
      camera.add( listener );

      // sound spheres
      const square = new THREE.BoxGeometry(30, 30, 30);

      const material1 = new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, opacity: 0 } );
      const material2 = new THREE.MeshBasicMaterial( { color: 0xff2200, transparent: true, opacity: 0 } );
      const material3 = new THREE.MeshBasicMaterial( { color: 0x6622aa, transparent: true, opacity: 0 } );

      // sound spheres

      const audioLoader = new THREE.AudioLoader();

      const mesh1 = new THREE.Mesh( square, material1 );
      mesh1.position.set(  - 250, 30, 0 );
      scene.add( mesh1 );

      const sound1 = new THREE.PositionalAudio( listener );
      audioLoader.load( assets + 'KMRU_Variations_Berlin.mp3', function ( buffer ) {

        sound1.setLoop()
        sound1.setBuffer( buffer );
        sound1.setRefDistance( 100 );
        sound1.play();

      } );
      mesh1.add( sound1 );


      //

      const mesh2 = new THREE.Mesh( square, material2 );
      mesh2.position.set( 250, 30, 0 );
      scene.add( mesh2 );

      const sound2 = new THREE.PositionalAudio( listener );
      audioLoader.load( assets + 'KMRU_Variations_Installation_Nairobi.mp3', function ( buffer ) {

        sound2.setLoop()
        sound2.setBuffer( buffer );
        sound2.setRefDistance( 100 );
        sound2.play();

      } );
      mesh2.add( sound2 );

      //

      const mesh3 = new THREE.Mesh( square, material3 );
      mesh3.position.set(  0, 30, - 250 );
      scene.add( mesh3 );

      const sound3 = new THREE.PositionalAudio( listener );
      audioLoader.load( assets + 'KMRU_Variations_Petersburg.mp3', function ( buffer ) {

        sound3.setLoop();
        sound3.setBuffer( buffer );
        sound3.setRefDistance( 100 );
        sound3.play();

      } );
      mesh3.add( sound3 );  

      // analysers

      const analyser1 = new THREE.AudioAnalyser( sound1, 32 );
      const analyser2 = new THREE.AudioAnalyser( sound2, 32 );
      const analyser3 = new THREE.AudioAnalyser( sound3, 32 );

// particle related variables
  let particlesData = [];
  let positions, colors;
  let particles;
  let pointCloud;
  let particlePositions;
  let linesMesh;

  const maxParticleCount = 200;
  const particleCount = 100;
  const r = 500;
  const rHalf = r / 2;

  var particleXYZ = [];
  let cubes = []; 

  let effectController = {
      showDots: true,
      showLines: true,
      minDistance: 150,
      limitConnections: false,
      maxConnections: 20,
      particleCount: 500
  };


  // add cubes to be repositioned later
const addInteractives = () => {
  cubes = [
			makeInstance(scene, geometryBox, 0, 0, 0), 
			makeInstance(scene, geometryBox, 0, 0, 0), 
			makeInstance(scene, geometryBox, 0, 0, 0), 
			makeInstance(scene, geometryBox, 0, 0, 0), 
			makeInstance(scene, geometryBox, 0, 0, 0), 
			makeInstance(scene, geometryBox, 0, 0, 0)
    ];
    
    // add text
		const objects = [];
		const spread = 15;

		function addObject(x, y, obj) {
			obj.position.x = x * spread;
			obj.position.y = y * spread;

			scene.add(obj);
			objects.push(obj);
		}

		{
			const loader = new THREE.FontLoader();
			// promisify font loading
			function loadFont(url) {
			return new Promise((resolve, reject) => {
				loader.load(url, resolve, undefined, reject);
			});
			}

		async function doit(text, parent) {
		const font = await loadFont('https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json');   
		const geometry = new THREE.TextBufferGeometry(text, {
			font: font,
			size: 7.0,
			height: .2,
			curveSegments: 12,
			bevelEnabled: false
		});

		const material = new THREE.MeshBasicMaterial({color: 0xAED6F1 });
		const mesh = new THREE.Mesh(geometry, material);
		geometry.computeBoundingBox();
		geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);

		parent.add(mesh);

		addObject(.5, 0, parent);
    }
    
		cubes.forEach((cube, i) => {
			doit(words[i], cube);
			cube.name = labels[i];
		});
	}
}

addInteractives();


  // create cloud group
  const cloudGroup = new THREE.Group();
  scene.add( cloudGroup );

  const segments = maxParticleCount * maxParticleCount;

  positions = new Float32Array( segments * 3 );
  colors = new Float32Array( segments * 3 );

  var pMaterial = new THREE.PointsMaterial( {
      color: 0x1A5276 ,
      size: 4,
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: false
  } );

  particles = new THREE.BufferGeometry();
  particlePositions = new Float32Array( maxParticleCount * 3 );

		for ( var i = 0; i < maxParticleCount; i ++ ) {

			var x = Math.random() * r - r / 2;
			var y = Math.random() * r - r / 2;
			var z = Math.random() * r - r / 2;

			particlePositions[ i * 3 ] = x;
			particlePositions[ i * 3 + 1 ] = y;
			particlePositions[ i * 3 + 2 ] = z;

			

			// add it to the geometry
			particlesData.push( {
				velocity: new THREE.Vector3( - 1 + Math.random() * 2, - 1 + Math.random() * 1, - 1 + Math.random() * 2 ),
				numConnections: 0
			} );
		}


		particles.setDrawRange( 0, particleCount );
		particles.setAttribute( 'position', new THREE.BufferAttribute( particlePositions, 3 ).setUsage( THREE.DynamicDrawUsage ) );
		

		// create the particle system
		pointCloud = new THREE.Points( particles, pMaterial );
		cloudGroup.add( pointCloud );

		var geometry = new THREE.BufferGeometry();

		geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ).setUsage( THREE.DynamicDrawUsage ) );
		geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ).setUsage( THREE.DynamicDrawUsage ) );

		geometry.computeBoundingSphere();

		geometry.setDrawRange( 0, 0 );


		var material = new THREE.LineBasicMaterial( {
			color: 0x1A5276 ,
			blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.5
		} );

		linesMesh = new THREE.LineSegments( geometry, material );
		cloudGroup.add( linesMesh );
    
    function animateBuffer() {
          let k = 0;
          var vertexpos = 0;
          var colorpos = 0;
          var numConnected = 0;
          
          for ( var i = 0; i < particleCount; i ++ )
            particlesData[ i ].numConnections = 0;

          for ( var i = 0; i < particleCount; i ++ ) {

            // get the particle
            var particleData = particlesData[ i ];

            particlePositions[ i * 3 ] += particleData.velocity.x/7;
            particlePositions[ i * 3 + 1 ] += particleData.velocity.y/7;
            particlePositions[ i * 3 + 2 ] += particleData.velocity.z/7;

            // calculate where cubes are going to be
            let remainder = Math.floor(particleCount / 6);
            if(i % remainder === 0 && k < 6){
            	particleXYZ[k] = {
            		x: particlePositions[ i * 3 ], 
            		y: particlePositions[ i * 3 + 1 ], 
            		z: particlePositions[ i * 3 + 2 ]
            	};
            	k++
            }

            

            if ( particlePositions[ i * 3 + 1 ] < - rHalf || particlePositions[ i * 3 + 1 ] > rHalf )
              particleData.velocity.y = - particleData.velocity.y;

            if ( particlePositions[ i * 3 ] < - rHalf || particlePositions[ i * 3 ] > rHalf )
              particleData.velocity.x = - particleData.velocity.x;

            if ( particlePositions[ i * 3 + 2 ] < - rHalf || particlePositions[ i * 3 + 2 ] > rHalf )
              particleData.velocity.z = - particleData.velocity.z;

            if ( effectController.limitConnections && particleData.numConnections >= effectController.maxConnections )
              continue;

            
            // Check collision
            for ( var j = i + 1; j < particleCount; j ++ ) {

              var particleDataB = particlesData[ j ];
              if ( effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections )
                continue;

              var dx = particlePositions[ i * 3 ] - particlePositions[ j * 3 ];
              var dy = particlePositions[ i * 3 + 1 ] - particlePositions[ j * 3 + 1 ];
              var dz = particlePositions[ i * 3 + 2 ] - particlePositions[ j * 3 + 2 ];
              var dist = Math.sqrt( dx * dx + dy * dy + dz * dz );

              
              if ( dist < effectController.minDistance ) {

                particleData.numConnections ++;
                particleDataB.numConnections ++;

                var alpha = 1.0 - dist / effectController.minDistance;

                positions[ vertexpos ++ ] = particlePositions[ i * 3 ];
                positions[ vertexpos ++ ] = particlePositions[ i * 3 + 1 ];
                positions[ vertexpos ++ ] = particlePositions[ i * 3 + 2 ];

                positions[ vertexpos ++ ] = particlePositions[ j * 3 ];
                positions[ vertexpos ++ ] = particlePositions[ j * 3 + 1 ];
                positions[ vertexpos ++ ] = particlePositions[ j * 3 + 2 ];

                colors[ colorpos ++ ] = alpha;
                colors[ colorpos ++ ] = alpha;
                colors[ colorpos ++ ] = alpha;

                colors[ colorpos ++ ] = alpha;
                colors[ colorpos ++ ] = alpha;
                colors[ colorpos ++ ] = alpha;

                numConnected ++;

              }

			}

		}


		linesMesh.geometry.setDrawRange( 0, numConnected * 2 );
		linesMesh.geometry.attributes.position.needsUpdate = true;
		linesMesh.geometry.attributes.color.needsUpdate = true;

    pointCloud.geometry.attributes.position.needsUpdate = true;
    
    cubes.forEach((cube, index) => {
			cube.position.set(particleXYZ[index].x, particleXYZ[index].y, particleXYZ[index].z);
			cube.rotation.y = Math.atan2( ( camera.position.x - cube.position.x ), ( camera.position.z - cube.position.z ) );
		});

		}



// raycasting
class PickHelper {
		constructor() {
		this.raycaster = new THREE.Raycaster();
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
		const intersectedObjects = this.raycaster.intersectObjects(scene.children);
		if (intersectedObjects.length) {
			// pick the first object. It's the closest one
			this.pickedObject = intersectedObjects[0].object;
		}
		}
  }
  
  const pickPosition = {x: 0, y: 0};
	const pickHelper = new PickHelper();
	clearPickPosition();



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
  

	window.addEventListener('mousedown', setPickPosition);
	window.addEventListener('mouseout', clearPickPosition);
  window.addEventListener('mouseleave', clearPickPosition);
  window.addEventListener('mouseup', () => {
		setTimeout(() => {
			if(!viewing){
				orbiting = false;
			}
		}, 1000);
	})


	window.addEventListener('touchstart', (event) => {
		// prevent the window from scrolling
		event.preventDefault();
		setPickPosition(event.touches[0]);
	}, {passive: false});

	window.addEventListener('touchmove', (event) => {
		setPickPosition(event.touches[0]);
	});

	window.addEventListener('touchend', () => {
    clearPickPosition();
    setTimeout(() => {
			if(!viewing){
				orbiting = false;
			}
		}, 1000);
	})




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
    requestAnimationFrame(animateBuffer);
    pickHelper.pick(pickPosition, scene, camera);

    
    if(pickHelper.pickedObject && !orbiting  && !viewing){
					popup(pickHelper.pickedObject.name);
					sound1.setVolume(0);
					sound2.setVolume(0);
					sound3.setVolume(0);
				}
				if(!viewing){
					sound1.setVolume(1);
					sound2.setVolume(1);
					sound3.setVolume(1);
				}


  }

  requestAnimationFrame(render);
}

const beginBtn = document.querySelector('#startButton');
const overlay = document.querySelector('#overlay');


beginBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  main();
  setTimeout(() => {
		viewing = false;
	}, 1000);
});


const popUpWindow = document.querySelectorAll('.popupWindow');
const closeBtns = document.querySelectorAll('.close');

const links = document.querySelectorAll('.btn-link-view');

// links.forEach((link, i) => {
//   link.addEventListener('click', () => {
//     popup(i);
//   })
// })
const popup = (name) => {
  if(name.length > 0){
    let thisWindow = document.querySelector(`#${name}`);
		thisWindow.classList.add('appear');	
		viewing = true;
	}
}

window.addEventListener('click', e => {
  if(e.target.classList.contains('exit')){
    e.stopPropagation()
    popUpWindow.forEach(window => {
      window.classList.remove('appear');
    });
    viewing = false;
  }
  if(e.target.classList.contains('popupWindow')){
    e.preventDefault();
    popUpWindow.forEach(window => {
      window.classList.remove('appear');
    });
    viewing = false;
  }
})
