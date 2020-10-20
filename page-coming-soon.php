<?php 
    // Template Name: Coming Soon

    get_header();

?>
<div class="coming-soon-video">
    <video autoplay loop muted>
        <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/coming-soon.mp4" type="video/mp4">
    </video>
    <div class="layer-dark"></div>
</div>

<div class="container coming-soon-container">
    <div class="row">
        <div class="col-12 text-center">
            <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/ica-logo-inverse.png" alt="">
            <h1>ICA Fellowship Online Website Launches Soon</h1>
            <h2>COMING SOON</h2>
        </div>
        <!-- timer -->
        <div class="col-12">
            <?php the_content(); ?>
        </div>

        <div class="col-12 text-center">
            <button class="btn btn-danger" data-toggle="modal" data-target="#programme-modal">View Programme</button>
        </div>

        <div class="col-12 pt-5">
            <?php echo do_shortcode('[Sassy_Social_Share]') ?>
        </div>

    </div>

</div>

<!-- Modal -->
<div class="modal fade" id="programme-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Launching 24 October 2020</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>
            This website will kick off with the launch programme of the fellowship below:
        </p>
        <table class="table">
            <tbody>
                <tr>
                    <th scope="row">17H00</th>
                    <td>Website is live</td>
                </tr>
                <tr>
                    <th scope="row">17H15</th>
                    <td>Welcome by Dean of Humanities, Associate Professor, Shose Kessi</td>
                </tr>
                <tr>
                    <th scope="row">17H30</th>
                    <td>Introduction, overview and opening remarks by Professor, Jay Pather</td>
                </tr>
                <tr>
                    <th scope="row">17H45</th>
                    <td>Introductions of the 34 Fellows</td>
                </tr>
                <tr>
                    <th scope="row">18H15</th>
                    <td>Keynote address by Gabi Ngcobo</td>
                </tr>
                <tr>
                    <th scope="row">18H45</th>
                    <td>Q&A</td>
                </tr>
                <tr>
                    <th scope="row">19H15</th>
                    <td>Access to works by Mmakhotso Lamola, Billy Langa, Rehane Abrahams including opening performance by Opiyo Okach</td>
                </tr>


            </tbody>
            </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<script>
    const launchDate = new Date(2020, 9, 24, 17, 0, 0);
    

    setInterval(() => {
        const now = new Date();
        if(launchDate.getTime() <= now.getTime()){
            window.location.replace('<?php the_permalink(240) ?>');
        }
    }, 1000);

</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<?php 
    get_footer();
?>