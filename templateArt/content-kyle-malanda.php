<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/style.css">

<!-- Font Awesome Icons -->
<link href="<?php bloginfo ('stylesheet_directory'); ?>/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">

<div class="buttons">
    <button class="btn btn-light btn-lg" id="gallery">
        <i class="fas fa-images"></i>
    </button>
    <button class="btn btn-warning btn-lg" id="ar">
        <i class="fas fa-eye"></i>
    </button>
</div>

<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 text-center">
            <h1>REWRITING GENESIS</h1>
            <p>
                This work is largely influenced by my own spiritual journey and return to African traditional religion. Experience moments of tenderness between two women. Please use the educational augmented reality filters in the links for ancestral affirmations and a virtual altar, and become golden.
            </p>
            <h2>INSTRUCTIONS:</h2>
                <p>
                    Click and drag with the mouse or with your finger to look around. Make sure to click on the icons at the top of the page for additional content.
                </p>
            <h2>CREDITS:</h2>
            <p>Models: Lydia Tremayne and Rhandi Purnell <br>
                Costume design: Awele Okeibunor <br>
                Make Up Artist: Yoshiie Allen</p>
            <button id="btn-begin" class="btn btn-light">start</button>
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

<div class="gallery container-fluid d-none">
    <div class="row p-5">
        
        <div class="col-12 text-center">
            <h1>Image Gallery</h1>
        </div>
        <div class="col-12">
            <?php echo do_shortcode('[envira-gallery id="797"]') ?>
        </div>
        <div class="col-12 text-center">
            <button class="btn btn-danger close-btn">
                close gallery
            </button>
        </div>
    </div>

</div>

<div class="ar ar-desktop container-fluid d-none">
    <div class="row p-5">
        <div class="col-12 col-md-6 mx-auto text-center">
            <h1>Augmented Reality Filters</h1>
            <p>Augmented reality (AR) is an interactive experience where real world environments are changed or enhanced with computer generated technology.</p>
            <p>Examples of AR: Instagram & Facebook filters, much like the ones below. Scan the QR code with your smartphone camera to try it out!</p>

            <div class="text-center my-5">
                <hr>
                <h2 class="bolder">Already Golden</h2>
                <h2 class="bolder small">May your words keep you golden</h2>
                <img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/image-01.jpg"><img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/code-01.jpg">
            </div>

            <div class="text-center my-5">
                <hr>
                <h2 class="bolder">Ancestral Altar</h2>
                <h2 class="bolder small">An altar for wherever you go</h2>
                <img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/image-02.jpg"><img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/code-02.jpg">
            </div>

            <div class="text-center my-5">
                <hr>
                <h2 class="bolder">Ancestor Affirmations</h2>
                <h2 class="bolder small">Affirm your people, and yourself</h2>
                <img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/image-03.jpg"><img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/code-03.jpg">
            </div>

            <div class="text-center my-5">
                <hr>
                <h2 class="bolder">Banana Grove</h2>
                <h2 class="bolder small">Where Ngonde people communed with ancestors</h2>
                <img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/image-04.jpg"><img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/code-04.jpg">
            </div>
        </div>
        <div class="col-12 text-center p-5">
            <button class="btn btn-danger close-btn">
                close menu
            </button>
        </div>
    </div>

</div>


<div class="ar ar-mobile container-fluid d-none">
    <div class="row p-5">
        <div class="col-12 col-md-6 mx-auto text-center">
            <h1>Augmented Reality Filters</h1>
            <p>Augmented reality (AR) is an interactive experience where real world environments are changed or enhanced with computer generated technology.</p>
            <p>Examples of AR: Instagram & Facebook filters, much like the ones below. Click on the Facebook or Instagram icon to try it out!</p>

            <div class="text-center my-5">
                <hr>
                <h2 class="bolder">Already Golden</h2>
                <h2 class="bolder small">May your words keep you golden</h2>
                <img class="w-100" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/image-01.jpg">
                <div class="my-3"></div>
                <a href="https://www.instagram.com/ar/3562277670503629/" class="btn btn-primary btn-lg"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/fbcameraeffects/tryit/4545966608810884/" class="btn btn-primary btn-lg"><i class="fab fa-facebook-f"></i></a>
            </div>

            <div class="text-center my-5">
                <hr>
                <h2 class="bolder">Ancestral Altar</h2>
                <h2 class="bolder small">An altar for wherever you go</h2>
                <img class="w-100" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/image-02.jpg">
                <div class="my-3"></div>
                <a href="https://www.instagram.com/ar/682758875716028/" class="btn btn-primary btn-lg"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/fbcameraeffects/tryit/682758875716028/" class="btn btn-primary btn-lg"><i class="fab fa-facebook-f"></i></a>
            </div>

            <div class="text-center my-5">
                <hr>
                <h2 class="bolder">Ancestor Affirmations</h2>
                <h2 class="bolder small">Affirm your people, and yourself</h2>
                <img class="w-100" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/image-03.jpg">
                <div class="my-3"></div>
                <a href="https://www.instagram.com/ar/716937835919588/" class="btn btn-primary btn-lg"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/fbcameraeffects/tryit/3562277670503629/" class="btn btn-primary btn-lg"><i class="fab fa-facebook-f"></i></a>
            </div>

            <div class="text-center my-5">
                <hr>
                <h2 class="bolder">Banana Grove</h2>
                <h2 class="bolder small">Where Ngonde people communed with ancestors</h2>
                <img class="w-100" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/ar-filters/image-04.jpg">
                <div class="my-3"></div>
                <a href="https://www.instagram.com/ar/3562277670503629/" class="btn btn-primary btn-lg"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/fbcameraeffects/tryit/4545966608810884/" class="btn btn-primary btn-lg"><i class="fab fa-facebook-f"></i></a>
            </div>
        </div>
        <div class="col-12 text-center p-5">
            <button class="btn btn-danger close-btn">
                close menu
            </button>
        </div>
    </div>

    

</div>


<script>
    const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/assets/`;
</script>

<!-- three.js script -->
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/script.js"></script>

<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kyle-malanda/functions.js"></script>