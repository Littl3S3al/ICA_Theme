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

<style>
    body{
        background: rgba(0, 0, 0, 0);
    }
    body::-webkit-scrollbar {
    width: 2px;
    }
    
    body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    }
</style>

<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <?php the_content(); ?>
        </div>
        <div class="col-12">
            <?php comments_template()?>
        </div>
    </div>
</div>

<?php
get_footer();
?>