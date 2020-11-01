const container1 = document.querySelector('.intro');
const instructions = document.querySelector('#instruct');
const container2 = document.querySelector('.instruct');
const iframe = document.querySelector('iframe');
const iframeContainer = document.querySelector('.iframe-holder');



window.addEventListener('click', e => {
    if(e.target.id === 'button-enter'){
        container1.classList.add('fade-out');
        container2.classList.remove('d-none');
        setTimeout(() => {
            container2.style.opacity = 1;
        }, 1000);
    } else if ( e.target.id === 'button-begin'){
        container2.style.opacity = 0;
        setTimeout(() => {
            container2.classList.add('d-none');
            container1.classList.add('d-none')
            iframe.src = 'https://player.vimeo.com/video/474103777?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;';
            iframe.style.height = '50vh';
            iframe.style.width = '50vw';
        }, 1000);

    }
})

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    instructions.innerHTML = `
        Tilt your mobile to landscape and move <b>left</b> and <b>right</b> to explore the performance
    `;
} 

