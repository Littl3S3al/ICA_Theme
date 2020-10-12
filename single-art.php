<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package ICA_online
 */

get_header();
?>

	<div class="container-fluid">
		<div class="row">
			<div class="col-12"><?php the_field('artist_name')?></div>
			<div class="col-12"><?php the_field('bio') ?></div>
		</div>
		
	</div>

<?php
get_footer();
?>