<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/opiyo_okach/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


<?php 
function isMobileDevice() { 
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo 
|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i" 
, $_SERVER["HTTP_USER_AGENT"]); 
} 
if(isMobileDevice()){ 
    populateMobile();
} 
else { 
    populate();
} 
?> 


<?php  function populate() { ?>
<div id="overlay" class="container-fluid" style="background: url('<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/opiyo_okach/assets/background.jpg') center center no-repeat, black; bacground-size: cover;">
      <div class="row">
          <div class="col-12 col-md-6 offset-md-3 d-flex align-items-center justify-content-center">
              <div class="text-center">
                  <h1>instanceNow - People Time Place</h1>
                  <p>
                  The 'instanceNow - People Time Place' is an interactive network performance. The performers interact, exchange data, create movement and audio-visual content in real-time from remote locations using online network and social media.  
                  </p>
                  <h2 class="my-5">INSTRUCTIONS: </h2>
                  <p>
                        Explore the interactive network to discover the three track audio space with ambient sound artist KMRU, find more info and access the performances
                  </p>
                  <p>
                      Use your drag with your mouse (or finger on touch screen) to move around. Try zooming in and out. You can click on words to see what happens - or use the menu to the right. This artwork should be experienced with headphones.
                  </p>
              </div>
          </div>
          <div class="col-12 text-center my-5">
              <button id="startButton" class="btn btn-light btn-lg">Play</button>
          </div>
      </div>
</div>

    <div id="editor">
        <div id="view"><canvas id="c"></canvas></div>
        <div id="controls">
            <div>

                <h2>INTERACTIVE MENU</h2>
                <div>Drag this bar to adjust the menu</div>
                <div>⇐</div>

                <h4 class="mt-5">Live performance series</h4>

                <div class="accordion" id="mainNav">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            24/10/2020 - 19h15 <i class="fas fa-caret-down"></i>
                            </button>
                        </h5>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#mainNav">
                        <div class="card-body">
                            <ul>
                                <li><?php echo do_shortcode('[hurrytimer id="341"]') ?></li>
                                <li><button id="performance1" data-target="i" class="btn btn-link btn-link-view">view performance I</button></li>
                            </ul>
                        </div>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            27/10/2020 - 19h00 <i class="fas fa-caret-down"></i>
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#mainNav">
                        <div class="card-body">
                            <ul>
                                <li><?php echo do_shortcode('[hurrytimer id="342"]') ?></li>
                                <li><button id="performance2" data-target="ii" class="btn btn-link btn-link-view">view performance II</button></li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            30/10/2020 - 15h00 <i class="fas fa-caret-down"></i>
                            </button>
                        </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#mainNav">
                        <div class="card-body">
                            <ul>
                                <li><?php echo do_shortcode('[hurrytimer id="343"]') ?></li>
                                <li><button id="performance3" data-target="iii" class="btn btn-link btn-link-view">view performance III</button></li>
                            </ul>
                        </div>
                        </div>
                    </div>




                    <div class="card">
                        <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            03/11/2020 - 16h00 <i class="fas fa-caret-down"></i>
                            </button>
                        </h5>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#mainNav">
                        <div class="card-body">
                            <ul>
                                <li><?php echo do_shortcode('[hurrytimer id="344"]') ?></li>
                                <li><button id="performance4" data-target="iv" class="btn btn-link btn-link-view">view performance IV</button></li>
                            </ul>
                        </div>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-header" id="headingFive">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            06/11/2020 - 15h00 <i class="fas fa-caret-down"></i>
                            </button>
                        </h5>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#mainNav">
                        <div class="card-body">
                            <ul>
                                <li><?php echo do_shortcode('[hurrytimer id="345"]') ?></li>
                                <li><button id="performance4" data-target="v" class="btn btn-link btn-link-view">view performance V</button></li>
                            </ul>
                        </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>



<!-- begin import live data -->

    <?php if( have_rows('content', 354)) : 
        $data = get_field('content', 354);

        foreach($data as $row) : ?>

        <div class="popupWindow" id="<?php echo $row['label'] ?>">

            

            <div class="container">
                <div class="row">

                
                    <?php if($row['layout'] === '1_column') : ?>
                        <!-- add one column layout -->
                        <div class="col-12">
                            <?php echo $row['column_2'] ?>
                        </div>
                        

                    <?php elseif ($row['layout'] === '2_column') : ?>

                        <!-- add 2 column layout -->

                        <div class="col-12 col-md-6 col-placeholder">
                            <?php $data1 = $row['column_1'];
                                foreach( $data1 as $col1) :
                            ?>
                                    <!-- add image if present -->
                                    <?php if ( !empty ($col1['image'])) : ?>
                                        <img class="w-100" src="<?php echo esc_url($col1['image']['url']); ?>" alt="<?php echo esc_attr($col1['image']['alt']); ?>" />
                                    <?php  endif ?>

                                    <!-- add vimeo oembed if present -->
                                    <?php if ( !empty ($col1['youtube_archive'])) : ?>
                                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/<?php echo $col1['youtube_archive'] ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <?php  endif ?>

                                    <!-- add editor if present -->
                                    <?php if ( !empty ($col1['editor'])) : ?>
                                        <?php echo $col_1['editor'] ?>
                                    <?php  endif ?>

                            <?php endforeach ?>
                        </div>

                        <div class="col-12 col-md-6">
                            <?php echo $row['column_2'] ?>
                        </div>
                        

                    <?php endif; ?>
                </div>
                <div class="row close-row text-center">
                    <div class="col-12 text-right mt-3">
                        <button class="btn btn-light exit" data-parent="<?php echo $row['label'] ?>">exit</button>
                    </div>
                </div>
            </div>
    
        </div>
        

        <?php endforeach; ?>
    <?php endif; ?>



<!-- end import live content -->


    <script>
        const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/opiyo_okach/assets/';

        const labels = [
            <?php $data = get_field('content', 354); foreach($data as $row) : ?>
                '<?php echo $row['label'] ?>',
            <?php endforeach; ?>
        ];
        let words = [
            <?php $data = get_field('content', 354); foreach($data as $row) : ?>
                '<?php echo $row['word'] ?>',
            <?php endforeach; ?>
        ];
        
    </script>

    <script src="https://threejsfundamentals.org/threejs/../3rdparty/split.min.js"></script>
    
    <script>
                /* global Split */

        // This code is only related to handling the split.
        // Our three.js code has not changed
        Split(['#view', '#controls'], {  // eslint-disable-line new-cap
        sizes: [75, 25],
        minSize: 100,
        elementStyle: (dimension, size, gutterSize) => {
            return {
            'flex-basis': `calc(${size}% - 15px)`,
            };
        },
        gutterStyle: (dimension, gutterSize) => {
            return {
            'flex-basis': `15px`,
            };
        },
        });

    </script>

    <script>
        const launchDateii = new Date(2020, 9, 27, 19, 0, 0);
        const launchDateiii = new Date(2020, 9, 30, 15, 0, 0);
        const launchDateiv = new Date(2020, 10, 3, 16, 0, 0);
        const launchDatev = new Date(2020, 10, 11, 15, 0, 0);
        

        const dateChecker = (id, date) => {
                let launchi = setInterval(() => {
                const now = new Date();
                if(date.getTime() <= now.getTime()){
                    let placeholder = document.querySelector(`#${id} .col-placeholder`);
                    placeholder.innerHTML = '<div id="twitch-embed"></div>';
                    placeholder.style.height = '300px';
                    var options = {
                            width: '100%',
                            height: '300px',
                            channel: "gaaraprojects",
                            video: "twich-embed",
                            // only needed if your site is also embedded on embed.example.com and othersite.example.com 
                            parent: ["icaonline.net"]
                        };
                    new Twitch.Player("twitch-embed", options);
                    clearInterval(launchi);
                }
            }, 1000);
        }

    </script>

    <script src="https://player.twitch.tv/js/embed/v1.js"></script>

    <!-- Create a Twitch.Player object. This will render within the placeholder div -->
    <script type="text/javascript">
        
    </script>


    <script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/opiyo_okach/script.js" type="module"></script>


    <?php } ?>



