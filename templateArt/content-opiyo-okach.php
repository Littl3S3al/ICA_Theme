<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/opiyo_okach/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

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
                            24/10/2020 - 19h00 <i class="fas fa-caret-down"></i>
                            </button>
                        </h5>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#mainNav">
                        <div class="card-body">
                            <ul>
                                <li><?php echo do_shortcode('[hurrytimer id="341"]') ?></li>
                                <li><button id="performance1" class="btn btn-link btn-link-view">view performance I</button></li>
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
                                <li><button id="performance2" class="btn btn-link btn-link-view">view performance II</button></li>
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
                                <li><button id="performance3" class="btn btn-link btn-link-view">view performance III</button></li>
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
                                <li><button id="performance4" class="btn btn-link btn-link-view">view performance IV</button></li>
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
                                <li><button id="performance4" class="btn btn-link btn-link-view">view performance V</button></li>
                            </ul>
                        </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>

    <div class="popupWindow">
      <div class="container">
        <div class="row">
            <div class="col-12 col-md-7" id="iframe">
                
            </div>
            <div class="col-12 col-md-5 pl-md-5" id="text-col">
                    
            </div>
        </div>
      </div>
      <button id="close" class="btn btn-light">close</button>
  </div>

    <script>
        const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/opiyo_okach/assets/';
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
            'flex-basis': `calc(${size}% - 5px)`,
            };
        },
        gutterStyle: (dimension, gutterSize) => {
            return {
            'flex-basis': `5px`,
            };
        },
        });

    </script>


    <script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/opiyo_okach/script.js" type="module"></script>


    