const container1 = document.querySelector('.intro');
const instructions = document.querySelector('#instruct');
const container2 = document.querySelector('.instruct');
const iframeContainer = document.querySelector('.iframe-holder');
const container3 = document.querySelector('.video-360');
const youTubePlayer = document.querySelector('#player');


// version
//  1 = desktop (youtube embed)
//  2 = android supported (vimeo embed)
//  3 = other mobile (youtube link)
let version = 3;



// instructions
const instruct_1 = `

    <div class="d-flex justify-content-center my-3">
        <i class="fas fa-arrow-left"></i>
        <i class="fas fa-arrow-right"></i>
    </div>

    <p>Click <b>left</b> and <b>right</b> with your mouse to explore the performance</p>

    <button id="button-begin" class="btn btn-light my-3">
        <h2>I'M READY TO EXPERIENCE</h2>
        <br>
        A SEA INLAND
    </button>

    <div class="d-flex justify-content-center mt-5 mb-3">
        <i class="fas fa-headphones"></i>
    </div>

    <p>
        Best experienced with <b>headphones</b>
        <br>
        [plug them in now]
    </p>

`;

const instruct_2 = `

    <div class="d-flex justify-content-center my-3">
        <i class="fas fa-arrow-left"></i>
        <i class="fas fa-arrow-right"></i>
    </div>

    <p>Tilt your mobile to landscape and move <b>left</b> and <b>right</b> to explore the performance</p>

    <button id="button-begin" class="btn btn-light my-3">
        <h2>I'M READY TO EXPERIENCE</h2>
        <br>
        A SEA INLAND
    </button>

    <div class="d-flex justify-content-center mt-5 mb-3">
        <i class="fas fa-headphones"></i>
    </div>

    <p>
        Best experienced with <b>headphones</b>
        <br>
        [plug them in now]
    </p>

`;





let vimeoPlayer;


window.addEventListener('click', e => {
    if(e.target.id === 'button-enter'){
        begin = true;
        container1.classList.add('fade-out');
        container2.classList.remove('d-none');
        iframeContainer.innerHTML = '<iframe class="intro-video" src="https://player.vimeo.com/video/474092881?autoplay=1&loop=1&autopause=0&quality=2K" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
        setTimeout(() => {
            container2.style.opacity = 1;
        }, 1000);
    } else if ( e.target.id === 'button-begin' || e.target.parentNode.id === 'button-begin'){
        container2.style.opacity = 0;
        setTimeout(() => {
            let iframe = document.querySelector('iframe')
            vimeoPlayer = new Vimeo.Player(iframe);
            vimeoPlayer.pause();
            container3.classList.remove('d-none');
        }, 1000);

    }
})

var player;
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('player', {
        width: window.innerWidth*0.8 + 'px',
        height: window.innerHeight*0.8 + 'px',
        videoId: 'BEehv56XJ4s'
        });
    }


function deviceAPIcallback(result){
    let type = result.deviceType;
    let osName = result.osName;
    let os = result.osVersion;

    // console.log(type);

    if(osName === 'iOS'){
        version = 3;
        console.log(version)
    } else if (osName === 'Android' && parseInt(os) < 4.3){
        version = 3;
        console.log(version)
    } else if (osName === 'Android' && type === 'smartphone' || type === 'mobile' || type === "tablet") {
        version = 2;
        console.log(version)
    } else {
        version = 1;
        console.log(version)
    }

    if( version == 1 ) {
        instructions.innerHTML = instruct_1;
    
        
    } else if (version === 2) {
        instructions.innerHTML = instruct_2;
    
        let player_container = document.querySelector('#player');
        player_container.style.display = 'none';
        player_container.innerHTML = '';

        let v_player = document.querySelector('#v-player');
        v_player.innerHTML = `<iframe class="intro-video" src="https://player.vimeo.com/video/474103827?autoplay=1&loop=1&autopause=0&quality=2K" frameborder="0" allow="autoplay; fullscreen; gyroscope; accelerometer" allowfullscreen style="width: ${window.innerWidth}px; height: ${window.innerHeight*0.8}px; position: absolute; top: 0; left: 0"></iframe>`;
    }

}








