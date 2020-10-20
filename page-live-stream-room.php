
<?php
 // Template Name: Live stream room
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


<div class="container mb-5">
	<div class="row text">
        <?php $loop = new WP_Query( array('post_type' => 'public_forms', 'orderby' => 'post_id', 'order' => 'DSC'));?>

            <?php while( $loop ->have_posts()) : $loop->the_post(); ?>

                <div class="mx-auto col-12 col-md-6 p-2">
                    <div class="card">
                        <div class="card-body videoLink text-center" data-link="<?php the_permalink(the_ID()) ?>" data-title="<?php the_title(); ?>">
                            <h2><?php the_title() ?></h2>
                            <img src="<?php the_post_thumbnail_url(); ?>" alt="" class="w-100 videoLink" data-link="<?php the_permalink(the_ID()) ?>" data-title="<?php the_title(); ?>">
                        </div>
                    </div>
                </div>

        <?php 
            endwhile; 
            wp_reset_query();
        ?>
	</div>
</div>

<div class="modal fade" id="videoFeed" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
    role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
            </div>
        </div>
    </div>
</div>
<div class="modal-backdrop fade show" id="backdrop" style="display: none;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


<script>

const modalBody = document.querySelector('.modal-body');
function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("videoFeed").style.display = "block"
    document.getElementById("videoFeed").className += "show"
}
function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("videoFeed").style.display = "none"
    document.getElementById("videoFeed").className += document.getElementById("videoFeed").className.replace("show", "")
}

// Get the modal
var modal = document.getElementById('videoFeed');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal()
    }
}

const videoLinks = document.querySelectorAll('.videoLink');
document.addEventListener('click', e => {
    if(e.target.classList.contains('videoLink')){
        openModal();
        const link = e.target.dataset.link;
        const body = modal.querySelector('.modal-body');
        const title = modal.querySelector('.modal-title');
        body.innerHTML = `<iframe class="ICA-video" src="${link}" frameborder="0"></iframe>`;
        title.innerText = e.target.dataset.title;
    }
})



</script>


<?php
get_template_part('template-parts/content', 'footer');
get_footer();
?>
