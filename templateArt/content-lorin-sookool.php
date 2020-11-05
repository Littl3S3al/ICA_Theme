

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/style.css">

<div id="three-js-container">
    <div id="loading">
        <div class="text-center">
            <h1>loading...</h1>
            <div class="progress"><div class="progressbar"></div></div>
        </div>
    </div>
    <canvas id="c"></canvas>
</div>



<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 text-center">
            <button id="btn-begin" class="btn btn-primary">start</button>
        </div>
    </div>
</div>


<!-- outer videos -->
<video class="outer" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-1.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-1.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<video class="outer" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-2.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-2.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<video class="outer" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-3.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-3.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<video class="outer" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-4.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-4.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<video class="outer" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-5.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-5.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<video class="outer" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-6.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/OUT-6.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>


<!-- inner videos -->
<video class="inner" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/inner/IN-1.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/IN-1.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<video class="inner" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/inner/IN-2.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/IN-2.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<video class="inner" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/inner/IN-3.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/IN-3.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<video class="inner" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/inner/IN-4.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/IN-4.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<video class="inner" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/inner/IN-5.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/IN-5.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>
<video class="inner" loop crossOrigin="anonymous" playsinline>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/inner/IN-6.ogv" type='video/ogg; codecs="theora, vorbis"'>
    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/outer/IN-6.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>




<!-- three.js script -->
<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/assets/'
</script>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/lorin/script.js" type="module"></script>