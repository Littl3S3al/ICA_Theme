<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ICA_online
 */

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

<div class="container">
	<div class="row">
		<div class="col-12 col-md-8 offset-md-2">
			<?php the_content(); ?>
		</div>
	</div>
</div>

<?php
get_template_part('template-parts/content', 'footer');
get_footer();
?>
