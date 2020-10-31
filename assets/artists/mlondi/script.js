
// pages

const home = document.querySelector('#home');
const photos = document.querySelector('#photos-page');
const notes = document.querySelector('#notes-page');
const music = document.querySelector('#music-page');




// event listeners
window.addEventListener('click', e => {
    if(e.target.classList.contains('ios-icon')){
        home.classList.add('d-none');
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
})