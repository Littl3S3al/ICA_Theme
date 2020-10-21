<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/billy_langa/style.css">

<div id="overlay" class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <h1>Billy Langa</h1>
                <p>This piece requires use of audio and is best experienced with headphones</p>
                <button id="btn-begin" class="btn btn-primary">start</button>
            </div>
        </div>
    </div>

    <div id="three-js-container">
        <div id="vignett"></div>
        <div id="transition"></div>
        <div id="loading">
            <div class="progress"><div class="progressbar"></div></div>
        </div>
        <canvas id="c"></canvas>
        <canvas id="d"></canvas>
        
    </div>

    <div class="popup-window">
        <div class="video">

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


    <script>
        const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/billy_langa/assets`;
    </script>
    <script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/billy_langa/test.js"></script>