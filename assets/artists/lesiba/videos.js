
let rex_opening;
let rex_ghosts;
let rex_videos;
let rex_photos;
let rex_pattern;
let rex_stitch;
let rex_labels;
let rex_video_check = [];

let player;

function listen() {

    

    rex_opening = document.querySelector('.rex-opening');
    rex_ghosts = document.querySelectorAll('.rex-ghosts');
    rex_videos = document.querySelectorAll('.video-rex');
    rex_photos = document.querySelectorAll('.image-rex');
    rex_pattern = document.querySelector('#rex');
    rex_stitch = document.querySelectorAll('.rex_line');
    rex_labels = document.querySelectorAll('.rex_text_1', 'rex_text_2');
    

    rex_videos.forEach((div, index) => {

        rex_video_check.push({index, played: false});

        div.addEventListener('click', () => {
            
                const image = div.querySelector('img');
                const iframe = div.querySelector('iframe');


                player = new Vimeo.Player(iframe);

                rex_opening.style.opacity = 0;

                image.style.opacity = 0;
                player.play();
                rex_video_check[index].played = true;


                player.on('ended', () => {
                    div.style.opacity = 0;
                    

                    for(let i = 0; i < rex_video_check.length; i ++){
                        if(!rex_video_check[i].played){
                            break;
                        } else if (i === rex_video_check.length-1){
                            rex_videos.forEach(video => {
                                video.style.opacity = 0;
                            });
                            rex_photos.forEach(photos => {
                                photos.style.opacity = 0;
                            });
                            playGhost(rex_ghosts, 0);
                            // rex_pattern.style.opacity = 0;
                        }
                    }

                });
            

            
            

        })
    })
}




function playGhost(ghost, sequence){
    if(sequence !== "opening"){
        ghost[sequence].style.opacity = 1;
        const iframe = ghost[sequence].querySelector('iframe');
        player = new Vimeo.Player(iframe);
        player.play();
        player.on('ended', () => {
            ghost[sequence].style.opacity = 0;
            if(sequence === 0){
                console.log('unsticth')
                unstitch(rex_stitch, rex_labels);
            }
            playGhost(ghost, (sequence +1));
        });
    } else {
        ghost.style.opacity = 1;
        const iframe = ghost.querySelector('iframe');
        player = new Vimeo.Player(iframe);
        player.play();
        player.on('ended', () => {
            ghost.style.opacity = 0;
        });
    }
}


function unstitch(pattern, labels){
    pattern.forEach(line => {
        line.style.strokeDasharray = 1000;
        line.style.strokeDashoffset = 1050;
    });
    setTimeout(() => {
        labels.forEach(label => {
            label.style.opacity = 0;
        })
    }, 10000);
}

