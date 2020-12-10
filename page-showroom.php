<?php 
    // Template Name: Showroom

    get_header();

?>

<!-- logo -->
<div class="row" id="site-logo">
    <div class="col-4 col-md-1">
        <?php the_custom_logo(); ?>
    </div>
</div>

<div class="row" id="white-hole" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/white_hole.svg') center center no-repeat; background-size: cover">   
</div>

<!-- appature svg -->
<div class="row" id="appature">
        <svg id="appature-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 813 813" style="enable-background:new 0 0 813 813;" xml:space="preserve">
            <style type="text/css">
                .st0{fill:none;}
                .st1{stroke:#FFFFFF;stroke-width:3;stroke-miterlimit:10;}
                .st2{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
            </style>
            <g id="Layer_2-2">
                <circle class="st0" cx="406.5" cy="406.5" r="394.5"/>
                <path class="st1" d="M12,406.5c0,32.1,3.8,63.4,11.1,93.3h332.4L135.9,119.4C59.6,191.4,12,293.4,12,406.5z"/>
                <path class="st1" d="M304.9,787.8l165.7-287H23.3C57.6,640.5,166.3,751,304.9,787.8z"/>
                <path class="st1" d="M688,681.4c69.9-71.2,113-168.7,113-276.4c0-34.7-4.5-68.3-12.9-100.3H470.5L688,681.4z"/>
                <circle class="st2" cx="406.5" cy="406.5" r="405"/>
                <path class="st1" d="M526,402.5L304.5,786.2c32.5,8.7,66.7,13.3,102,13.3c109.9,0,209.3-45,280.9-117.5L526,402.5z"/>
                <path class="st1" d="M787.9,305.2C752.6,172.2,649.7,66.8,518.1,28l-160,277.2H787.9z"/>
                <path class="st1" d="M406.5,12c-104.4,0-199.4,40.6-270,106.9L300,402L516.2,27.5C481.4,17.4,444.6,12,406.5,12z"/>
            </g>
        </svg>
</div>

<!-- enter button -->
<div class="row" id="enter-btn">
    <button class="btn btn-enter">
        ENTER
    </button>
</div>

<!-- grid background -->
<div class="row" id="background">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921.48 1080"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;opacity:0.51;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" x="1.24" y="0.5" width="1919" height="1079"/><path d="M1919.74,1V1079H1.74V1h1918m1-1H.74V1080h1920V0Z"/><line class="cls-2" x1="931.24" y1="568.5" x2="0.24" y2="1079.5"/><rect class="cls-2" x="931.74" y="511" width="58" height="58"/><line class="cls-2" x1="989.24" y1="510.5" x2="1921.24" y2="0.5"/><line class="cls-2" x1="990.24" y1="569.5" x2="1920.24" y2="1079.5"/><line class="cls-2" x1="931.24" y1="511.5" x2="0.24" y2="0.5"/><line class="cls-2" x1="989.74" y1="540" x2="1920.74" y2="540"/><line class="cls-2" x1="960.74" y1="511" x2="960.74"/><line class="cls-2" x1="931.74" y1="540" x2="0.18" y2="540"/><line class="cls-2" x1="960.74" y1="568.71" x2="960.74" y2="1080"/></g></g></svg>
</div>

<!-- scrolling instructions -->
<div class="col-12 d-flex justify-content-center instructions">
    <div class="content">
        scroll up and down to travel
    </div>
</div>


<div class="viewport d-none">
  <div class="scene3D-container">
    <div class="scene3D">
        <?php

        // Check rows exists.
        if( have_rows('theme') ):

            $data = get_field('theme');
            $data = array_reverse($data,true);

            foreach($data as $row): ?>
                <?php if($row['now_showing'] === 'now') :?>
                    <div class="theme element <?php echo $row['theme_id'] ?>">
                        <div>
                            <h1>THEME: <?php echo $row['theme_name'] ?></h1> 
                        </div>
                    </div>

                    <?php 
                        $artists = $row['artist'];
                        foreach($artists as $artist) :
                    ?>
                        <div class="element artist <?php echo $row['theme_id'] ?>">
                            <div class="row">
                                <div class="d-none d-md-block col-md-6">
                                <?php 
                                    $image = $artist['artwork_poster'];
                                    if( !empty( $image ) ): ?>

                                        <a href="<?php echo get_permalink( $artist['artist_link']->ID ) ?>">
                                            <img class="w-100" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                                        </a>
                                        
                                    <?php endif; ?>
                                </div>
                                <div class="col-md-6 text-left">
                                    <h1><?php echo $artist['artist_name'] ?></h1>
                                    <h2><?php echo $artist['title_of_work'] ?></h2>
                                    <div class="text-justify"><p><?php echo $artist['teaser'] ?></p></div>
                                    <a href="<?php echo $artist['artist_link']['url'] ?>" class="btn btn-dark hvr-grow-shadow">VIEW</a>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>

                <?php endif; ?>
            <?php endforeach; ?>


            <?php foreach($data as $row): ?>
                <?php if($row['now_showing'] === 'archived') :?>


                    <div class="theme element <?php echo $row['theme_id'] ?>">
                        <div>
                            <h1>THEME: <?php echo $row['theme_name'] ?></h1> 
                        </div>
                    </div>

                    <?php 
                        $artists = $row['artist'];
                        foreach($artists as $artist) :
                    ?>
                        <div class="element artist <?php echo $row['theme_id'] ?>">
                            <div class="row">
                                <div class="d-none d-md-block col-md-6">
                                <?php 
                                    $image = $artist['artwork_poster'];
                                    if( !empty( $image ) ): ?>

                                        <a href="<?php echo get_permalink( $artist['artist_link']->ID ) ?>">
                                            <img class="w-100" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                                        </a>
                                        
                                    <?php endif; ?>
                                </div>
                                <div class="col-md-6 text-left">
                                    <h1><?php echo $artist['artist_name'] ?></h1>
                                    <h2><?php echo $artist['title_of_work'] ?></h2>
                                    <div class="text-justify"><p><?php echo $artist['teaser'] ?></p></div>
                                    <a href="<?php echo $artist['artist_link']['url'] ?>" class="btn btn-dark hvr-grow-shadow">VIEW</a>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>

                <?php endif; ?>
            <?php endforeach; ?>

            
        <?php endif;?>
    </div>
  </div>
</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<script>
    const appatureRow = document.querySelector('#appature');
    const appature = document.querySelector('#appature-svg');
    const enterBtn = document.querySelector('.btn-enter');
    const enterDiv = document.querySelector('#enter-btn');
    const whiteHole = document.querySelector('#white-hole');
    const viewport = document.querySelector('.viewport');


    enterBtn.addEventListener('click', () => {
        appature.classList.add('zoomOut');
        whiteHole.classList.add('straight-zoom');
        enterDiv.style.opacity = 0;
        viewport.classList.remove('d-none');

        setTimeout(() => {
            appatureRow.classList.add('d-none');
            appature.classList.add('d-none');
            whiteHole.classList.add('d-none');
            enterDiv.classList.add('d-none');
        }, 1500);
    })

</script>


<script src="<?php bloginfo ('stylesheet_directory'); ?>/js/z-index.js"></script>
<?php 
    get_footer();
?>