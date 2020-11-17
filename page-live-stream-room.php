
<?php
 // Template Name: Live stream room
get_header();
?>

<!-- logo -->
<div class="row" id="site-logo">
    <div class="col-4 col-md-1">
        <?php the_custom_logo(); ?>
    </div>
</div>

<div class="row title">
	<div class="col-12 text-center">
		<h1><?php the_title(); ?></h1>
	</div>
</div>


<div class="container mb-5">
	<div class="row text d-flex justify-content-center align-items-top">
        <?php $loop = new WP_Query( array('post_type' => 'public_forms', 'orderby' => 'post_id', 'order' => 'DSC'));?>

            <?php while( $loop ->have_posts()) : $loop->the_post(); ?>
                <a class="webinar-link col-12 col-md-4 p-2" href="<?php the_permalink(the_ID()) ?>">

                        <div class="card videoLink h-100">
                            <div class="card-body videoLink text-center d-flex flex-column">
                                <h3 class="videoLink"><?php the_title() ?></h3>
                                <h3 class="small bold"><?php the_field('display_date') ?></h3>
                                <img src="<?php the_post_thumbnail_url(); ?>" alt="" class="w-100 videoLink mt-auto" data-link="<?php the_permalink(the_ID()) ?>" data-title="<?php the_title(); ?>">
                            </div>
                        </div>
                    
                </a>

        <?php 
            endwhile; 
            wp_reset_query();
        ?>
	</div>
</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


<?php
get_template_part('template-parts/content', 'footer');
get_footer();
?>
