import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';

import {GUI} from 'https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js';

// variables for page
const threeJsWindow = document.querySelector('#page7');
const endingScreen = document.querySelector('#ending-screen');


// loader
const loadingElem = document.querySelector('#loading');
const progressBarElem = loadingElem.querySelector('.progressbar');



// three.js functions
const main  = () => {
    var playing = true;
    const canvas = document.querySelector('#c');

    // renderer
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // camera
    const fov = 45;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(5, 0, 0);


    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xFFF5D3 );
    scene.fog = new THREE.FogExp2( 0xFFF5D3, 0.02, 1000 );

    // controls
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.enableRotate = false;

    



    

    // loaders
    const loadManager = new THREE.LoadingManager();
    const textureLoader = new THREE.TextureLoader(loadManager);


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
        camera.position.x = camera.position.x -10;
        if(weight === 1){
            controls.maxDistance = camera.position.x + boxSize/2;
        } else if(weight === 2) {
            controls.maxDistance = camera.position.x;
        } else {
            controls.maxDistance = camera.position.x - boxSize/4; 
        }

    
        camera.updateProjectionMatrix();
    
        // point the camera to look at the center of the box
        camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
      }

      var root;
    {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load( assets + 'cave.gltf', (gltf) => {
          root = gltf.scene;
          root.children[0].castShadow = true; //default is false
          root.children[0].receiveShadow = true;
          
          const texture = textureLoader.load( assets + 'material.jpg')
          texture.magFilter = THREE.NearestFilter;
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.magFilter = THREE.NearestFilter;
            texture.repeat.set(100, 100);

            var material = new THREE.MeshPhongMaterial({map: texture, shininess: 0.5 });

          root.children[0].material = material;
    
          // compute the box that contains all the stuff
          // from root and below
          const box = new THREE.Box3().setFromObject(root);
    
          const boxSize = box.getSize(new THREE.Vector3()).length();
          const boxCenter = box.getCenter(new THREE.Vector3());
    
          // set the camera to frame the box
          frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
    
          // update the Trackball controls to handle the new size
          controls.target.copy(boxCenter);
          if(weight === 1){
            controls.target.x = controls.target.x - boxSize/2;
          } else if( weight === 2){
            controls.target.x = controls.target.x;
          } else if ( weight === 3 ){
            controls.target.x = controls.target.x +  boxSize/4;
          }
          
          controls.update();
        });
      }

      class ColorGUIHelper {
        constructor(object, prop) {
          this.object = object;
          this.prop = prop;
        }
        get value() {
          return `#${this.object[this.prop].getHexString()}`;
        }
        set value(hexString) {
          this.object[this.prop].set(hexString);
        }
      }
    
      class DegRadHelper {
        constructor(obj, prop) {
          this.obj = obj;
          this.prop = prop;
        }
        get value() {
          return THREE.MathUtils.radToDeg(this.obj[this.prop]);
        }
        set value(v) {
          this.obj[this.prop] = THREE.MathUtils.degToRad(v);
        }
      }
    
      function makeXYZGUI(gui, vector3, name, onChangeFn) {
        const folder = gui.addFolder(name);
        folder.add(vector3, 'x', -10, 10).onChange(onChangeFn);
        folder.add(vector3, 'y', 0, 10).onChange(onChangeFn);
        folder.add(vector3, 'z', -10, 10).onChange(onChangeFn);
        folder.open();
      }
    
      {
        const color = 0xFFFFFF;
        const intensity = 2;
        const light = new THREE.SpotLight(color, intensity);
        light.position.set(-40, 7, 0);
        light.angle = 0;
        light.target.position.set(-40, 10, 0);
        scene.add(light);
        scene.add(light.target);
    
        const helper = new THREE.SpotLightHelper(light);
        // scene.add(helper);
    
        function updateLight() {
          light.target.updateMatrixWorld();
          helper.update();
        }
        updateLight();
    
        // const gui = new GUI();
        // gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
        // gui.add(light, 'intensity', 0, 2, 0.01);
        // gui.add(light, 'distance', 0, 40).onChange(updateLight);
        // gui.add(new DegRadHelper(light, 'angle'), 'value', 0, 90).name('angle').onChange(updateLight);
        // gui.add(light, 'penumbra', 0, 1, 0.01);
    
        // makeXYZGUI(gui, light.position, 'position', updateLight);
        // makeXYZGUI(gui, light.target.position, 'target', updateLight);
      }



    scene.add( new THREE.AmbientLight( 0xffffff, 0.5 ) );


      
 
    loadManager.onLoad = () => {
        scene.add(root);
        loadingElem.style.display = 'none';
    };

    loadManager.onProgress = (urlOfLastItemLoaded, itemsLoaded, itemsTotal) => {
        const progress = itemsLoaded / itemsTotal*100;
        progressBarElem.style.width = progress + '%';
    };

    // console.log(controls.target.z);
    // console.log(camera.position.z)

    

    renderer.render( scene, camera );

    // resize function
    const onWindowResize = () => {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
    
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    
    }

    const render = () => {
        if( playing ) {
            window.addEventListener('resize', onWindowResize, false);

            var zoom = controls.target.distanceTo( controls.object.position );
            // console.log(zoom);
            if(weight === 1){
              widget1.play();
          }
          if(weight === 2){
              widget2.play();
          } if(weight === 3) {
              widget3.play();
          }
          if(zoom <= 4 && weight === 1){
            ending1();
            playing = false;
        }
        if(zoom <= 4 && weight === 2){
            ending2();
            playing = false;
        } if(zoom <= 4 && weight === 3) {
            ending3();
            playing = false;
        }
            
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.render(scene, camera);

            requestAnimationFrame(render);
            }
    }

    requestAnimationFrame(render);
    controls.update();

}


