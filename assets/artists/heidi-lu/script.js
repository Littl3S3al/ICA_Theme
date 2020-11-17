
// pages

const page1 = document.querySelector('#page-1');
const page2 = document.querySelector('#page-2');
const page3 = document.querySelector('#page-3');
const page4 = document.querySelector('#page-4');
const page5 = document.querySelector('#page-5');
const page6 = document.querySelector('#page-6');
const page7 = document.querySelector('#page-7');


// videos
const introVideo = document.querySelector('#intro-video');

// small videos
const miniVid = document.querySelector('#videos');

// video links
const allVideos = [
    // weight = 1;
    [
        '474551818' , '474551821', '474551834' , '474551865', '474551870', '474551898', '474551936', '474551964', '474551963'
    ], 
    // weight = 2
    [ 
        '474552364', '474552400', '474552401', '474552416', '474552442', '474552478', '474552492', '474552503', '474552511'
    ], 
    // weight = 3
    [
        '474552758', '474552772', '474552799', '474552803', '474552819', '474552857', '474552874', '474552876', '474552909'
    ]
]

// other constants
const range = document.querySelector('#range');
const loadingScreen = document.querySelector('#loading-images');
const images = document.querySelector('#images');
const optionsMenu = document.querySelector('#options');
const optionsBtn = document.querySelector('#optionOpen');

// variables
let fileLocation;
let zindex = 10;
let iterations = 0;

const allOptions = document.querySelectorAll('.option');


// use the vimeo api
var player1 = new Vimeo.Player(introVideo);

window.addEventListener('click', e => {
    // page one -> two

    if(e.target.id === 'btn-1'){
        page1.classList.add('d-none');
        page2.classList.remove('d-none');
        player1.play();
    }

    // page two -> three
    if(e.target.id === 'btn-2'){
        player1.pause();
        page2.classList.add('d-none');
        page3.classList.remove('d-none');

    }
    // page three -> four
    if(e.target.id === 'btn-3'){
        let value = range.value;
        if(value < 30){
            weight = 1;
            fileLocation = 'light/'
        } else if (value > 30 && value < 60){
            weight = 2;
            fileLocation = 'medium/'
        } else {
            weight = 3;
            fileLocation = 'heavy/'
        }
        page3.classList.add('d-none');
        page4.classList.remove('d-none');
        images.innerHTML = '';
    }
    // page four -> five
    if(e.target.id === 'btn-4'){
        page4.classList.add('d-none');
        page5.classList.remove('d-none');
    }

    // page five -> six (the instructions)
    if(e.target.id === 'btn-5'){
        page5.classList.add('d-none');
        page6.classList.remove('d-none');
        for(i = 0; i < 9; i++){
            images.innerHTML += `
                <div class="action"><img id="action-${i}" src="${assets + fileLocation + ( i + 1 )}.jpg" alt="Action ${ i + 1 }"></div>
            `;
        }
        checkIfLoaded();
    }

    // check if click on menu
   
    if(e.target.id === 'open-options'){
        optionsMenu.classList.remove('d-none');
        optionsBtn.classList.add('d-none');
    }
    // check if begin canvas - should be 'enter-canvas'
    if(e.target.id === 'enter-canvas'){
        page6.classList.add('d-none');
        page7.classList.remove('d-none');
        
        
        optionsMenu.innerHTML = `
            <h4>Select an action to perform</h4>
            <button data-target="1" class="btn btn-sm btn-light option">Right elbow: right, <i>push-drag</i></button>
            <button data-target="2" class="btn btn-sm btn-light option">Right hip: right, <i>thrust-slide</i> </button>
            <button data-target="3" class="btn btn-sm btn-light option">Hands: upwards, <i>dig-push</i></button>
            <button data-target="4" class="btn btn-sm btn-light option">Left shoulder, <i>right to left, press-pull</i></button>
            <button data-target="5" class="btn btn-sm btn-light option">Wrists, rotate, <i>push-twist</i></button>
            <button data-target="6" class="btn btn-sm btn-light option">Arms: upwards, <i>press-push</i></button>
            <button data-target="7" class="btn btn-sm btn-light option">Knees: open outwards,<i> press-slide</i></button>
            <button data-target="8" class="btn btn-sm btn-light option">Chin: side to side,<i> push-drag</i> </button>
            <button data-target="9" class="btn btn-sm btn-light option">Glutes: side to side, <i>writhe</i></button>
        `;
    }

})


// detect video ended
player1.on('ended', () => {
    page2.classList.add('d-none');
    page3.classList.remove('d-none');
  });



//   detect when injected images are loaded
function checkIfLoaded () {
    let allImages = document.querySelectorAll('.action img');
    const checkClock = setInterval(() => {
        let loaded = 0;
        allImages.forEach(image => {
            if(image.complete && image.naturalHeight !== 0){
                loaded ++
            }
            if(loaded === 9){
                clearInterval(checkClock);
                loadingScreen.classList.add('d-none');
                images.classList.remove('d-none');
            }
        })
    }, 500);
};



allOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        optionsMenu.classList.add('d-none');
        optionsBtn.classList.remove('d-none');
        btn.parentNode.removeChild(btn);
        openImage(btn.dataset.target);
    })
})


function openImage (target) {
    let allImages = document.querySelectorAll('.action');
    allImages[target-1].style.opacity = 1;
    allImages[target-1].style.zIndex = zindex;
    zindex ++;
    iterations ++;
    if(iterations === 9){
        optionsBtn.innerHTML = `
        <button class="btn btn-warning btn-sm" id="enter-canvas">
            move through the door of no return
        </button>
        `;
    }

    // play min video
    
    miniVid.classList.remove('d-none');
    miniVid.innerHTML = `
    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${allVideos[weight-1][target-1]}?title=0&byline=0&portrait=0&quality=1080p" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    `;
    var iframe = miniVid.querySelector('iframe');
    playerX = new Vimeo.Player(iframe);
    playerX.play();

    playerX.on('ended', () => {
        // console.log('ended')
        miniVid.classList.add('d-none');
      });
    
}

