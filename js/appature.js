const appature = document.querySelector('#appature-svg');
const enterBtn = document.querySelector('.btn-enter');


enterBtn.addEventListener('click', () => {
    appature.classList.add('zoomOut');
})