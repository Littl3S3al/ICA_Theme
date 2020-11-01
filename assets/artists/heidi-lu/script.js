
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

// other constants
const range = document.querySelector('#range');
const loadingScreen = document.querySelector('#loading-images');
const images = document.querySelector('#images');
const optionsMenu = document.querySelector('#options');
const optionsBtn = document.querySelector('#optionOpen');

// variables
let weight;
let fileLocation;
let zindex = 10;
let iterations = 0;


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
    if(e.target.classList.contains('option') || e.target.parentNode.classList.contains('option')){
        optionsMenu.classList.add('d-none');
        optionsBtn.classList.remove('d-none');
        e.target.parentNode.removeChild(e.target);
        openImage(e.target.dataset.target);
    }
    if(e.target.id === 'open-options'){
        optionsMenu.classList.remove('d-none');
        optionsBtn.classList.add('d-none');
    }

    // check if begin canvas
    if(e.target.id === 'enter-canvas'){
        page6.classList.add('d-none');
        page7.classList.remove('d-none');
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


function openImage (target) {
    let allImages = document.querySelectorAll('.action');
    allImages[target-1].style.opacity = 1;
    allImages[target-1].style.zIndex = zindex;
    zindex ++;
    iterations ++;
    if(iterations === 9){
        optionsBtn.innerHTML = `
        <button class="btn btn-warning btn-sm" id="enter-canvas">
            Walk towards your freedom
        </button>
        `
    }
}