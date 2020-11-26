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


<?php $slug = get_post_field( 'post_name', get_post() ); ?>

<div class="container-fluid">
    <div class="row">
        <div class="col-12 text-center mt-5 padded-side"">
            <h1><?php the_title(); ?></h1>
        </div>
        <div class="padded-side">
            <?php the_content(); ?>
        </div>

        <div class="col-12 p-52">
            <hr>
        </div>


        <!-- live embed -->
        <?php if(get_field('type') === 'upcoming') : ?>
            <div class="col-12 col-md-9 twitch-placeholder" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/coming_soon.jpg ') repeat; background-size: 300px;">
            
                <div id="twitch-embed" class="d-none" style="height: 70vh"></div>

                

            </div>
            <div class="col-12 col-md-3 px-5 pt-3 pt-md-0">
                <h3>The Question Box:</h3>
                <p>Please send questions as you think them. The panel will answer during the course of the session</p>
                <?php echo do_shortcode('[contact-form-7 id="671" title="Question Box"]') ?>
            </div>

            <?php  elseif (get_field('type') === 'archived') : ?>

                <div class="col-12 padded-side text-center">
                    <div style="padding:63.26% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/<?php the_field('vimeo') ?>?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                    
                </div>

            <?php  endif; ?>

            <div class="col-12 p-5"></div>
        
    </div>
</div>


<div class="back-buttons">
    <button class="btn btn-dark" id="back">back</button>
</div>

<script src="https://player.twitch.tv/js/embed/v1.js"></script>

<script>
    const backBtn = document.querySelector('#back');


    backBtn.addEventListener('click', () => {
        window.history.back();
    });
    

const liveOnlyContent = document.querySelector('.live-activate');
const twitchplaceholder = document.querySelector('#twitch-embed');
const launchDate = new Date(<?php the_field('date') ?>);
console.log(launchDate);
const launchBtnSpace = document.querySelector('.launch-btn');
const launchBtn = document.querySelector('.btn-launch');


const waiting = setInterval(() => {
    // console.log('check')
    const now = new Date();
    if(launchDate.getTime() <= now.getTime()){
        twitchplaceholder.classList.remove('d-none');


            var options = {
            width: '100%',
            height: '100%',
            channel: "icadotuct123",
            video: "twich-embed"
        };
        var player = new Twitch.Player("twitch-embed", options);
        player.setVolume(0.5);

            clearInterval(waiting);
        }
}, 1000);
</script>


<?php
get_template_part('template-parts/content', 'footer');
get_footer();
?>