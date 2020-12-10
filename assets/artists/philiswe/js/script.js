const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const viewport = document.querySelector('.viewport');
const divs = viewport.querySelectorAll('.layers');
const forwards = document.querySelector('#forwards');
const backwards = document.querySelector('#backwards');
const audio = document.querySelector('#overall-audio');

const video4 = document.querySelector('#video4');
var player4 = new Vimeo.Player(video4);
const video5 = document.querySelector('#video5');
var player5 = new Vimeo.Player(video5);
const video6 = document.querySelector('#video6');
var player6 = new Vimeo.Player(video6);
const video7 = document.querySelector('#video7');
var player7 = new Vimeo.Player(video7);
const video8 = document.querySelector('#video8');
var player8 = new Vimeo.Player(video8);

beginBtn.addEventListener('click', () => {
    overlay.style.opacity = 0;
    viewport.style.display  = 'block';
    audio.play();
    setTimeout(() => {
        overlay.style.display = 'none';
        player4.setVolume(0);
        player5.setVolume(0);
        player6.setVolume(0);
        player7.setVolume(0);
        player8.setVolume(0);

        player4.pause();
        player5.pause();
        player6.pause();
        player7.pause();
        player8.pause();
    }, 1000);
});
beginBtn.addEventListener('touchend', () => {
    overlay.style.opacity = 0;
    viewport.style.display  = 'block';
    audio.play();
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);
});

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
});

backwards.addEventListener('click', () => {
    window.scrollTo(0, window.pageYOffset-100);
    moveCamera();
});

$(window).scroll(function() 
{
    var pageScroll = $(window).scrollTop();

    if(pageScroll > 700)
    { 
        audio.volume = 0;
    }
    if(pageScroll < 700)
    { 
        audio.volume = 1;
    }
    if(pageScroll <= 1600)
    { 
      player4.setVolume(0);
      player5.setVolume(0);
      player6.setVolume(0);
      player7.setVolume(0);
      player8.setVolume(0);
    }
    if(pageScroll >= 1750 && pageScroll < 1950)
    { 
      player5.setVolume(0);
      player6.setVolume(0);
      player7.setVolume(0);
      player8.setVolume(0);

      player4.play();
      player4.setVolume(1);
    }
    if(pageScroll >= 1950 && pageScroll < 2600)
    { 
      player4.setVolume(0);
      player6.setVolume(0);
      player7.setVolume(0);
      player8.setVolume(0);

      player5.play();
      player5.setVolume(1);
    }
    if(pageScroll >= 2600 && pageScroll < 3000)
    { 
      player4.setVolume(0);
      player5.setVolume(0);
      player8.setVolume(0);
      player7.setVolume(0);

      player6.play();
      player6.setVolume(1);
    }

    if(pageScroll >= 3000 && pageScroll < 3600)
    { 
      player4.setVolume(0);
      player5.setVolume(0);
      player6.setVolume(0);
      player8.setVolume(0);

      player7.play();
      player7.setVolume(1);
    }

    if(pageScroll > 3600 && pageScroll < 3700)
    { 
      player4.setVolume(0);
      player5.setVolume(0);
      player6.setVolume(0);
      player7.setVolume(0);

      player8.play();
      player8.setVolume(1);
    }

    if(pageScroll > 3700)
    { 
      player4.setVolume(0);
      player5.setVolume(0);
      player6.setVolume(0);
      player7.setVolume(0);
      player8.setVolume(0);
    }
  });