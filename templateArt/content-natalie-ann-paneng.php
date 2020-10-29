


<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/natalie-ann-paneng/style.css">


<div id="three-js-container">
        <div id="loading" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/natalie-ann-paneng/assets/95.jpg') bottom left no-repeat; background-size: cover">
                <div class="card">
                    <div class="card-body">
                        <div class="top-bar">
                            L O A D I N G . . . 
                        </div>
                        <div class="progress"><div class="progressbar"></div></div>
                    </div>
                </div>
        </div>
        <canvas id="c"></canvas>
    </div>

    <div class="popup-window d-none">
        <div class="row d-flex justify-content-center align-items-center w-100 h-100">
            <div class="col-12 col-md-6">

                <div class="card">
                    <div class="card-body">
                        <div class="top-bar">
                            <span></span>
                            <div class="close" id="btn-close">&#215;</div>
                        </div>
                        <div class="content">
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="d-none">

    </div>

    <div id="overlay" class="container-fluid" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/natalie-ann-paneng/assets/95.jpg') bottom left no-repeat; background-size: cover">
        <div class="row">
            <div class="col-12 col-md-6 text-center">
                <div class="card">
                    <div class="card-body">
                        <div class="top-bar">
                            <span>Welcome to...</span> 
                            <div class="close" id="opening-close">&#215;</div>
                        </div>
                        <audio id="opening-audio" class="d-none" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/natalie-ann-paneng/assets/sounds/introduction.mp3" controls></audio>
                        <div class="openingLines">
                            <h1>Something Like CoStar</h1>
                            <p>Use your mouse to navigate the screen, click on objects to interact. Use headphones to get the whole sonic experience. </p>
                        </div>
                        <div id="btn-begin">
                            <img id="beachball" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/natalie-ann-paneng/assets/beachball.png" alt="beachball">
                        </div>
                        <div>
                            <h2>CREDITS:</h2>
                            <p>Wings of Encouragement Poem by Alicia Mersy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

    <!-- three.js script -->
    <script>
        const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/natalie-ann-paneng/assets/'
    </script>
    <script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/natalie-ann-paneng/script.js"></script>