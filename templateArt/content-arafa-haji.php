<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/style.css">

<!-- Font Awesome Icons -->
<link href="<?php bloginfo ('stylesheet_directory'); ?>/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">


<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 text-left">
            <h1>Title</h1>
            <p>
            Welcoming messsage
            </p>
            <h2>INSTRUCTIONS:</h2>
                <p>
                    inscructions
                </p>

            <div class="text-center">
            <button id="btn-begin" class="my-5 btn btn-light">start</button>
            </div>
            <h2>CREDITS: </h2>
            
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

<div class="popup-window">

    <div class="video">

    </div>

    <div class="button">
        <button class="btn btn-light" id="close">exit</button>
    </div>
</div>

<script>
    const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/assets/`;
</script>

<script src="https://player.vimeo.com/api/player.js"></script>

<!-- three.js script -->
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/script.js"></script>