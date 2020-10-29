<?php
 // Template Name: Launch pad
get_header();
?>



<div class="coming-soon-video">
    <video autoplay loop muted>
        <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/coming-soon.mp4" type="video/mp4">
    </video>
    <div class="layer-dark"></div>
</div>

<!-- logo -->
<div class="row" id="site-logo">
    <div class="col-4 col-md-1">
        <?php the_custom_logo(); ?>
    </div>
</div>

<div class="row title text-white">
	<div class="col-12 text-center">
		<h1><?php the_title(); ?></h1>
	</div>
</div>

<div class="container text-white">
	<div class="row">
		<div class="col-12 text-center">
			<?php the_content(); ?>
        </div>
        <div class="col-12 text-center mb-5" style="height: 300px">
            <div id="twitch-embed"></div>
        </div>
        <div class="col-12 text-center my-5 launch-btn">
            <a class="btn btn-launch btn-lg btn-danger" href="https://icaonline.net/home/">Vist site! Now open</a>
        </div>
        <di class="col-12">
            <?php comments_template()?>
        </di>
        <div class="col-12 text-center">
            <h2>The ICA fellowship will officially open in...</h2>
            <?php echo do_shortcode('[hurrytimer id="245"]') ?>
        </div>
	</div>
</div>


<script>
    const launchDate = new Date(2020, 9, 24, 17, 51, 0);
    const launchBtnSpace = document.querySelector('.launch-btn');
    const launchBtn = document.querySelector('.btn-launch');
    

    const waiting = setInterval(() => {
        console.log('check')
        const now = new Date();
        if(launchDate.getTime() <= now.getTime()){
            launchBtnSpace.style.height = '50px';
            launchBtn.classList.add('bounce-btn');
        }
    }, 1000);

</script>

<script src="https://player.twitch.tv/js/embed/v1.js"></script>

<!-- Create a Twitch.Player object. This will render within the placeholder div -->
<script type="text/javascript">
    var options = {
        width: '100%',
        height: '300px',
        channel: "icadotuct123",
        video: "twich-embed",
        // only needed if your site is also embedded on embed.example.com and othersite.example.com 
        parent: ["icaonline.net"]
    };
  new Twitch.Player("twitch-embed", options);
</script>

<?php
get_footer();
?>
