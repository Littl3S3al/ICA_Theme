<?php

get_header();
?>

<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/style.css">


<div id="three-js-container">
    <div id="loading" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/background.jpg') center center no-repeat, #5b87d0; background-size: cover;">
        <div class="text-center">
            <h1>Loading...</h1>
            <h6>please be patient as the page takes a moment to load</h6>
            <div class="progress"><div class="progressbar"></div></div>
        </div>
    </div>
    <div class="buttons">
        <button class="btn btn-light" id="forwards">forwards</button>
        <button class="btn btn-light" id="backwards">backwards</button>
    </div>
    <canvas id="c"></canvas>
    
</div>

<div class="popup-window">
    <button id="btn-close" class="btn btn-light">
        close
    </button>
    <iframe class="d-none" src="" title="W3Schools Free Online Web Tutorials"></iframe>
    <canvas id="d"></canvas>
</div>

<div class="d-none">
    <audio  id="audio-overall" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/sounds/whisper.mp3" preload loop></audio>

    <audio src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/sounds/1_Self.mp3" class="world-audio" preload></audio>
    <audio src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/sounds/2_Body.mp3" class="world-audio" preload></audio>
    <audio src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/sounds/3_Home.mp3" class="world-audio" preload></audio>
    <audio src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/sounds/4_Community.mp3" class="world-audio" preload></audio>
    <audio src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/sounds/5_City.mp3" class="world-audio" preload></audio>
</div>

<div id="overlay" class="container-fluid" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/background.jpg') center center no-repeat; background-size: cover;">
    <div class="row">
        <div class="col-12 col-md-6 0ffset-md-3 text-center">
            <h1>Mmakhotso Lamola</h1>
            <p>
                You are about to explore the immersive worlds of the Belonging Collective Archive via a map of Cape Town. This archive has been cultivated through a year long anonymous collaboration.
            </p>
            <p>
                Click forward and backward to navigate the map. To access the worlds click on the orbs, pyramids and flags. Best Experienced with headphones
            </p>
            <button id="btn-begin" class="btn btn-primary">start</button>

            <div class="my-5"><h4>CREDITS:</h4>
            <p><b>Voices:</b> Obakeng Motsepe, Galerekwe Maimane, Erin Simon, Mmakhotso Lamola</p></div>
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
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/sounds/1_Castle.mp3`,
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/sounds/2_District_6.mp3`,
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/sounds/3_Company_Gardens.mp3`,
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/sounds/4_Prestwich_Memorial.mp3`
    ];
    const worldMaps = [
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/1/`, 
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/2/`, 
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/3/`, 
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/4/`, 
        `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worlds/5/`
    ];

    const soundBeaconPath = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/soundReflection/`;

    const worldBeaconPath = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/worldReflection/`;

    const portfolioBeaconPath = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/pattern.png`;
    

</script>
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mmakhotso/script.js"></script>

<?php get_footer(); ?>