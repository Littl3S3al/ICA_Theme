
// pages

const home = document.querySelector('#home');
const photos = document.querySelector('#photos-page');
const notes = document.querySelector('#notes-page');
const music = document.querySelector('#music-page');


// photo gallery buttons
const videobtn = document.querySelector('#video-album');
const photobtn = document.querySelector('#photo-album');

// galleries

const photoGallery = document.querySelector('#photo-gallery');
const videoGallery = document.querySelector('#video-gallery');


// notes
const noteMini = document.querySelector('#notes-placeholder');
const noteMain = document.querySelector('#individual-notes-page');


// music
// music
var frame1 = document.querySelector('#track1');
var frame2 = document.querySelector('#track2');
var frame3 = document.querySelector('#track3');
var frame4 = document.querySelector('#track4');
var frame5 = document.querySelector('#track5');

var widget1 = SC.Widget(frame1);
var widget2 = SC.Widget(frame2);
var widget3 = SC.Widget(frame3);
var widget4 = SC.Widget(frame4);
var widget5 = SC.Widget(frame5);

const tracks = [widget1, widget2, widget3, widget4, widget5];
let currentTrack = 0;
let trackNames = document.querySelectorAll('.track .three');
let displayName = document.querySelector('#display');
const eachTrack = document.querySelectorAll('.track');
const playBtn = document.querySelector('#play-pause');

let pause = true;

// event listeners
window.addEventListener('click', e => {
    if(e.target.classList.contains('ios-icon')){
        home.classList.add('d-none');
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        let page = e.target.id;
        if(page === 'photos'){
            photos.classList.remove('d-none');
        } else if(page === 'notes'){
            notes.classList.remove('d-none');
        } else if(page === 'music'){
            music.classList.remove('d-none');
        }
    }
    if(e.target.classList.contains('back-icon')){
        photos.classList.add('d-none');
        notes.classList.add('d-none');
        music.classList.add('d-none');
        home.classList.remove('d-none');
    }

    // photo gallery buttons
    if(e.target.id === 'video-album'){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        videobtn.src = assets + 'photos/videos_blue.svg';
        photobtn.src = assets + 'photos/photos.svg';
        photoGallery.classList.add('d-none');
        videoGallery.classList.remove('d-none');

    }
    if(e.target.id === 'photo-album'){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        videobtn.src = assets + 'photos/videos.svg';
        photobtn.src = assets + 'photos/photos_blue.svg';
        photoGallery.classList.remove('d-none');
        videoGallery.classList.add('d-none');

    }
    if(e.target.classList.contains('note-section')){
        openNote(e.target.dataset.target);
    }
    if(e.target.classList.contains('back-notes')){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        notes.classList.remove('d-none');
        noteMain.classList.add('d-none');
    }

    // music event listeners
    if(e.target.id === 'play-current-track' || e.target.parentNode.id === 'play-current-track'){
        tracks[currentTrack].play();
    }
    if(e.target.id === 'play-pause'){
        if(!pause){
            e.target.src = assets + 'music/play-solid-white.svg';
            tracks[currentTrack].pause();
        } else {
            e.target.src = assets + 'music/pause-solid.svg';
            tracks[currentTrack].play();
        }
        pause = !pause;
    }
    if(e.target.id === "skip"){
        tracks[currentTrack].pause()
        if(currentTrack < tracks.length - 1){
            currentTrack ++
        } else {
            currentTrack = 0;
        }
        tracks[currentTrack].play()
    }
    if(e.target.classList.contains('back-pause')){
        tracks[currentTrack].pause()
    }
})


// add notes
docs.forEach( (note, index) => {
    noteMini.innerHTML += `
        <div class="col-12 note-section" data-target="${index}">
            <h2 class="note-section" data-target="${index}">${note.title}</h2>
            <p class="note-section" data-target="${index}">${note.snippet}...</p>
            <hr>
        </div>
    `;
});


function openNote (target) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    notes.classList.add('d-none');
    noteMain.classList.remove('d-none');
    let placeholder = noteMain.querySelector('#placeholder');
    placeholder.innerHTML = '';
    placeholder.innerHTML += `<h1>${docs[target].title}</h1>`;
    placeholder.innerHTML += docs[target].content;
}


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
        playBtn.src = assets + 'music/pause-solid.svg';
        pause = false;
    })
})


eachTrack.forEach(track => {
    track.addEventListener('click', e => {
        tracks[currentTrack].pause();
        currentTrack = track.dataset.target;
        tracks[currentTrack].play();
    })
})


