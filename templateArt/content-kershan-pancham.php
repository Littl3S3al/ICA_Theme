<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet">

<!-- Font Awesome Icons -->
<link href="<?php bloginfo ('stylesheet_directory'); ?>/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">


<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kershan-pancham/style.css">

<div id="overlay" class="container-fluid page">
    <div class="row">
        <div class="col-12 col-md-4 text-left p-5">

            <div class="card w-100">
                <img class="card-img-top" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kershan-pancham/assets/zoom_saver.jpg" alt="Card image cap">
                <div class="card-body">
                    <div class="date-time text-center">
                        <h1>time</h1>
                        <h4>date</h4>
                    </div>
                    <p class="card-text py-5 text-center">You have one meeting</p>
                    <div class="text-center">
                        <button class="btn btn-primary" id="enter">
                            <i class="fas fa-plus-square"></i>
                        </button>
                        <p class="small pt-2">Join</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<div id="zoom-screen" class="container-fluid d-none">
    <div id="zoom-header">
        <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kershan-pancham/assets/zoom-logo.svg" alt="">
        <p class="small">Zoom Meeting</p>
    </div>
    <div class="row p-3">


        <div class="col-6 zoom-window zoom-1">

            <div class="iframe-holder" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/27410404?autoplay=0&loop=1&title=0&byline=0&portrait=0&autopause=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                
            <div class="cover">
                <img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kershan-pancham/assets/profile.jpg" alt="">
            </div>

            <div class="name-card">Name of Piece</div>

            <div class="controls w-100 text-center">
                <div class="z-icon mic"><i class="fas fa-microphone"></i></div>
                <div class="z-icon video"><i class="fas fa-video"></i></div>
                <div class="z-icon pin"><i class="fas fa-thumbtack"></i></div>
            </div>

            

        </div>
        <div class="col-6 zoom-window zoom-2">

            <div class="iframe-holder" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/55894439?autoplay=0&loop=1&title=0&byline=0&portrait=0&autopause=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                
            <div class="cover">
                <img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kershan-pancham/assets/profile.jpg" alt="">
            </div>

            <div class="name-card">Name of Piece</div>

            <div class="controls w-100 text-center">
                <div class="z-icon mic"><i class="fas fa-microphone"></i></div>
                <div class="z-icon video"><i class="fas fa-video"></i></div>
                <div class="z-icon pin"><i class="fas fa-thumbtack"></i></div>
            </div>

            

        </div>
        <div class="col-6 zoom-window zoom-3">

            <div class="iframe-holder" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/224747165?autoplay=0&loop=1&title=0&byline=0&portrait=0&autopause=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                
            <div class="cover">
                <img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kershan-pancham/assets/profile.jpg" alt="">
            </div>

            <div class="name-card">Name of Piece</div>

            <div class="controls w-100 text-center">
                <div class="z-icon mic"><i class="fas fa-microphone"></i></div>
                <div class="z-icon video"><i class="fas fa-video"></i></div>
                <div class="z-icon pin"><i class="fas fa-thumbtack"></i></div>
            </div>

            

        </div>
        <div class="col-6 zoom-window zoom-4">

            <div class="iframe-holder" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/2818002?autoplay=0&loop=1&title=0&byline=0&portrait=0&autopause=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                
            <div class="cover">
                <img class="w-50" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kershan-pancham/assets/profile.jpg" alt="">   
            </div>

            <div class="name-card">Name of Piece</div>

            <div class="controls w-100 text-center">
                <div class="z-icon mic"><i class="fas fa-microphone"></i></div>
                <div class="z-icon video"><i class="fas fa-video"></i></div>
                <div class="z-icon pin"><i class="fas fa-thumbtack"></i></div>
            </div>

            

        </div>
    </div>
</div>


<!-- define assets -->
<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/heidi-lu/assets/';
    let weight;
</script>



<!-- vimeo api -->
<script src="https://player.vimeo.com/api/player.js"></script>

<!-- page handling -->
<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kershan-pancham/script.js"></script>


