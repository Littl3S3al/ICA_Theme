
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/style.css">



<!-- opening page -->

<div id="home" class="page flex-full container-fluid">
    <div class="row">
        <div class="col-12 mx-auto text-center">
            <h1>Good evening, Mlondi.</h1>
            <p>Somewhere, boys intensify</p>
        </div>
        <div class="col-12 text-center mt-5">
            <img id="photos" class="ios-icon" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/photos.svg" alt="Music">
            <img id="notes" class="ios-icon" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/notes.svg" alt="Music">
            <img id="music" class="ios-icon" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music.svg" alt="Music">
        </div>
    </div>
</div>

<!-- photos -->

<div id="photos-page" class="d-none page page-dark container-fluid">
    <div class="row">

        <!-- header -->
        <div class="col-12 d-flex justify-content-between header">
            <div class="blue-text">
                <img class="small-icon back-icon" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/arrow-left-solid-blue.svg" alt="back">
                <span class="back-icon">Home</span>
            </div>
            <div>
                <span class="medium">zungeza nami</span>
            </div>
            <div class="blue-text">
                <span class="back-icon">Home</span>
                <img class="small-icon back-icon" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/arrow-right-solid-blue.svg" alt="back">
            </div>
            
        </div>
        <!-- end of header -->

        <div id="photo-gallery" class="col-12 content">
            <?php echo do_shortcode('[envira-gallery id="545"]'); ?>
        </div>

        <div id="video-gallery" class="col-12 d-none">
                <?php echo do_shortcode("[elfsight_vimeo_gallery id='3']"); ?>
        </div>

        <!-- footer -->
        <div class="col-12 d-flex justify-content-left footer">
            <img id="photo-album" class="medium-icon mx-3" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/photos/photos_blue.svg" alt="photos">
            <img id="video-album"  class="medium-icon mx-3" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/photos/videos.svg" alt="photos">
        </div>
        <!-- end of footer -->


    </div>
</div>


<!-- notes -->
<div id="notes-page" class="d-none page page-dark container-fluid">
    <div class="row">

        <!-- header -->
        <div class="col-12 d-flex justify-content-between header">
            <div class="yellow-text">
                <img class="small-icon back-icon" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/arrow-left-solid-yellow.svg" alt="back">
                <span class="back-icon">Home</span>
            </div>
            <div>
                <img class="s-m-icon back-icon" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/notes/ellipsis-h-solid.svg" alt="back">
            </div>
            
        </div>
        <!-- end of header -->


        <div class="col-12 mt-5">
            <h1>Notes</h1>
            <hr class="hr-yellow">
        </div>

        <div id="notes-placeholder" class="w-100 content">            

        </div>



        <!-- footer -->
        <div class="col-12 d-flex justify-content-end footer text-yellow">
            <span>12 August 2020</span>
            <img id="video-album"  class="s-m-icon mx-3" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/notes/pen-square-solid.svg" alt="photos">
        </div>
        <!-- end of footer -->

    </div>
</div>


<!-- individual notes -->
<div id="individual-notes-page" class="d-none page page-dark container-fluid">
    <div class="row">

        <!-- header -->
        <div class="col-12 d-flex justify-content-between header">
            <div class="yellow-text">
                <img class="small-icon back-notes" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/arrow-left-solid-yellow.svg" alt="back">
                <span class="back-notes">Back to notes</span>
            </div>
            <div>
                <img class="s-m-icon" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/notes/ellipsis-h-solid.svg" alt="back">
            </div>
            
        </div>
        <!-- end of header -->


        <div class="col-12 my-5" id="placeholder">

        </div>



        <!-- footer -->
        <div class="col-12 d-flex justify-content-end footer text-yellow">
            <span>12 August 2020</span>
            <img id="video-album"  class="s-m-icon mx-3" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/notes/pen-square-solid.svg" alt="photos">
        </div>
        <!-- end of footer -->

    </div>
</div>



<!-- music -->

