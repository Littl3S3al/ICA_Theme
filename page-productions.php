<?php 
    // Template Name: All Productions

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

<div class="row padded-side" id="all-productions">
    <?php if( have_rows('theme', 7) ):

    $data = get_field('theme', 7);
    $data = array_reverse($data,true);
    $active = false;

    

        foreach($data as $row): ?>
            <?php if($row['now_showing'] === 'now' || $row['now_showing'] === 'archived'): ?>
                    <?php 
                        if($row['now_showing'] === 'now'){
                            $active = true;
                        } else {
                            $active = false;
                        }
                        $artists = $row['artist'];
                        foreach($artists as $artist) :
                    ?>

                        <div class="d-flex">
                            <div class="card d-flex production-card hvr-grow <?php echo $row['theme_id'] ?> <?php echo $active ?>">
                                <div class="card-body">

                                    <div class="row">
                                        <div class="col-12">
                                            <?php 
                                            $image = $artist['artwork_poster'];
                                            if( !empty( $image ) ): ?>

                                                <a href="<?php echo $artist['artist_link']['url'] ?>">
                                                    <img class="w-100" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                                                </a>
                                                
                                            <?php endif; ?>
                                        </div>

                                        <div class="col-12 text-left pt-2">
                                            <h1 class="small bold">
                                                <?php if($active){ echo 'NOW SHOWING'; } else { echo 'PREVIOUSLY'; }  ?>
                                                <br>
                                                THEME: <?php echo $row['theme_name'] ?>
                                            </h1>
                                            <h3><?php echo $artist['artist_name'] ?></h3>
                                            <h4><?php echo $artist['title_of_work'] ?></h4>
                                            <div class="text-justify"><p><?php echo $artist['teaser'] ?></p></div>
                                            <a href="<?php echo $artist['artist_link']['url'] ?>" class="mx-1 hvr-grow-shadow btn btn-dark"> ARTWORK</a>
                                            <a href="<?php echo $artist['bio_link']['url'] ?>" class="mx-1 hvr-grow-shadow btn btn-light"> BIO</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    <?php endforeach; ?>
                                            <?php endif; ?>
                
        <?php endforeach; ?>


    <?php endif; ?>
</div>

<?php 
    get_template_part('template-parts/content', 'footer');
    get_footer(); 
?>
