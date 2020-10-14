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

<div class="row">
    <h1><?php the_title() ?></h1>
    <p>
        <?php the_content() ?>
    </p>
</div>
	

<?php
get_footer();
?>