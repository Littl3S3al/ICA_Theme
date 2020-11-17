<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lesiba/style.css">

<div id="three-js-container">
    <div id="c"></div>



    <!-- <div id="buttons">
        <button id="left" class="btn btn-light">left</button>
        <button id="right" class="btn btn-light">right</button>
    </div> -->

    <div class="play-bar text-center">
        <i class="fas fa-angle-right"></i>
        <i class="fas fa-angle-double-right"></i>
    </div>


</div>



<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 text-left p-5">
            <h1>Title</h1>
            <p>
                Welcoming message
            </p>
            <h2>Instructions:</h2>
            <p>
                Instructions
            </p>
            <div class="text-center">
                <button id="btn-begin" class="btn btn-light">start</button>
            </div>
        </div>
    </div>
</div>


<div class="svg"></div>






<!-- three.js script -->
<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lesiba/assets/';

</script>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lesiba/svgs/rex.js"></script>

<script src="https://player.vimeo.com/api/player.js"></script>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lesiba/script.js" type="module"></script>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lesiba/videos.js"></script>