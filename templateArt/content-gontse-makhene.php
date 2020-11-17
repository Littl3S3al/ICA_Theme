
<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/gontse/style.css">


<!-- three.js container -->
<div id="three-js-container">
    <div id="c" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/gontse/assets/background.JPG') center center no-repeat; background-size: cover "></div>
</div>

<!-- prevents clicking -->
<div class="blocker"></div>


<!-- buttons to the left and right -->
<div class="buttons d-none">
    <button id="left" class="btn-light btn">
        <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/gontse/assets/left.svg" alt="left">
    </button>
    <button id="right" class="btn-light btn">
        <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/gontse/assets/right.svg" alt="right">
    </button>
</div>

<!-- map button -->
<div id="map" class="d-none">
<button id="map-btn" class="btn-danger btn" data-toggle="modal" data-target="#map-modal">
    <span>Check out "Location 1"</span>
    <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/gontse/assets/map.svg" alt="map">  
    </button>
</div>

<!-- begining  -->
<div id="overlay" class="container-fluid" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/gontse/assets/background.JPG') center center no-repeat; background-size: cover ">
    <div class="blackout">
    </div>

      <div class="row">
          <div class="col-12 col-md-6 text-justify">
              <h1>Dicing for Bread</h1>
              <p>expect to experience the dice from a viewpoint not yet explored visually and sonoricaly</p>

              <h2>Instructions:</h2>
              <p>Navigate this website by clicking on the arrow buttons at the bottom of the page (rotate left or right) and watch the corresponding videos - action reaction.</p>
              <p>There is also a button on the top right to view more information about the location in which the events depicted took place, click on this to take a look at the map and the image gallery.</p>

              <h2>Credits:</h2>
              <p>Gontse Makhene - musician and photographer <br> Malcom Jiyane - musician</p>
              <p><b>Special thanks to</b>
                <br>
                Palesa Sibiya - creative assistant and consultant 
                <br>
                Sicelo Mdladla ( Phinda Mzala) 
                <br>
                The Soweto dicing communities in Mdeni and Deipkloof </p>
              <button id="btn-begin" class="btn btn-danger">Click here to begin</button>
          </div>
      </div>
      
</div> 


<!-- Modal -->
<div class="modal fade" id="map-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Location Map and Gallery</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.17958871541424!2d27.941311058182993!3d-26.247645429795575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE0JzUxLjMiUyAyN8KwNTYnMjkuMiJF!5e0!3m2!1sen!2sza!4v1604491656385!5m2!1sen!2sza" width="100%" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        <div class="row">

          <div class="col-12 gallery1">
            <?php echo do_shortcode('[envira-gallery id="624"]') ?>
          </div>

          <div class="col-12 gallery2 d-none">
            <?php echo do_shortcode('[envira-gallery id="627"]') ?>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<script src="https://player.vimeo.com/api/player.js"></script>

<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/gontse/assets/'
</script>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/gontse/script.js" type="module"></script>

