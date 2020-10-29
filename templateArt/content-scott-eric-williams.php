<?php get_header(); ?>

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/scott-eric-williams/style.css">


<div id="three-js-container">
        <div id="loading">
            <div class="text-center">
                <h6>Loading . . .</h6>
                <div class="progress"><div class="progressbar"></div></div>
            </div>
        </div>
        <canvas id="c"></canvas>
        
    </div>

    <div class="popup-window">
        <div class="placeholder">
            <div class="text-right">
                <button id="btn-close" class="btn btn-danger">
                    close
                </button>
            </div>
            <div class="content">
                
            </div>
            
        </div>
        
    </div>


    <div id="overlay" class="container-fluid" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/scott-eric-williams/assets/background.jpg') center bottom no-repeat; background-size: cover;">
        <div class="row">
            <div class="col-12 col-md-6 text-center">
                <h1>kɑɹˈtɑɡɹəfi</h1>
                <p>
                    kɑɹˈtɑɡɹəfi merges dance, drone photography, digital art and wheatpaste. Viewers may engage with the performance imagery online or visit the geolocations marked on the map to engage with our expressions of reconfigured connectedness as a laboratory for mapping new ways of being.
                </p>
                <p>
                    kɑɹˈtɑɡɹəfi responds to our collective fear of nearness, by keeping at a safe distance. In it's invitation to engage online as well as the tangible world it considers how audiences are taxed in the attention economy
                </p>
                <h2>Instructions:</h2>
                <p>
                    Navigate through the abstract space to explore and find clickable objects. Navigate through zooming/scrolling. Move around by clicking and dragging with your mouse/screen.
                </p>
                <button id="btn-begin" class="btn btn-light">begin</button>
            </div>
        </div>
    </div>

    <!-- bootstrap js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

    <!-- script for assets -->
    <script>
        const gridTexture = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/scott-eric-williams/assets/gridWhite.png';
        const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/scott-eric-williams/assets/'
    </script>

    <!-- three.js script -->
    <script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/scott-eric-williams/script.js" type="module"></script>



<?php get_footer(); ?>