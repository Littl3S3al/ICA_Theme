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
                <div class="map-info">
                    <h1>Engage with the interactive map</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam, molestiae odit explicabo consequatur est eius vero blanditiis quae qui soluta exercitationem error a repudiandae reiciendis quod eos. Odit, rerum.</p>
                    <a href="https://www.google.com/maps/d/u/0/edit?mid=185hgHvJrVUHgfIali6XiCCPpILO3pvKf&ll=-33.92912587918429%2C18.451622350000026&z=17" target="_blank" class="btn btn-danger"></a>
                </div>
            </div>
            
        </div>
        
    </div>


    <div id="overlay" class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <h1>Scott Eric Williams</h1>
                <p>You are on a journey. Look around by draging your mouse, click on objects to see what happens</p>
                <button id="btn-begin" class="btn btn-primary">start</button>
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