

<!-- stylesheet -->
<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lukhanyiso/style.css">

<!-- Font Awesome Icons -->
<link href="<?php bloginfo ('stylesheet_directory'); ?>/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">



<div id="three-js-container" class="d-none">
    <div id="c"></div>
    <div class="buttons">
        <button id="forwards" class="btn btn-light">Next <i class="fas fa-arrow-right"></i></button>
    </div>
</div>

<div id="loading" class="d-none">
    <div class="text-center">
        <h2>Loading...</h2>
        <div class="progress"><div class="progressbar"></div></div>
    </div>
</div>

<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 text-left p-5">
            <h1>title</h1>
            <p>
                Welcoming message
            </p>
            <h2>Instructions:</h2>
            <p>
                instructions
            </p>
            <div class="text-center">
                <button id="btn-begin" class="btn btn-light">start</button>
            </div>
        </div>
    </div>
</div>



<!-- link to assets -->

<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lukhanyiso/assets/';

</script>

<!-- link to script -->
<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lukhanyiso/script.js" type="module"></script>