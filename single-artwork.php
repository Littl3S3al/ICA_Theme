<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package ICA_online
 */

get_header();

$slug = get_post_field( 'post_name', get_post() );
get_template_part('templateArt/content', $slug);


?>

<div id="artwork-buttons">
    <div id="set-one">
        <a href="<?php echo get_field('about_artwork')['url'] ?>" class="btn btn-dark" id="about">about</a>
    </div>
    <div id="share-icons"><?php echo do_shortcode('[Sassy_Social_Share]') ?></div>
    <div id="set-two">
        <button class="btn btn-dark" id="help" data-toggle="modal" data-target="#help-modal">help</button>
        <br>
        <button class="btn btn-dark" id="fullscreen">fullscreen</button>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="help-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Instructions to navigate this website</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <?php the_field('how_to') ?>

         
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<script>
    let begin = false;
    const aboutBtn = document.querySelector('#about');
    const shareIcons = document.querySelector('#share-icons');
    const helpBtn = document.querySelector('#help');
    const feedbackBtn = document.querySelector("body > div.sfm-rollback.sfm-color1.sfm-theme-none.sfm-label-visible.sfm-label-metro");
    let artworkButtons;
    const fullscreenBtn = document.querySelector('#fullscreen');
    let fullscreen = false;

    const goFull = (e) => {
      artworkButtons = [
          document.querySelector('#set-one'),
          document.querySelector('#share-icons'),
          document.querySelector('#help'),
          document.querySelector("#surveyContent"),
          document.querySelector("body > div.sfm-rollback.sfm-color1.sfm-theme-none.sfm-label-visible.sfm-label-metro")
      ]

        artworkButtons.forEach(btn => {
            btn.classList.toggle('d-none');
        });
        fullscreen = !fullscreen;
        if(fullscreen){
            fullscreenBtn.innerText = 'exit'
        } else {
            fullscreenBtn.innerText = 'fullscreen'
        }
    }

    fullscreenBtn.addEventListener('click', goFull);

    window.addEventListener('touchstart', e => {
        if(begin){
          e.target.click();
        }
    })





</script>
<?php
get_footer();
?>