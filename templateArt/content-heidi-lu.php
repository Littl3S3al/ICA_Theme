<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/style.css">

<!-- welcoming screen -->
<div id="page-1" class="container-fluid black-page full-page flex-center">
    <div class="row">
        <div class="col-12 col-md-6 mx-auto text-center">
            <h1>How much do you weigh?</h1>
            <button id="btn-1" class="btn btn-light mt-5">begin</button>
        </div>
    </div>
</div>

<!-- intro video -->
<div id="page-2" class="container-fluid full-page flex-center black-page d-none">
    <div class="row">
        <div class="col-12">
            <div style="padding:43.56% 0 0 0;position:relative;"><iframe id="intro-video" src="https://player.vimeo.com/video/474371144?title=0&byline=0&portrait=0&quality=1080p" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
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
                <li>Light</li><li>Medium</li><li>Heavy</li>
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
                    Next
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
                <i>400 years, 39 000 voyages, 2 million bodies under the Atlantic Ocean...</i>
            </p>
            <div class="text-center">
                <button id="btn-5" class="mt-5 btn btn-light">
                    Enter the weight passage
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
            <!-- should be removed but here for testing -->
            <!-- <button class="btn btn-danger btn-sm" id="enter-canvas">
                    test test test
            </button> -->
            <!-- end of what should be removed -->
            <h4>Select an action to perform</h4>
            <button data-target="1" class="btn btn-sm btn-light option">Right elbow: right, <i>push-drag</i></button>
            <button data-target="2" class="btn btn-sm btn-light option">Right hip: right, <i>thrust-slide</i> </button>
            <button data-target="3" class="btn btn-sm btn-light option">Hands: upwards, <i>dig-push</i></button>
            <button data-target="4" class="btn btn-sm btn-light option">Left shoulder, <i>right to left, press-pull</i></button>
            <button data-target="5" class="btn btn-sm btn-light option">Wrists, rotate, <i>push-twist</i></button>
            <button data-target="6" class="btn btn-sm btn-light option">Arms: upwards, <i>press-push</i></button>
            <button data-target="7" class="btn btn-sm btn-light option">Knees: open outwards,<i> press-slide</i></button>
            <button data-target="8" class="btn btn-sm btn-light option">Chin: side to side,<i> push-drag</i> </button>
            <button data-target="9" class="btn btn-sm btn-light option">Glutes: side to side, <i>writhe</i></button>
        </div>

        <div id="optionOpen" class="d-none">
            <button class="btn-light btn-sm btn" id="open-options">Select another action</button>
        </div>

        <div id="videos" class="d-none">
            
        </div>

</div>

<div id="page-7" class="container-fluid full-page d-none">

        <div id="loading">
            <div>
                <div class="top-bar">
                    L O A D I N G . . . 
                </div>
                <div class="progress"><div class="progressbar"></div></div></div>
        </div>
        <canvas id="c"></canvas>
        <div id="canvas-message">
            scroll up to move forwards through the passage
        </div>

        
</div>


<div id="ending-screen" class="container-fluid full-page flex-center">
</div>

<div id="sounds">

<!-- sound success -->
<iframe id="success" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/922011217&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/laura-seal-1" title="Laura Seal" target="_blank" style="color: #cccccc; text-decoration: none;">Laura Seal</a> · <a href="https://soundcloud.com/laura-seal-1/0a-light-soundclip" title="0A Light Soundclip" target="_blank" style="color: #cccccc; text-decoration: none;">0A Light Soundclip</a></div>

<!-- sound medium -->
<iframe id="medium" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/922011211&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/laura-seal-1" title="Laura Seal" target="_blank" style="color: #cccccc; text-decoration: none;">Laura Seal</a> · <a href="https://soundcloud.com/laura-seal-1/0b-medium-soundclip" title="0B Medium Soundclip" target="_blank" style="color: #cccccc; text-decoration: none;">0B Medium Soundclip</a></div>



<iframe id="heavy" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/922047706&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/laura-seal-1" title="Laura Seal" target="_blank" style="color: #cccccc; text-decoration: none;">Laura Seal</a> · <a href="https://soundcloud.com/laura-seal-1/0c-heavy-soundclip-1" title="0C Heavy Soundclip" target="_blank" style="color: #cccccc; text-decoration: none;">0C Heavy Soundclip</a></div>

</div>

<!-- define assets -->
<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/assets/';
    let weight;
</script>


<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/soundcloud.js"></script>


<script>

var iframeElement   = document.querySelector('#success');
var widget1         = SC.Widget(iframeElement);

var iframeElement2   = document.querySelector('#medium');
var widget2         = SC.Widget(iframeElement);

var iframeElement3   = document.querySelector('#heavy');
var widget3         = SC.Widget(iframeElement);

</script>


<!-- vimeo api -->
<script src="https://player.vimeo.com/api/player.js"></script>

<!-- page handling -->
<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/script.js"></script>

<!-- three.js -->
<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/three.js" type="module"></script>

