
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
const noteMain = document.querySelector('#individual-notes-page')



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
