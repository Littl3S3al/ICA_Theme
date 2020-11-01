<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/style.css">

<!-- welcoming screen -->
<div id="page-1" class="container-fluid black-page full-page flex-center">
    <div class="row">
        <div class="col-12 col-md-6 mx-auto text-center">
            <h1>How much do you weigh?</h1>
            <button id="btn-1" class="btn btn-light">begin</button>
        </div>
    </div>
</div>

<!-- intro video -->
<div id="page-2" class="container-fluid full-page flex-center black-page d-none">
    <div class="row">
        <div class="col-12">
            <div style="padding:43.56% 0 0 0;position:relative;"><iframe id="intro-video" src="https://player.vimeo.com/video/153889857?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
        </div>
        <div class="col-12 fixed-bottom flex-center">
            <button id="btn-2" class="btn btn-light">skip</button>
        </div>
    </div>
</div>

<!-- range slider page -->
<div id="page-3" class="container-fluid full-page flex-center black-page d-none">
    <div class="row">
        <div class="col-11 col-md-6 mx-auto text-center">
            <p class="mb-5">How much do you weigh?</p>
            <input id="range" type="range" min="1" max="100" value="50" class="slider" id="myRange">
            <ul class="range-labels">
                <li>Small</li><li>Medium</li><li>Large</li>
            </ul>
            <button id="btn-3" class="mt-5 btn btn-light">
                submit
            </button>
        </div>
    </div>
</div>


<!-- artist intention -->
<div id="page-4" class="container-fluid full-page flex-center black-page d-none">
    <div class="row">
        <div class="col-12 col-md-6 mx-auto">
            <p>To fully immerse yourself in alignment with the artist’s intention, please experience this piece in the following three ways:</p>
            <ol>
                <li>In a completely dark space</li>
                <li>With the sound on, using headphones</li>
                <li>Completely nude</li>
            </ol>
            <div class="text-center">
                <button id="btn-4" class="mt-5 btn btn-light">
                    I am ready
                </button>
            </div>
        </div>
    </div>
</div>


<!-- quote-->
<div id="page-5" class="container-fluid full-page flex-center black-page d-none">
    <div class="row">
        <div class="col-12 col-md-6 mx-auto">
            <p>
                "Houses like human beings are made from little balls of earth, made from the muddy tissue of the ancestor’s body. They are said to be both earthborn and earthbound"

            </p>
            <p>
                “The first men and women were all made entirely of clay. God then breathed life into them by breathing into their ears”
            </p>
            <p>
                <i>400 years, 39 000 voyages, 2 million bodies under the Atlantic Ocean...</i>
            </p>
            <div class="text-center">
                <button id="btn-5" class="mt-5 btn btn-light">
                    next
                </button>
            </div>
        </div>
    </div>
</div>



<!-- instructions and imprints -->
<div id="page-6" class="container-fluid full-page d-none" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/assets/pano.jpg') center center no-repeat; background-size: cover;" >

    <div id="loading-images" class="row full-page flex-center text-white">
        <div class="col-12 text-center">
            <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/assets/loader.gif" alt="loading">
            <p>Please be patient while your options load...</p>
        </div>
    </div>

    <div id="images" class="row d-none">
                
    </div>

    <div id="options">
            <h4>Select an action to perform</h4>
            <button data-target="1" class="btn btn-sm btn-light option">Right elbow: right, push-drag</button>
            <button data-target="2" class="btn btn-sm btn-light option">Right hip: right, thrust-slide </button>
            <button data-target="3" class="btn btn-sm btn-light option">Hands: upwards, dig-push</button>
            <button data-target="4" class="btn btn-sm btn-light option">Left shoulder, right to left, press-pull</button>
            <button data-target="5" class="btn btn-sm btn-light option">Wrists, rotate, push-twist</button>
            <button data-target="6" class="btn btn-sm btn-light option">Arms: upwards, press-push</button>
            <button data-target="7" class="btn btn-sm btn-light option">Knees: open outwards, press-slide</button>
            <button data-target="8" class="btn btn-sm btn-light option">Chin: side to side, push-drag </button>
            <button data-target="9" class="btn btn-sm btn-light option">Glutes: side to side, writhe</button>
        </div>

        <div id="optionOpen" class="d-none">
            <button class="btn-light btn-sm btn" id="open-options">Select another action</button>
        </div>

</div>

<div id="page-7" class="container-fluid full-page d-none">
    <canvas id="c"></canvas>
</div>

<!-- define assets -->
<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/assets/';
</script>

<!-- vimeo api -->
<script src="https://player.vimeo.com/api/player.js"></script>

<!-- page handling -->
<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/script.js"></script>

<!-- three.js handling -->