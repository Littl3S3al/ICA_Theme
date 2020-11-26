<!-- google fonts -->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Noticia+Text:wght@700&display=swap" rel="stylesheet">


<!-- Font Awesome Icons -->
<link href="<?php bloginfo ('stylesheet_directory'); ?>/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">

<!-- stylesheet -->
<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/sikhumbuzo/style.css">

<div class="container-fluid page" id="banner" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/sikhumbuzo/assets/background.jpg') top center no-repeat; background-size: cover;">
    <div class="row w-100">
        <div class="col-12 col-md-4 offset-md-4 text-center">
            <h1>Ingoma Ka Tiyo Soga</h1>
            <h2>Sikhumbuzo Makandula</h2>
            <p>Imbali yaseMgwali naku Thuthura (The films focus on the history of Mgwali and Thuthura where Rev. Tiyo Soga built his first church in 1857 and later died at Thuthura)</p>

            <div class="col-12 text-center">
                <div id="video" class="icon">
                    <i class="fas fa-video"></i>
                </div>
                <div id="audio" class="icon">
                    <i class="fas fa-volume-up"></i>
                </div>
            </div>

            <hr>
            <p>Curator: Zodwa Tutani- Skeyi 
            <br>
            Film Director: Luthando Makandula
            <br>
            Tiyo Soga Community Museum, Mgwali village
            <br>
            Curator: Zodwa Skeyi- Tutani
        </p>
        </div>

        
    </div>
</div>

<div id="video-gallery" class="container my-5 d-none">
        <div class="row">


            <div class="col-12 text-center">
                <div id="video" class="icon">
                    <i class="fas fa-video"></i>
                </div>
                <div id="audio" class="icon">
                    <i class="fas fa-volume-up"></i>
                </div>
            </div>


            <div class="col-12 text-center">
                <h1>Video Gallery</h1>
            </div>
            <div class="col-12 text-center">

                <?php echo do_shortcode('[elfsight_vimeo_gallery id="4"]') ?>

            </div>
        </div>
</div>



<div id="audio-player" class="container my-5 d-none">
        <div class="row">

            <div class="col-12 text-center">
                <div id="video" class="icon">
                    <i class="fas fa-video"></i>
                </div>
                <div id="audio" class="icon">
                    <i class="fas fa-volume-up"></i>
                </div>
            </div>


            <div class="col-12 text-center">
                <h1>Audio Player</h1>
            </div>
        </div>

        <div class="container player my-5 p-5">
            <div class="row">
                <div class="col-12 col-md-6 text-center text-md-left">
                    <div class="current-track">
                        <h4 id="display-name">...</h4>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="controls text-center text-md-right">
                        <i class="fas fa-play"></i>
                        <i class="fas fa-pause"></i>
                        <i class="fas fa-fast-forward"></i>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12 track" data-target="0">
                    <p class="track-name">Ingoma kaNtsikana</p>
                </div>
                <div class="col-12 track" data-target="1">
                    <p class="track-name">Ben Tyamzashe</p>
                </div>
                <div class="col-12 track" data-target="2">
                    <p class="track-name">Isivuno sokuqala abaphehlelelwa nguSoga</p>
                </div>
                <div class="col-12 track" data-target="3">
                    <p class="track-name">Dr. Nomathamsanqa Tisani on Tiyo Soga </p>
                </div>
            </div>
        </div>
</div>



<div class="soundcloud">
    <iframe id="track1" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/927231427&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sikhumbuzo-makandula-403348799" title="Sikhumbuzo Makandula" target="_blank" style="color: #cccccc; text-decoration: none;">Sikhumbuzo Makandula</a> · <a href="https://soundcloud.com/sikhumbuzo-makandula-403348799/ingoma-kantsikana" title="Ingoma KaNtsikana" target="_blank" style="color: #cccccc; text-decoration: none;">Ingoma KaNtsikana</a></div>

    <iframe id="track2" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/927233062&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sikhumbuzo-makandula-403348799" title="Sikhumbuzo Makandula" target="_blank" style="color: #cccccc; text-decoration: none;">Sikhumbuzo Makandula</a> · <a href="https://soundcloud.com/sikhumbuzo-makandula-403348799/ben-tyamzashe-ceba-lomthi" title="Ben Tyamzashe - Ceba Lomthi" target="_blank" style="color: #cccccc; text-decoration: none;">Ben Tyamzashe - Ceba Lomthi</a></div>

    <iframe id="track3" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/927236278&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sikhumbuzo-makandula-403348799" title="Sikhumbuzo Makandula" target="_blank" style="color: #cccccc; text-decoration: none;">Sikhumbuzo Makandula</a> · <a href="https://soundcloud.com/sikhumbuzo-makandula-403348799/isivuno-sokuqala-abaphehlelelwa-ngusogamp3" title="Isivuno Sokuqala Abaphehlelelwa NguSoga.MP3" target="_blank" style="color: #cccccc; text-decoration: none;">Isivuno Sokuqala Abaphehlelelwa NguSoga.MP3</a></div>

    <iframe id="track4" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/930488635&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sikhumbuzo-makandula-403348799" title="Sikhumbuzo Makandula" target="_blank" style="color: #cccccc; text-decoration: none;">Sikhumbuzo Makandula</a> · <a href="https://soundcloud.com/sikhumbuzo-makandula-403348799/dr-nomathamsanqa-tisani-on-tiyo-soga" title="Dr. Nomathamsanqa Tisani on Tiyo Soga" target="_blank" style="color: #cccccc; text-decoration: none;">Dr. Nomathamsanqa Tisani on Tiyo Soga</a></div>

</div>


<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/sikhumbuzo/soundcloud.js"></script>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/sikhumbuzo/script.js"></script>