<!-- populate mobile -->

    <?php function populateMobile() { ?>

        <div class="container">
            <div class="row py-5 px-3">
                <div class="col-12 opening">
                    <div>
                        <h1>instanceNow - People Time Place</h1>
                        <p>
                        The 'instanceNow - People Time Place' is an interactive network performance. The performers interact, exchange data, create movement and audio-visual content in real-time from remote locations using online network and social media.  
                        </p>
                    </div>
                </div>
                <?php for ($x = 0; $x <= 4; $x++)  : ?>
                        
                    
                    

    <?php if( have_rows('content', 354)) : 
        $row = get_field('content', 354)[$x]; ?>


        <div class="col-12 section" id="<?php echo $row['label'] ?>">

            



                
                    <?php if($row['layout'] === '1_column') : ?>
                        <!-- add one column layout -->
                        <div class="col-12">
                            <?php echo $row['column_2'] ?>
                        </div>
                        

                    <?php elseif ($row['layout'] === '2_column') : ?>

                        <!-- add 2 column layout -->

                        <div class="col-12 col-placeholder">
                            <?php $data1 = $row['column_1'];
                                foreach( $data1 as $col1) :
                            ?>
                                    <!-- add image if present -->
                                    <?php if ( !empty ($col1['image'])) : ?>
                                        <img class="w-100" src="<?php echo esc_url($col1['image']['url']); ?>" alt="<?php echo esc_attr($col1['image']['alt']); ?>" />
                                    <?php  endif ?>

                                    <!-- add vimeo oembed if present -->
                                    <?php if ( !empty ($col1['youtube_archive'])) : ?>
                                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/<?php echo $col1['youtube_archive'] ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <?php  endif ?>

                                    <!-- add editor if present -->
                                    <?php if ( !empty ($col1['editor'])) : ?>
                                        <?php echo $col_1['editor'] ?>
                                    <?php  endif ?>

                            <?php endforeach ?>
                        </div>

                        <div class="col-12">
                            <?php echo $row['column_2'] ?>
                        </div>
                        

                    <?php endif; ?>
                </div>
        

    <?php endif; ?>







                <?php endfor ?>
            </div>
        </div>



        <script src="https://player.twitch.tv/js/embed/v1.js"></script>
        
        <script>
        const launchDateii = new Date(2020, 9, 27, 19, 0, 0);
        const launchDateiii = new Date(2020, 9, 30, 15, 0, 0);
        const launchDateiv = new Date(2020, 10, 3, 16, 0, 0);
        const launchDatev = new Date(2020, 10, 11, 15, 0, 0);
        

        const dateChecker = (id, date) => {
                let launchi = setInterval(() => {
                const now = new Date();
                if(date.getTime() <= now.getTime()){
                    let placeholder = document.querySelector(`#${id} .col-placeholder`);
                    placeholder.innerHTML = '<div id="twitch-embed"></div>';
                    placeholder.style.height = '300px';
                    var options = {
                            width: '100%',
                            height: '300px',
                            channel: "gaaraprojects",
                            video: "twich-embed",
                            // only needed if your site is also embedded on embed.example.com and othersite.example.com 
                            parent: ["icaonline.net"]
                        };
                    new Twitch.Player("twitch-embed", options);
                    clearInterval(launchi);
                }
            }, 1000);
        }



    </script>

    <?php } ?>