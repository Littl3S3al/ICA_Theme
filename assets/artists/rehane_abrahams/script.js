const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const viewport = document.querySelector('.viewport');
const divs = viewport.querySelectorAll('.layers');
const forwards = document.querySelector('#forwards');
const backwards = document.querySelector('#backwards');
const audio = document.querySelector('#overall-audio');

const extraAudio = document.querySelector('#extra-audio');
const video1 = document.querySelector('#video1');
const video2 = document.querySelector('#video2');

beginBtn.addEventListener('click', () => {
    overlay.style.opacity = 0;
    viewport.style.display  = 'block';
    audio.play();
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);
})
beginBtn.addEventListener('touchend', () => {
    overlay.style.opacity = 0;
    viewport.style.display  = 'block';
    audio.play();
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);
})


// pause play overall audio with sound guided visualisation
extraAudio.onplay = function(){
  audio.volume = 0;
}
extraAudio.onpause = function(){
  audio.volume = 1;
}
extraAudio.onended = function(){
  audio.volume = 1;
}

// pause play audio with video files
player1 = new Vimeo.Player(video1);
player2 = new Vimeo.Player(video2);

player1.on('play', () => {
  audio.volume = 0
})
player1.on('pause', () => {
  audio.volume = 1;
})
player1.on('ended', () => {
  audio.volume = 1;
});

player2.on('play', () => {
  audio.volume = 0
})
player2.on('pause', () => {
  audio.volume = 1;
})
player2.on('ended', () => {
  audio.volume = 1;
})

let layers = [];

const perspectiveOrigin = {
  x: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginX"
    )
  ),
  y: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginY"
    )
  ),
  maxGap: 10
};

window.addEventListener("scroll", moveCamera);
window.addEventListener("mousemove", moveCameraAngle);
setSceneHeight();

function moveCameraAngle(event) {
  const xGap =
    (((event.clientX - window.innerWidth / 2) * 200) /
      (window.innerWidth / 2)) *
    -1;
  const yGap =
    (((event.clientY - window.innerHeight / 2) * 200) /
      (window.innerHeight / 2)) *
    -1;
  const newPerspectiveOriginX =
    perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 200;
  const newPerspectiveOriginY =
    perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 200;

  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginX",
    newPerspectiveOriginX
  );
  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginY",
    newPerspectiveOriginY
  );
}

function moveCamera() {
  document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
}

function setSceneHeight() {
  const numberOfItems = divs.length; // Or number of items you have in `.scene3D`
  const itemZ = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
  );
  const scenePerspective = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspective"
    )
  );
  const cameraSpeed = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
  );

  const height =
    window.innerHeight +
    scenePerspective * cameraSpeed +
    itemZ * 2.5  * cameraSpeed * numberOfItems;

  // Update --viewportHeight value
  document.documentElement.style.setProperty("--viewportHeight", height);
}


forwards.addEventListener('click', () => {
    window.scrollTo(0, window.pageYOffset+100);
    moveCamera();
})

backwards.addEventListener('click', () => {
    window.scrollTo(0, window.pageYOffset-100);
    moveCamera();
})