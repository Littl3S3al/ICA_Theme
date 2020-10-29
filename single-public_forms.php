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

<?php $slug = get_post_field( 'post_name', get_post() ); ?>

<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <?php if(get_field('type') === 'upcoming') : ?>
                <div class="d-none" id="twitch-embed" style="height: 300px"></div>

                <script src="https://player.twitch.tv/js/embed/v1.js"></script>

                <!-- Create a Twitch.Player object. This will render within the placeholder div -->
                <script type="text/javascript">
                    


                const twitchplaceholder = document.querySelector('#twitch-embed');
                const launchDate = new Date(<?php the_field('date') ?>);
                console.log(launchDate);
                const launchBtnSpace = document.querySelector('.launch-btn');
                const launchBtn = document.querySelector('.btn-launch');
                

                const waiting = setInterval(() => {
                    console.log('check')
                    const now = new Date();
                    if(launchDate.getTime() <= now.getTime()){
                        twitchplaceholder.classList.remove('d-none');


                            var options = {
                            width: '100%',
                            height: '300px',
                            channel: "icadotuct123",
                            video: "twich-embed"
                        };
                        var player = new Twitch.Player("twitch-embed", options);
                        player.setVolume(0.5);

                            clearInterval(waiting);
                        }
                }, 1000);
                </script>

            <?php  elseif (get_field('type') === 'archived') : ?>

                <?php the_field('vimeo') ?>

            <?php  endif; ?>
        </div>

        <div class="col-12">
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