<?php 
    // Template Name: Contact

    get_header();

?>

<!-- logo -->
<div class="row" id="site-logo">
    <div class="col-4 col-md-1">
        <?php the_custom_logo(); ?>
    </div>
</div>

<div class="container-fluid">
    <div class="row padded-side">
        <div class="col-12 title text-center">
            <h1><?php the_title(); ?></h1>
        </div>
    </div>

    <div class="row">
        <div class="col-12 col-md-4 bg-dark text-white p-5 text-center">
            <div class="d-inline-block">
                <a href="https://www.facebook.com/www.ica.uct.ac.za/" target="_blank" class="social btn btn-light"><img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/facebook-f-brands.svg" alt="facebook"></a>
            </div>
            <div class="d-inline-block">
                <a href="https://www.instagram.com/instituteforcreativearts_uct/?hl=en" target="_blank" class="social btn btn-light"><img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/instagram-brands.svg" alt="instagram"></a>
            </div>
            <!-- <div class="d-inline-block">
                <a href="" class="social btn btn-light"><img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/twitter-brands.svg" alt="fb"></a>
            </div> -->
            <div class="d-inline-block">
                <a href="" class="social btn btn-light"><img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/youtube-brands.svg" alt="fb"></a>
            </div>
            <br><br>
            <b>Tel : </b><span>+27 21 650 7156</span>
            <br>
            <b>Email : </b><span>ica@uct.ac.za</span>
            <br><br>
            <a href="https://uct.us4.list-manage.com/subscribe?u=0979300ec8f43882d956358d4&id=166683bfc5" target="_blank" class="btn btn-light">
                SUBSCRIBE TO OUR MAILING LIST
            </a>
        </div>
        <div class="col-12 col-md-8 bg-light py-3 px-5">
            <?php echo do_shortcode('[contact-form-7 id="212" title="Contact form 1"]') ?>
        </div>
    </div>
</div>

<?php 

get_template_part('template-parts/content', 'footer-simple');
get_footer();

?>