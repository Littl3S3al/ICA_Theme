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
<!-- logo -->
<div class="row" id="site-logo">
    <div class="col-4 col-md-1">
        <?php the_custom_logo(); ?>
    </div>
</div>




<div class="padded-side row mt-1  py-5 text-justify">
        <div class="w-100 mt-5">
            <h1>ARTIST STATMENT</h1> 
        </div> 
        <p>
            <?php the_field('statement') ?>
        </p>                 
</div>

<div class="padded-side row mt-5 bg-gray py-5 text-justify">
    <div class="col-12">
        <h1 class="small bold">THIS WORK IS BASED ON...</h1>
        <h1><?php the_field('work_title') ?></h1>
        <p><?php the_field('work_description') ?></p>
    </div>
    

    <?php if(get_field('gallery')) : ?>
        <div class="col-12 pt-5">
            <hr>
        </div>
        <div class="col-12 text-center" id="gallery">
            <h2>Photo Gallery</h2>
            <p><?php echo do_shortcode(get_field('gallery')) ?></p>
        </div>
    <?php endif; ?>
    

    <?php if(get_field('video_gallery')) : ?>
        <div class="col-12 pt-5">
            <hr>
        </div>
        <div class="col-12 text-center">
            <h2>Video Gallery</h2>
            <?php echo do_shortcode(get_field('video_gallery')) ?>
        </div>
    <?php endif; ?>
</div>

<div class="padded-side row title">
  
    <?php if(have_rows('artists')) :
        $data = get_field('artists'); 
        foreach($data as $row) : ?>
            
            <div class="row text-justify mb-5">

            <?php $headshot = false; ?>
                <?php if($row['headshot']) : ?>
                    <?php $headshot = true; ?>

                    <div class="col-12 col-md-4">
                        <!-- profile image -->

                        <?php $image = $row['headshot'];?>
                        <img class="w-100" src="<?php echo $image['url']; ?>" alt="<?php echo esc_attr($image['alt']); ?>" />

                        <!-- short video -->
                        <?php if($row['short_video']) : ?>
                            <iframe class="short-video" src="https://player.vimeo.com/video/<?php echo $row['short_video'] ?>?color=ffffff&byline=0"frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        <?php endif; ?>
                        
                    </div>

                <?php endif; ?>

                <div class="col-12 <?php if($headshot) {echo 'col-md-8';} ?>">
                    <h1><?php echo $row['artist_name'] ?></h1>
                    <p><?php echo $row['artist_bio'] ?></p>
                    <?php if($row['artist_links']) :?>
                        <?php $links = $row['artist_links']; 
                        
                        foreach($links as $link) : ?>
                            <?php $thisLink = $link['link']; ?>
                            <a href="<?php echo esc_url( $thisLink['url'] ); ?>" target="_blank" class="btn btn-danger">
                                <?php echo esc_html( $thisLink['title'] ); ?>
                            </a>
                        <?php endforeach; ?>
                    <?php endif; ?>

                </div>


            </div>

        <?php endforeach; endif; ?>

</div>



<div class="back-buttons">
    <button class="btn btn-dark" id="back">back</button>
    <a href="<?php the_field('artwork_link') ?>" class="btn btn-danger">view artwork</a>
</div>

<script>
    const backBtn = document.querySelector('#back');


    backBtn.addEventListener('click', () => {
        window.history.back();
    });

</script>


<?php
get_footer();
?>