window.addEventListener('click', e => {
    if(e.target.id === 'enter-canvas'){
        main();
    }
})

var playerFinal;

function ending1 () {
    endingScreen.style.zIndex = 10;
    endingScreen.style.opacity = 1;
    endingScreen.style.background = 'white';
    endingScreen.style.color = 'black';
    endingScreen.innerHTML = '';

    setTimeout(() => {
        endingScreen.innerHTML = `
            <p>3°45'01.0"N 7°39'16.8"W North Atlantic Ocean</p>
        `;
        setTimeout(() => {
            widget1.pause()
            endingScreen.innerHTML = `
            <div class="row">
                <div class="col-12">
                    <div style="padding:43.56% 0 0 0;position:relative;"><iframe id="final-video" src="https://player.vimeo.com/video/474371116?title=0&byline=0&portrait=0&autoplay=1&quality=1080p" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                </div>
            </div>
            `;

            var iframeEnd = document.querySelector('#final-video');
            playerFinal = new Vimeo.Player(iframeEnd);

            setTimeout(() => {
                playerFinal.on('ended', () => {
                    endingScreen.innerHTML = `
                        <p>how much do <b>you</b> weigh</p>
                    `;
                  });
                  
            }, 2000);
            
        }, 5000);
    }, 5000);

}

function ending2() {
    endingScreen.style.background = 'black';
    endingScreen.style.color = 'white';
    endingScreen.style.zIndex = 10;
    endingScreen.style.opacity = 1;
    endingScreen.innerHTML = '';



    setTimeout(() => {
        endingScreen.innerHTML = `
            <div> 
                <p>return to the start of the passage: 6 more days until the you reach the required weight</p>
            </div>
        `;

        setTimeout(() => {
          widget1.pause()
          endingScreen.innerHTML = `
          <div class="row">
              <div class="col-12">
                  <div style="padding:43.56% 0 0 0;position:relative;"><iframe id="final-video" src="https://player.vimeo.com/video/474371116?title=0&byline=0&portrait=0&autoplay=1&quality=1080p" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
              </div>
          </div>
          `;

          var iframeEnd = document.querySelector('#final-video');
          playerFinal = new Vimeo.Player(iframeEnd);


            playerFinal.on('ended', () => {
              widget2.pause()
              page7.classList.add('d-none');
              page3.classList.remove('d-none');
              endingScreen.style.zIndex = -10;
              endingScreen.style.opacity = 0;
            });
        }, 5000);    
    }, 5000);
}




function ending3() {
  endingScreen.style.background = 'black';
  endingScreen.style.color = 'white';
  endingScreen.style.zIndex = 10;
  endingScreen.style.opacity = 1;
  endingScreen.innerHTML = '';



  setTimeout(() => {
      endingScreen.innerHTML = `
          <div> 
              <p>return to the start of the passage: 27 more days until you reach the required weight.</p>
          </div>
      `;

      setTimeout(() => {
        widget1.pause()
        endingScreen.innerHTML = `
        <div class="row">
            <div class="col-12">
                <div style="padding:43.56% 0 0 0;position:relative;"><iframe id="final-video" src="https://player.vimeo.com/video/474371116?title=0&byline=0&portrait=0&autoplay=1&quality=1080p" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
            </div>
        </div>
        `;

        var iframeEnd = document.querySelector('#final-video');
        playerFinal = new Vimeo.Player(iframeEnd);


          playerFinal.on('ended', () => {
            widget2.pause()
            page7.classList.add('d-none');
            page3.classList.remove('d-none');
            endingScreen.style.zIndex = -10;
            endingScreen.style.opacity = 0;
          });
      }, 5000);    
  }, 5000);
}