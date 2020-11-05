const container1 = document.querySelector('.intro');
const instructions = document.querySelector('#instruct');
const container2 = document.querySelector('.instruct');
const iframeContainer = document.querySelector('.iframe-holder');



let player;


window.addEventListener('click', e => {
    if(e.target.id === 'button-enter'){
        container1.classList.add('fade-out');
        container2.classList.remove('d-none');
        iframeContainer.innerHTML = '<iframe class="intro-video" src="https://player.vimeo.com/video/474092881?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
        setTimeout(() => {
            container2.style.opacity = 1;
        }, 1000);
    } else if ( e.target.id === 'button-begin'){
        container2.style.opacity = 0;
        setTimeout(() => {
            container2.classList.add('d-none');
            container1.classList.add('d-none');
            iframeContainer.innerHTML = '<iframe src="https://player.vimeo.com/video/474103777?autoplay=1&autopause=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
            let iframe = document.querySelector('iframe')
            iframe.style.height = '100vh';
            iframe.style.width = '100vw';
            player = new Vimeo.Player(iframe);
           

            player.on('ended', () => {
                container2.classList.remove('d-none');
                iframeContainer.innerHTML = '<iframe class="intro-video" src="https://player.vimeo.com/video/474092881?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
                setTimeout(() => {
                    container2.style.opacity = 1;
                }, 1000);
            });

        }, 1000);

    }
})



if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    instructions.innerHTML = `
        Tilt your mobile to landscape and move <b>left</b> and <b>right</b> to explore the performance
    `;
} 

