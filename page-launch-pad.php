<?php
 // Template Name: Launch pad
get_header();
?>



<div class="coming-soon-video">
    <video autoplay loop muted>
        <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/coming-soon.mp4" type="video/mp4">
    </video>
    <div class="layer-dark"></div>
</div>

<!-- logo -->
<div class="row" id="site-logo">
    <div class="col-4 col-md-1">
        <?php the_custom_logo(); ?>
    </div>
</div>

<div class="row title text-white">
	<div class="col-12 text-center">
		<h1><?php the_title(); ?></h1>
	</div>
</div>

<div class="container text-white">
	<div class="row">
		<div class="col-12 text-center">
			<?php the_content(); ?>
        </div>
        <div class="col-12 text-center mb-5">
            <iframe class="ICA-video" src="<?php the_permalink(258) ?>" frameborder="0"></iframe>
        </div>
        <div class="col-12 text-center">
            <h2>The website will officially open in...</h2>
            <?php echo do_shortcode('[hurrytimer id="245"]') ?>
        </div>
	</div>
</div>


<script>
    const launchDate = new Date(2020, 9, 24, 19, 15, 0);
    

    setInterval(() => {
        const now = new Date();
        if(launchDate.getTime() <= now.getTime()){
            window.location.replace('<?php the_permalink(240) ?>');
        }
    }, 1000);

</script>

<?php
get_footer();
?>
