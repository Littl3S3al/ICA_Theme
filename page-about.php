<?php 
    // Template Name: About

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

        <div class="col-12 my-3 d-flex justify-content-center">
            <?php echo do_shortcode(get_field('gallery')); ?>
        </div>
    </div>

    <div class="content-about">
        <?php if(have_rows('section')): ?>
            <?php foreach(get_field('section') as $row) : ?>
                <div class="row padded-side py-5">
                    <div class="col-12 text-center">
                        <h2><?php echo $row['heading']; ?></h2>
                    </div>
                    <div class="col-12 text-justify">
                        <p>
                            <?php echo $row['content']; ?>
                        </p>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>

</div>

<?php 
get_template_part('template-parts/content', 'footer');
get_footer(); ?>