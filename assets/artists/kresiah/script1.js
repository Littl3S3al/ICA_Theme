const opening_container = document.querySelector('.opening-container');

const toss = document.querySelector('.throwing-container');
const block_4 = document.querySelector('#four');
const block_7 = document.querySelector('#seven');

const stones = document.querySelectorAll('.stone');
const prints = document.querySelectorAll('.footprint');

const videoContainer = document.querySelector('.video-container');

const overlay = document.querySelector('.overlay');


let count = 0;

// for testing purposes
// let count = 2;


toss.addEventListener('click', () => {
    toss.classList.add('d-none');
    // first throw
    if(count === 0){
        
        let i = 0;
        const stoneThrow = setInterval(() => {
            if(i < 3){
                stones[i].style.display = 'block';
                i++
            } else {
                clearInterval(stoneThrow)
            }
        }, 500);
        let k = 0;
        setTimeout(() => {
            const jumping = setInterval(() => {
                if(k < 2){
                    prints[k].style.display = 'block';
                    k++
                } else if (k === 2){
                    prints[k].style.display = 'block';
                    prints[k+1].style.display = 'block';
                    k ++;
                } else {
                    playVideo('484409555');
                    clearInterval(jumping)
                }
            }, 500);
            count ++
        }, 1500);

        

    }

    // second throw
    if(count === 1){
        stones[2].style.display = 'none';
        let i = 3;
        const stoneThrow = setInterval(() => {
            if(i < 6){
                stones[i].style.display = 'block';
                i++
            } else {
                clearInterval(stoneThrow)
            }
        }, 500);

        
        let k = 4;
        setTimeout(() => {
            prints[2].style.display = 'none';
            prints[3].style.display = 'none';
            const jumping = setInterval(() => {
                if(k < 6){
                    prints[k].style.display = 'block';
                    k++
                } else if (k === 6){
                    prints[k].style.display = 'block';
                    prints[k+1].style.display = 'block';
                    k ++;
                } else {
                    clearInterval(jumping);
                    playVideo('484409283')
                }
            }, 500);
            count ++
        }, 2000);
    }

    // third throw
    if(count === 2){
        stones[5].style.display = 'none';
        setTimeout(() => {
            stones[6].style.display = 'block';
        }, 500);
        setTimeout(() => {
            prints[6].style.display = 'none';
            prints[7].style.display = 'none';
        }, 1000);
        setTimeout(() => {
            prints[8].style.display = 'block';
        }, 1500);
        setTimeout(() => {
            overlay.classList.remove('d-none');
            opening_container.style.display = 'none';
            toss.classList.add('d-none');
        }, 2000);
       
    }
   
})

function playVideo(id) {
    toss.classList.remove('d-none');
    videoContainer.innerHTML = `<iframe src="https://player.vimeo.com/video/${id}?color=bd3434&title=0&byline=0&portrait" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    const iframe = videoContainer.querySelector('iframe');
    videoContainer.classList.remove('d-none');
    const player = new Vimeo.Player(iframe);
    player.play();

    player.on('ended', () => {
        iframe.src = '';
        videoContainer.classList.add('d-none');
    })
}