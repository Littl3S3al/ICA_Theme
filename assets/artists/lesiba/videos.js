
const next = document.querySelector('.fa-angle-right');
const next_next = document.querySelector('.fa-angle-double-right');
const info = document.querySelector('.fa-info-circle');
const tooltip = document.querySelector('.tool');


let rex_opening;
let rex_ghosts;
let rex_videos;
let rex_photos;
let rex_pattern;
let rex_stitch;
let rex_labels;
let rex_video_check = [];
let rex_all = [];

let suit_opening;
let suit_ghosts;
let suit_videos;
let suit_photos;
let suit_pattern;
let suit_stitch;
let suit_labels;
let suit_video_check = [];
let suit_all = [];

let ct_opening;
let ct_ghosts;
let ct_videos;
let ct_photos;
let ct_pattern;
let ct_stitch;
let ct_labels;
let ct_video_check = [];
let ct_all = [];

let player;

let rex_complete = false;
let suit_complete = false;
let ct_complete = false;

function listen() {

    

    rex_opening = document.querySelector('.rex-opening');
    rex_ghosts = document.querySelectorAll('.rex-ghosts');
    rex_videos = document.querySelectorAll('.video-rex');
    rex_photos = document.querySelectorAll('.image-rex');
    rex_pattern = document.querySelector('#rex');
    rex_stitch = document.querySelectorAll('.rex_line');
    rex_labels = document.querySelectorAll('.rex_text_1, rex_text_2');
    
    rex_all.push(rex_opening, rex_pattern);
    rex_ghosts.forEach(ghost =>{
        rex_all.push(ghost);
    })
    rex_videos.forEach(video =>{
        rex_all.push(video);
    });
    rex_photos.forEach(photo => {
        rex_all.push(photo);
    })
    rex_labels.forEach(label => {
        rex_all.push(label);
    })

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
                    iframe.src = ' ';
                    

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
                            playGhost(rex_ghosts, 0, rex_stitch, rex_labels);
                            // rex_pattern.style.opacity = 0;
                        }
                    }

                });
            

            
            

        })
    })
}


function suit_begin(){
    console.log('suit begin');

    suit_opening = document.querySelector('.suit-opening');
    suit_ghosts = document.querySelectorAll('.suit-ghosts');
    suit_videos = document.querySelectorAll('.video-suit');
    suit_photos = document.querySelectorAll('.image-suit');
    suit_pattern = document.querySelector('#suit');
    suit_stitch = document.querySelectorAll('.suit_line_1, .suit_line_2');
    suit_labels = document.querySelectorAll('.suit_text_1');



    suit_all.push(suit_opening, suit_pattern);
    suit_ghosts.forEach(ghost =>{
        suit_all.push(ghost);
    })
    suit_videos.forEach(video =>{
        suit_all.push(video);
    });
    suit_photos.forEach(photo => {
        suit_all.push(photo);
    });
    suit_labels.forEach(label => {
        suit_all.push(label);
    });



    suit_videos.forEach((div, index) => {

        suit_video_check.push({index, played: false});

        div.addEventListener('click', () => {
            
                const image = div.querySelector('img');
                const iframe = div.querySelector('iframe');


                player = new Vimeo.Player(iframe);

                suit_opening.style.opacity = 0;

                image.style.opacity = 0;
                player.play();
                suit_video_check[index].played = true;


                player.on('ended', () => {
                    div.style.opacity = 0;
                    iframe.src = ' ';
                    

                    for(let i = 0; i < suit_video_check.length; i ++){
                        if(!suit_video_check[i].played){
                            break;
                        } else if (i === suit_video_check.length-1){
                            suit_videos.forEach(video => {
                                video.style.opacity = 0;
                            });
                            suit_photos.forEach(photos => {
                                photos.style.opacity = 0;
                            });
                            playGhost(suit_ghosts, 0, suit_stitch, suit_labels);
                            // rex_pattern.style.opacity = 0;
                        }
                    }

                });
            

            
            

        })
    })
}

function ct_begin() {


    console.log('suit begin');

    ct_opening = document.querySelector('.ct-opening');
    ct_ghosts = document.querySelectorAll('.ct-ghosts');
    ct_videos = document.querySelectorAll('.video-ct');
    ct_photos = document.querySelectorAll('.image-ct');
    ct_pattern = document.querySelector('#ct');
    ct_stitch = document.querySelectorAll('.ct_line_1');
    ct_labels = document.querySelectorAll('.ct_text_1');



    ct_all.push(ct_opening, ct_pattern);
    ct_ghosts.forEach(ghost =>{
        ct_all.push(ghost);
    })
    ct_videos.forEach(video =>{
        ct_all.push(video);
    });
    ct_photos.forEach(photo => {
        ct_all.push(photo);
    });
    ct_labels.forEach(label => {
        ct_all.push(label);
    });



    ct_videos.forEach((div, index) => {

        ct_video_check.push({index, played: false});

        div.addEventListener('click', () => {
            
                const image = div.querySelector('img');
                const iframe = div.querySelector('iframe');


                player = new Vimeo.Player(iframe);

                ct_opening.style.opacity = 0;

                image.style.opacity = 0;
                player.play();
                ct_video_check[index].played = true;


                player.on('ended', () => {
                    div.style.opacity = 0;
                    iframe.src = ' ';
                    

                    for(let i = 0; i < ct_video_check.length; i ++){
                        if(!ct_video_check[i].played){
                            break;
                        } else if (i === ct_video_check.length-1){
                            ct_videos.forEach(video => {
                                video.style.opacity = 0;
                            });
                            ct_photos.forEach(photos => {
                                photos.style.opacity = 0;
                            });
                            playGhost(ct_ghosts, 0, ct_stitch, ct_labels);
                            // rex_pattern.style.opacity = 0;
                        }
                    }

                });
            

            
            

        })
    })

}


function playGhost(ghost, sequence, stitch, labels){
    if(sequence !== "opening"){
        ghost[sequence].style.opacity = 1;
        const iframe = ghost[sequence].querySelector('iframe');
        player = new Vimeo.Player(iframe);
        player.play();
        player.on('ended', () => {
            ghost[sequence].style.opacity = 0;
            iframe.src = ' ';
            if(sequence === 0){
                // console.log('unsticth')
                unstitch(stitch, labels);
            }

            console.log(sequence)
            if(rex_complete && suit_complete && sequence === 3){
                next_next.click();
            }
            if(rex_complete && !suit_complete && sequence === 2){
                console.log('next next');
                next_next.click();
            }
            if(!rex_complete && !suit_complete && sequence === 2){
                console.log('next next');
                next_next.click();
                
            }
            


            playGhost(ghost, (sequence + 1));
            
        });
    } else {
        ghost.style.opacity = 1;
        const iframe = ghost.querySelector('iframe');
        player = new Vimeo.Player(iframe);
        player.play();
        player.on('ended', () => {
            ghost.style.opacity = 0;
            iframe.src = ' ';
        });
        stitch.forEach(stitch => {
            stitch.style.opacity = 1;
        });
        labels.forEach(label => {
            label.style.opacity = 1;
        })
    }
}


function unstitch(pattern, labels){
    pattern.forEach(line => {
        line.style.strokeDasharray = 1000;
        line.style.strokeDashoffset = line.getTotalLength();
        line.style.opacity = 0;
    });
    setTimeout(() => {
        labels.forEach(label => {
            label.style.opacity = 0;
        })
    }, 10000);
}

function destroy(version){
    version.forEach(item => {
        item.style.opacity = 0;
    })
}

