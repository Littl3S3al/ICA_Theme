const cover = document.querySelector('.page');
const videos = document.querySelector('#video-gallery');
const audios = document.querySelector('#audio-player');


var frame1 = document.querySelector('#track1');
var frame2 = document.querySelector('#track2');
var frame3 = document.querySelector('#track3');
var frame4 = document.querySelector('#track4');

var widget1 = SC.Widget(frame1);
var widget2 = SC.Widget(frame2);
var widget3 = SC.Widget(frame3);
var widget4 = SC.Widget(frame4);

const tracks = [widget1, widget2, widget3, widget4];
let currentTrack = 0;

let trackNames = document.querySelectorAll('.track-name');
let displayName = document.querySelector('#display-name');
const eachTrack = document.querySelectorAll('.track');

const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const nextBtn = document.querySelector('.fa-fast-forward');




window.addEventListener('click', e => {
    if(e.target.id === 'video' || e.target.parentNode.id === 'video'){
        videos.classList.remove('d-none');
        cover.classList.add('d-none');
        audios.classList.add('d-none');
    } else if (e.target.id === 'audio' || e.target.parentNode.id === 'audio'){
        audios.classList.remove('d-none');
        videos.classList.add('d-none');
        cover.classList.add('d-none');
    }
})









playBtn.addEventListener('click', () => {
    tracks[currentTrack].play();
});
pauseBtn.addEventListener('click', () => {
    tracks[currentTrack].pause();
})
nextBtn.addEventListener('click', () => {
    tracks[currentTrack].pause();
    if(currentTrack < tracks.length - 1){
        currentTrack ++
    } else {
        currentTrack = 0;
    }
    tracks[currentTrack].play();
})




tracks.forEach(track => {
    track.bind(SC.Widget.Events.FINISH, function(){
        if(currentTrack < tracks.length - 1){
            currentTrack ++
        } else {
            currentTrack = 0;
        }
        tracks[currentTrack].play();
    });

    track.bind(SC.Widget.Events.PLAY, function(){
        displayName.innerText = trackNames[currentTrack].innerText;
    })
})


eachTrack.forEach(track => {
    track.addEventListener('click', e => {
        tracks[currentTrack].pause();
        currentTrack = track.dataset.target;
        tracks[currentTrack].play();
    })
})