<div id="music-page" class="d-none page  page-dark container-fluid">
    <div class="row">
        
    
        <!-- header -->
        <div class="col-12 d-flex justify-content-between header">
            <div class="red-text">
                <img class="small-icon back-icon back-pause" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/arrow-left-solid-red.svg" alt="back">
                <span class="back-icon back-pause">Home</span>
            </div>
            
        </div>
        <!-- end of header -->

        <!-- Albumn information -->
        <div class="col-12 music">
            <div class="row mt-5 d-flex">
                <div class="col-6 col-md-1">
                    <img class="w-100" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/music-cover.png" alt="Cover art">
                </div>
                <div class="col-6 col-md-11 d-flex align-items-start flex-column">
                    <div class="top-info">
                        <h1>umthandazo wok’philisa </h1>
                        <h2 class="text-red">Mlondi Dubazane & Joshua Biggs </h2>
                        <h3>Phrases/Thoughts</h3>
                    </div>
                    <div class="mt-auto text-left bottom-info">
                        <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/check-solid.svg" alt="check">
                        <span>DOWNLOADED</span>
                        <img class="elips" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/ellipsis-h-solid.svg" alt="...">
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <!-- play button section -->
        <div class="col-12 music">
            <button id="play-current-track" class="play btn btn-dark px-5">
                <img class="mr-2" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/play-solid.svg" alt="">
                <span class="text-red">Play</span>
            </button>
            <hr>
        </div>

        <!-- tracks -->
        <div class="col-12 mb-5 pb-5 music">

            <div class="track" data-target="0">
                <div class="one d-inline-block">
                    <img class="w-100" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/star-solid.svg" alt="star">
                </div>
                <div class="two d-inline-block">1</div>
                <div class="three d-inline-block">Wherever I go</div>
                <hr>
            </div>

            <div class="track" data-target="1">
                <div class="one d-inline-block">
                    <img class="w-100" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/star-solid.svg" alt="star">
                </div>
                <div class="two d-inline-block">1</div>
                <div class="three d-inline-block">a lot happened that day</div>
                <hr>
            </div>

            <div class="track" data-target="2">
                <div class="one d-inline-block">
                    <img class="w-100" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/star-solid.svg" alt="star">
                </div>
                <div class="two d-inline-block">2</div>
                <div class="three d-inline-block">insecure heartbeat </div>
                <hr>
            </div>

            <div class="track" data-target="3">
                <div class="one d-inline-block">
                    <img class="w-100" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/star-solid.svg" alt="star">
                </div>
                <div class="two d-inline-block">3</div>
                <div class="three d-inline-block">is'zungu es'zungezayo</div>
                <hr>
            </div>

            <div class="track" data-target="4">
                <div class="one d-inline-block">
                    <img class="w-100" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/star-solid.svg" alt="star">
                </div>
                <div class="two d-inline-block">4</div>
                <div class="three d-inline-block">Lapha </div>
                <hr>
            </div>

        </div>




        <!-- footer -->
        <div class="col-12 footer text-yellow">
            <div class="row d-flex align-items-center">
                <div>
                    <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/music-cover.png" alt="Cover art">
                </div>
                <div id="display" class="col-6 col-md-9 text-left">Wherever I go</div>
                <div class="ml-auto">
                    <img id="play-pause" class="icon" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/play-solid-white.svg" alt="">
                    <img id="skip" class="icon" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/music/fast-forward-solid.svg" alt="">
                </div>
            </div>
        </div>
        <!-- end of footer -->

        
    </div>
</div>

<div class="sounds">


    <iframe id="track1" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/741929686&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/noiseinside" title="Noise inside" target="_blank" style="color: #cccccc; text-decoration: none;">Noise inside</a> · <a href="https://soundcloud.com/noiseinside/wherever-i-go" title="Wherever I Go" target="_blank" style="color: #cccccc; text-decoration: none;">Wherever I Go</a></div>

    <iframe id="track2" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/922548958&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/noiseinside" title="Noise inside" target="_blank" style="color: #cccccc; text-decoration: none;">Noise inside</a> · <a href="https://soundcloud.com/noiseinside/a-lot-happened-that-day" title="a lot happened that day" target="_blank" style="color: #cccccc; text-decoration: none;">a lot happened that day</a></div>


    <iframe id="track3" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/922548949&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/noiseinside" title="Noise inside" target="_blank" style="color: #cccccc; text-decoration: none;">Noise inside</a> · <a href="https://soundcloud.com/noiseinside/insecure-heartbeat" title="insecure heartbeat" target="_blank" style="color: #cccccc; text-decoration: none;">insecure heartbeat</a></div>

    <iframe id="track4" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/922548931&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/noiseinside" title="Noise inside" target="_blank" style="color: #cccccc; text-decoration: none;">Noise inside</a> · <a href="https://soundcloud.com/noiseinside/iszungu-eszungezayo" title="is&#x27;zungu es&#x27;zungezayo" target="_blank" style="color: #cccccc; text-decoration: none;">is&#x27;zungu es&#x27;zungezayo</a></div>

    <iframe id="track5" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/741910780&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/noiseinside" title="Noise inside" target="_blank" style="color: #cccccc; text-decoration: none;">Noise inside</a> · <a href="https://soundcloud.com/noiseinside/lapha-2018-part-2-composed-by-joshua-biggs" title="Lapha (2018) Part 2 Composed by Joshua Biggs" target="_blank" style="color: #cccccc; text-decoration: none;">Lapha (2018) Part 2 Composed by Joshua Biggs</a></div>

</div>






<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/assets/';


    // fetching the notes from the wordpress database
    const docs = [
        <?php $data = get_field('note', 607);

            foreach($data as $row) : ?>
                { title: '<?php echo $row['title']; ?>', snippet: '<?php echo $row['snippet']; ?>' , content: `<?php echo $row['content']; ?>`},
            <?php endforeach;?>
    ];

</script>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/soundcloud.js"></script>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/script.js"></script>