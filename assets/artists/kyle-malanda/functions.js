const gallery_btn = document.querySelector('#gallery');
const ar_btn = document.querySelector('#ar');


const gallery = document.querySelector('.gallery');
let ar;

const close_btn = document.querySelectorAll('.close-btn');

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    ar = document.querySelector('.ar-mobile');
} else {
    ar = document.querySelector('.ar-desktop');
}

gallery_btn.addEventListener('click', () => {
    gallery.classList.remove('d-none');
});

ar_btn.addEventListener('click', () => {
    ar.classList.remove('d-none');
});

close_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        ar.classList.add('d-none');
        gallery.classList.add('d-none');
    })
})