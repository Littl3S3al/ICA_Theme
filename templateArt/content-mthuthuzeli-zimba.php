<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mthuthuzeli/style.css">

<div id="overlay" class="container-fluid" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mthuthuzeli/assets/background.jpg') center center no-repeat; background-size: cover;">
    <div class="row">
        <div class="col-12 col-md-6 text-center">
            <h1>MORITI</h1>
            <p>
                The sonic life of the performance is immediate. The performances are about the visceral experience of a moving shack enroute to the Cape Town CBD with people banging on the zinc metal, trying to build it as it moves. The project interrogates the concept of structural violence experienced by the black marginalized. There will be glitches during the course of this construction and journey. They will experience a sense of confinement and discomfort. There will be loud sounds and overlapping spoken text. And bewilderment.
            </p>
            <h2>INSTRUCTIONS:</h2>
                <p>
                    Sound is essential to this artwork, make sure that you are wearing headphones. To navigate – click and drag to look around. Click on the windows to view the artwork. Click on the picture frame to view the gallery.
                </p>
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
    <button id="btn-close" class="btn btn-dark">
        close
    </button>

    <div class="video">
    </div>
    
    
</div>

<div class="audio">

    <iframe id="ambient" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/924426535&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-614116968" title="blaze" target="_blank" style="color: #cccccc; text-decoration: none;">blaze</a> · <a href="https://soundcloud.com/user-614116968/shack-sound" title="Shack Sound" target="_blank" style="color: #cccccc; text-decoration: none;">Shack Sound</a></div>

</div>

<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mthuthuzeli/assets/`;
</script>

<!-- soundcloud -->
<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mthuthuzeli/soundcloud.js"></script>

<!-- vimeo api -->
<script src="https://player.vimeo.com/api/player.js"></script>

<!-- three.js script -->
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mthuthuzeli/script.js"></script>