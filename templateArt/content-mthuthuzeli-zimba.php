<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mthuthuzeli/style.css">

<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 text-center">
            <h1>Title</h1>
            <p>
            Welcoming message
            </p>
            <h2>INSTRUCTIONS:</h2>
            <p>instructions to come</p>
            <button id="btn-begin" class="btn btn-light">start</button>
        </div>
    </div>
</div>

<div id="three-js-container">
    <!-- <div id="loading">
        <div class="text-center">
            <h1>loading...</h1>
            <div class="progress"><div class="progressbar"></div></div>
        </div>
    </div> -->
    <canvas id="c"></canvas>
    
</div>

<div class="popup-window d-none" >
    <div class="video">
    </div>
    <button id="btn-close" class="btn btn-dark">
        close
    </button>
    
</div>

<div class="d-none">
    <audio loop>
        <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mthuthuzeli/assets/wind.wav" type="audio/wav">
    </audio>
</div>

<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mthuthuzeli/assets/`;
</script>
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mthuthuzeli/script.js"></script>