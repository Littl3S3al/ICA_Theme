<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/billy_langa/style.css">

<div id="overlay" class="container-fluid" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/billy_langa/assets/background.jpg') center center no-repeat; background-size: cover;">
    <div class="row">
        <div class="col-12 col-md-6 text-center">
            <h1>The Full Circle, a retrospective on Tswalo</h1>
            <p>
            Here we are getting into the mind of the maker through variations of the process of making through a compilation of videos essays and sonic interpretation about the process of creation. The work takes the audience through a recorded study of the investigation of meaning making. 
            </p>
            <h2>INSTRUCTIONS:</h2>
            <p>This piece requires use of audio and is best experienced with headphones</p>
            <button id="btn-begin" class="btn btn-light">start</button>
        </div>
    </div>
</div>

<div id="three-js-container">
    <div id="vignett"></div>
    <div id="transition"></div>
    <div id="loading">
        <div class="text-center">
            <h1>loading...</h1>
            <div class="progress"><div class="progressbar"></div></div>
        </div>
    </div>
    <canvas id="c"></canvas>
    <canvas id="d"></canvas>
    
</div>

<div class="popup-window">
    <div class="wait">
        <h2>...transitioning...</h2>
    </div>

    <div class="video">
    <iframe src="https://player.vimeo.com/video/470932456?&title=0&byline=0&portrait=0" style="width:100%;height:100%;" frameborder="0" allow="autoplay, fullscreen"></iframe>
    </div>
    <button id="btn-close" class="btn btn-dark d-none">
        close
    </button>
    
</div>

<div class="d-none">
    <audio loop>
        <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/billy_langa/assets/bensound-relaxing.mp3" type="audio/mp3">
    </audio>
</div>

<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/billy_langa/assets`;
</script>
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/billy_langa/test.js"></script>