<?php

get_header();
?>

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/style.css">

<div id="three-js-container">
    <div id="loading">
        <div class="text-center">
            <h6>Loading . . .</h6>
            <div class="progress"><div class="progressbar"></div></div>
        </div>
    </div>
    <div class="buttons">
        <button class="btn btn-dark" id="forwards">forwards</button>
        <button class="btn btn-light" id="backwards">backwards</button>
    </div>
    <canvas id="c"></canvas>
    
</div>

<div class="popup-window">
    <button id="btn-close" class="btn btn-primary">
        close
    </button>
    <iframe class="d-none" src="" title="W3Schools Free Online Web Tutorials"></iframe>
    <canvas id="d"></canvas>
</div>

<div class="d-none">
    <audio  class="audio-overall" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/sounds/whisper.wav" preload loop></audio>

    <audio src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/sounds/bensound-betterdays.mp3" class="world-audio" preload></audio>
    <audio src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/sounds/bensound-betterdays.mp3" class="world-audio" preload></audio>
    <audio src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/sounds/bensound-betterdays.mp3" class="world-audio" preload></audio>
    <audio src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/sounds/bensound-betterdays.mp3" class="world-audio" preload></audio>
    <audio src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/sounds/bensound-betterdays.mp3" class="world-audio" preload></audio>
</div>

<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 text-center">
            <h1>Mmakhotso Lamola</h1>
            <p>You are on a journey. Look around by draging your mouse, click on objects to see what happens</p>
            <p>click on the forwards and backwards buttons to move</p>
            <button id="btn-begin" class="btn btn-primary">start</button>
        </div>
    </div>
</div>




<!-- bootstrap js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<!-- three.js script -->
<script>
    const blueprint = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/bluepring.jpg`;
    const audios = [
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/sounds/bensound-cute.mp3`,
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/sounds/bensound-hey.mp3`,
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/sounds/bensound-relaxing.mp3`,
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/sounds/bensound-ukulele.mp3`
    ];
    const worldMaps = [
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/soundReflection/`, 
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/soundReflection/`, 
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/soundReflection/`, 
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/soundReflection/`, 
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/soundReflection/`
    ];

    const soundBeaconPath = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/soundReflection/`;

    const worldBeaconPath = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worldReflection/`;

    const portfolioBeaconPath = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/pattern.png`;
    

</script>
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/script.js"></script>

<?php get_footer(); ?>