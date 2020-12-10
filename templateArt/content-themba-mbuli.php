<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/themba/style.css">

<!-- Font Awesome Icons -->
<link href="<?php bloginfo ('stylesheet_directory'); ?>/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">


<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 text-left">
            <h1>Dark Cell : Breathe</h1>
            <p>
            Inspired by my 2012 solo “Dark Cell” which used a prison cell as a metaphor for mental imprisonment, “Breathe” further investigates this subject on a personal and psychological level.
            <br>
            “Breathe” depicts an intimate conversation with my therapist and also with myself, with the hopes of delving more deeply into the inner workings of my mind. I feel this to be an important conversation, as a black South African man especially in these troubling times.
            </p>
            <h2>INSTRUCTIONS:</h2>
                <p>
                    Click and drag with the mouse or with your finger to look around. Hover or click on different parts of the brain to get a reaction.
                </p>

            <div class="text-center">
            <button id="btn-begin" class="my-5 btn btn-light">start</button>
            </div>
            <h2>CREDITS: </h2>
            <p>
            Choreographer and Performer: Themba Mbuli
            <br>
            Music: Andre Mario Smith
            <br>
            Therapist: Louise Westerhout 
            <br>
            Videography and Editing: Vision by Moonlight
            <br>
            Archive Music Composer: Phil Thurston 
            </p>
            
        </div>
    </div>
</div>

<div id="three-js-container" class="d-none">
    <div id="loading">
        <div class="text-center">
            <h1>loading...</h1>
            <div class="progress"><div class="progressbar"></div></div>
        </div>
    </div>
    <canvas id="c"></canvas>
    
</div>

<div class="opening-video">
    <div class='text-center'>
        <div class="video-2">
            <iframe src="https://player.vimeo.com/video/487192928?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <h4>- archive -</h4>
    </div>
    <div class="button">
        <button class="btn btn-light" id="skip-opening">exit</button>
    </div>
</div>

<div class="popup-window">

    <div class="video">

    </div>

    <div class="button">
        <button class="btn btn-light" id="close">exit</button>
    </div>
</div>

<div class="sounds">
    <iframe id="ambient" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/940646977&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dredzt" title="dredzt" target="_blank" style="color: #cccccc; text-decoration: none;">dredzt</a> · <a href="https://soundcloud.com/dredzt/my-movie-9" title="Outside Layer Sound" target="_blank" style="color: #cccccc; text-decoration: none;">Outside Layer Sound</a></div>

</div>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/soundcloud.js"></script>
<script>
    const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/themba/assets/`;
</script>

<script src="https://player.vimeo.com/api/player.js"></script>

<!-- three.js script -->
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/themba/script.js"></script>