<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet">


<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/luke-de-kock/style.css">

<div id="three-js-container">
    <div id="c"></div>

    <div class="blocker"></div>

    <div class="buttons">
        <button id="forwards" class="btn btn-light">
            <i class="fas fa-arrow-up"></i> next
        </button>
        <button id="backwards" class="btn btn-light">
            <i class="fas fa-arrow-down"></i> Previous
        </button>
    </div>
</div>



<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-10 col-md-6 text-justify">
            <h1>Location/Lokasie</h1>
            <br><br>
            <p>
                Location/Lokasie is an exhibition of the environment that is a host to the stories and untold stories of people on the Cape Flats. This work is expressed as abstract and interpretive movement through the reaction of history, in a conversation between family.
            </p>

            <h2 class="mt-5">Credits:</h2>
            <p>
                Conway October
            </p>
            
            <div class="text-center">
                <button id="btn-begin" class="btn btn-danger m-5">Enter</button>

            </div>
            

            <h2>Instructions:</h2>
            <p class="text-warning">This page may not work on your mobile device - it is optimised for laptops</p>
            <p>Headphones are neccessary for this performance</p>
        </div>
    </div>
</div>



<!-- final screen -->

<div id="ending-message" class="d-none">
    <h1>Location/Lokasie</h1>
</div>

<!-- reminder to have phone on horizontal -->
<div id="landscape-message">
    <p>Please rotate your device to see the page</p>
</div>

<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/luke-de-kock/assets/';
</script>

<script src="https://player.vimeo.com/api/player.js"></script>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/luke-de-kock/script.js" type="module"></script>