
<!-- stylesheet -->
<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/style.css">

<!-- Font Awesome Icons -->
<link href="<?php bloginfo ('stylesheet_directory'); ?>/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">


<div id="three-js-container" class="d-none">
    <div id="c"></div>
</div>

<div class="container-fluid opening-container">
    <div class="hopscotch-container">
        <div class="grid-item center-block" id="one">
            <div class="stone jumping-stone"></div>
            <div class="footprint hide">
                <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/right.svg" alt="">
            </div>
        </div>
        <div class="grid-item center-block" id="two">
            <div class="stone jumping-stone"></div>
            <div class="footprint hide">
                <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/right.svg" alt="">
            </div>
        </div>

        <div class="grid-item block-left" id="three">
            <div class="footprint">
                <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/right.svg" alt="">
            </div>
        </div>

        <div class="grid-item block-right" id="four">
            <div class="stone"></div>
            <div class="footprint">
                <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/left.svg" alt="">
            </div>
        </div>

        <div class="grid-item center-block" id="five">
            <div class="stone jumping-stone"></div>
            <div class="footprint hide">
                <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/left.svg" alt="">
            </div>
        </div>
        <div class="grid-item center-block" id="six">
            <div class="stone jumping-stone"></div>
            <div class="footprint hide">
                <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/left.svg" alt="">
            </div>
        </div>

        <div class="grid-item block-left" id="seven">
            <div class="stone"></div>
            <div class="footprint">
                <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/right.svg" alt="">
            </div>
        </div>
        <div class="grid-item block-right" id="eight">
            <div class="footprint">
                <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/left.svg" alt="">
            </div>
        </div>

        <div class="grid-item" id="nine">
            <div class="stone"></div>
            <div class="footprint">
                <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/left.svg" alt="">
            </div>
        </div>
        
    </div>
</div>

<div class="throwing-container">
    <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/throw.svg" alt="Throw the stone">
</div>

<div class="container-fluid video-container d-none">
    <div class="row">
        <div class="col-12">
            <div style="padding:56.25% 0 0 0;position:relative;"></div>
        </div>
    </div>
</div>

<div class="overlay container-fluid d-none">
    <div class="row w-100">
        <div class="col-12 col-md-6 offset-md-3 text-center">
            <h1>Hesi Keresiya</h1>
            <p>This piece is to be experienced like a memory or a story being told.</p>
            <h2>Instructions</h2>
            <p>Please wear headphones</p>
            <button class="btn btn-warning" id="begin-btn">Begin</button>
        </div>
    </div>
</div>


<!-- assets link -->
<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/assets/'
</script>
<!-- vimeo script -->
<script src="https://player.vimeo.com/api/player.js"></script>

<!-- scripts -->
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/script1.js"></script>

<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kresiah/script2.js"></script>