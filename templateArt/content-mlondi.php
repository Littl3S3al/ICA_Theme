
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/style.css">



<!-- opening page -->

<div id="home" class="page flex-full container-fluid">
    <div class="row">
        <div class="col-12 mx-auto text-center">
            <h1>Good evening, Mlondi.</h1>
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

        <div id="video-gallery" class="col-12 content d-none">
            <div class="mx-auto">
                <?php echo do_shortcode('[elfsight_vimeo_gallery id="3"] '); ?>
            </div>
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


        <div class="col-12 mt-5" id="placeholder">

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

<div id="music-page" class="d-none page container-fluid">
    <div class="row">
        <div class="col-12">
            music
        </div>
    </div>
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

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/mlondi/script.js"></script>