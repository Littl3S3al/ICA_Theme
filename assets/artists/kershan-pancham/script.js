const btn_enter = document.querySelector('#enter');
const overlay = document.querySelector('#overlay');
const zoom_screen = document.querySelector('#zoom-screen');

const iframes = document.querySelectorAll('iframe');
const mic_btn = document.querySelectorAll('.mic');
const video_btn = document.querySelectorAll('.video');
const pin_btn = document.querySelectorAll('.pin');
const covers = document.querySelectorAll('.cover');
const zoom_windows = document.querySelectorAll('.zoom-window');
let players = [];


// event listeners
btn_enter.addEventListener('click', () => {
    overlay.classList.add('d-none');
    zoom_screen.classList.remove('d-none');

    // call all iframes
    iframes.forEach((iframe, index) => {
        let player = new Vimeo.Player(iframe); 
        player.play();
        players.push(player);
    })
});

// muting functionality
mic_btn.forEach((mic, index) => {
    mic.addEventListener('click', () => {
        if(mic.classList.contains('muted')){
            players[index].setVolume(1);
            mic.classList.remove('muted');
            mic.innerHTML = '<i class="fas fa-microphone"></i>';
        } else {
            players[index].setVolume(0);
            mic.classList.add('muted');
            mic.innerHTML = '<i class="fas fa-microphone-slash"></i>';
        }
        
    })
});


// video on off functionality
video_btn.forEach((video, index) => {
    video.addEventListener('click', () => {
        if(video.classList.contains('muted')){
            video.classList.remove('muted');
            covers[index].style.opacity = 0;
            video.innerHTML = '<i class="fas fa-video"></i>'
        } else {
            video.classList.add('muted');
            covers[index].style.opacity = 1;
            video.innerHTML = '<i class="fas fa-eye-slash"></i>'
        }
    })
});


// pin video functionality
pin_btn.forEach((pin, index) => {
    pin.addEventListener('click', () => {
        if(pin.classList.contains('pinned')){
            pin.classList.remove('pinned');
            players.forEach(player=> {
                player.setVolume(1);
            });
            zoom_windows.forEach(window => {
                window.classList.remove('cornered');
                window.classList.remove('full-screen');
                window.classList.remove('col-12');
            });
            pin.innerHTML = '<i class="fas fa-thumbtack"></i>';
        } else {
            pin.classList.add('pinned');
            players.forEach(player => {
                player.setVolume(0);
            })
            players[index].setVolume(1);
            zoom_windows.forEach(window => {
                window.classList.remove('full-screen');
                window.classList.remove('col-12');
                window.classList.add('cornered');
            })
            pin_btn.forEach(pin => {
                pin.innerHTML = '<i class="fas fa-thumbtack"></i>';
            })
            zoom_windows[index].classList.add('full-screen');
            zoom_windows[index].classList.remove('cornered');
            zoom_windows[index].classList.add('col-12');
            pin.innerHTML = '<i class="fas fa-th-large"></i>';
        }
    })
})


function randomActive (){
    setInterval(() => {
        zoom_windows.forEach(window => {
            window.classList.remove('active')
        });
        let choice = Math.floor(Math.random()*zoom_windows.length);
        zoom_windows[choice].classList.add('active');
    }, 5000);
}

randomActive();
