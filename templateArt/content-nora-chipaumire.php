<!-- google fonts -->
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">


<!-- style sheet -->
<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/nora-chipaumire/style.css">

<!-- Font Awesome Icons -->
<link href="<?php bloginfo ('stylesheet_directory'); ?>/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">


<!-- overlay - beginning screen -->
<div id="overlay" class="container-fluid page">
    <div class="row">
        <div class="col-12 col-md-6 text-center">
            <h1>negra| a pseudo ( cross out ) fluxus score + visual essay “woman is cow “ | a salute to Victoria Santa Cruz and all black African females whose wokeness is yet to come !</h1>
            <p>
                Digital matter on the question of black African woman ‘s lesser than life 
            </p>
            <h2 class="mt-5">INSTRUCTIONS:</h2>
            <p>This piece requires use of audio and is best experienced with headphones</p>
            <button id="btn-begin" class="btn btn-warning">start</button>
        </div>
    </div>
</div>


<!-- message board -->
<div id="message-board" class="container-fluid page d-none">
    <div class="text-holder">
    <div id="screen-text" class="moving-text">suck teeth | I suspect that i fall into the smart ugly camp Smart ugly back African camp | When did you begin to suspect this | Not sure , but I was fairly young I know .. | Too dark , too local , not exotic enough camp Too black too angry , too country || Side EYE | Middle finger | Suck teeth | Hands on hips | Walk around | Clap hands | Slash throat gesture SI ! | Feet | Feet | Be Harriet | Be Winnie | Be Zora  | Side EYE | Middle finger | Suck teeth | Hands on hips | Walk around | Clap hands | Slash throat gesture SI ! | Feet | Feet | Be Harriet | Be Winnie | Be Zora  | 	Shoulders 21 | Waist -38 | Hips-39 | Thigh - 21 | Calf - 14 | Armhole- 18 | Back -22 | Waist to ankle - 41 | Distance to me ——unmeasurable … | Dances | shaking || blue eyes are not mine ... Green eyes are not mine | Red eyes are from crying | Brown eyes i was born with .... | blue eyes are not mine ... Green eyes are not mine | Red eyes are from crying | Brown eyes i was born with .... | A long long time ago .... </div>
    </div>
</div>

<!-- mobile version tabs -->
<div class="tabs d-lg-none">
    <div>
        <img id="view-travel" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/nora-chipaumire/assets/tabs/travel-tab.png" alt="">
        <img id="view-map" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/nora-chipaumire/assets/tabs/map-tab.png" alt="">
        <img id="view-events" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/nora-chipaumire/assets/tabs/events-tab.png" alt="">
    </div>
</div>


<!-- travel desk -->

<div class="page container-fluid desk">
    <div class="row">

        <!-- travel options -->
        <div class="col-12 col-lg-4 options p-5">

            <!-- row one: your current destination -->
            <div class="current-location mt-5 d-flex justify-content-left align-items-center">
                <div class="large-icon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="current d-inline-block">
                    <h1 id="abreviation">CPD</h1>
                    <h2>Check Point Desk</h2>
                </div>
            </div>

            <!-- row two: itinerary -->
            <div class="itinerary mt-5 d-none">
                <div class="heading">
                    <h3>itinerary</h3>
                </div>
                <div class="avail-options">
                    <p>There are no available events in this location</p>

                </div>
            </div>

            <!-- row three: destinations -->
            <div class="destinations mt-5">
                <div class="heading">
                    <h3>Possible Destinations</h3>
                </div>
                <div class="avail-destinations">
                    
                </div>
            </div>

            <!-- row four: modes of transport -->
            <div class="modes my-5">
                <div class="heading">
                    <h3>Modes of transport to: <span>destination</span></h3>
                </div>
                <div class="avail-options">
                    

                </div>
            </div>


            <!-- row five: confirmatation-->
            <div class="confirm-box mt-5">
                <div class="heading">
                    <h3>Confirm your ticket</h3>
                </div>
                <div class="confirmation">
                    <ul>
                        <li>Destination: <span id="final-destination" class="text-warning">...</span></li>
                        <li>Mode of travel: <span id="mode" class="text-warning">...</span></li>
                    </ul>
                    <button id="begin-travel" class="btn btn-warning">Purchase ticket</button>
                </div>
            </div>

            <!-- row six : button to view itinery or map -->
            <div class="mt-5 text-center d-none d-lg-block">
                <button class="btn btn-light" id="switch">
                    View events <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>

        <!-- map -->
        <div class="col-12 col-lg-8 map justify-content-left align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1110.32 732.09"><defs><style>.air,.road,.bicycle,.road3,.train,.foot{fill:none;stroke-width:10px;}.air{stroke:#2aaebc;}.air,.road,.bicycle,.road3,.marker,.train,.foot{stroke-miterlimit:10;}.road{stroke:#ed1c24;}.train{stroke:#f7931e;}.foot{stroke:#39b54a;}.text_reg{font-size:26.45px;}.zm_text,.hr_mt_text,.cpd_text,.key_text,.marker,.text_reg{fill:#fff;}.zm_text,.hr_mt_text,.key_text,.text_reg{font-family:Oswald-Light, Oswald;font-weight:300;}.cls-6{letter-spacing:-0.01em;}.cls-7{letter-spacing:0em;}.cls-8{letter-spacing:0em;}.cls-9{letter-spacing:0em;}.air0{letter-spacing:0em;}.air1{letter-spacing:0em;}.zm_text{font-size:26.45px;}.hr_mt_text{font-size:27.27px;}.air4{letter-spacing:0em;}.air5{letter-spacing:0em;}.air6{letter-spacing:0em;}.air7{letter-spacing:0em;}.cpd_text{font-size:30.58px;font-family:Oswald-Bold, Oswald;font-weight:700;}.air9{letter-spacing:0em;}.road0{letter-spacing:0em;}.key_text{font-size:19.83px;}.bicycle{stroke:#f7619e;}.road3{stroke:#ff7bac;}.marker{stroke:#000;stroke-width:4px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">

            <line class="air CPD-NW" x1="668.1" y1="377.22" x2="1005.88" y2="715.01"/>
            <path class="air CPD-DK" d="M219.73,21h95a10,10,0,0,1,10,10V144.06c0,5.5,3.18,13.19,7.07,17.08L399,228.4c3.88,3.89,11.57,7.07,17.07,7.07H516.34c5.5,0,13.19,3.18,17.07,7.07L636.67,345.8"/>
            <path class="road CPD-CT" d="M661.05,363.15l-80.92,90.08c-3.67,4.1-9.92,10.57-13.88,14.39L485.6,545.46c-4,3.82-10.37,10.13-14.26,14L393.7,637.12"/>
            <line class="train CPD-SW" x1="678.41" y1="377.2" x2="808.98" y2="377.2"/>
            <line class="road CPD-SW" x1="668.49" y1="360.67" x2="804.03" y2="360.67"/>
            <line class="road HR-MT" x1="875.07" y1="144.56" x2="957.74" y2="144.56"/>
            <line class="road CPD-HR" x1="656.92" y1="350.76" x2="853.41" y2="154.26"/>
            <line class="air CPD-HR" x1="644.52" y1="338.36" x2="851.96" y2="130.92"/>
            <line  class="air CPD-CT" x1="642.45" y2="618.82" x2="384.2" y1="360.56"/>
            <line class="foot CPD-ZM" x1="632.13" y1="330.1" x2="632.13" y2="251.58"/>
            <path class="bicycle CT-NM" d="M473.32,360.67v37.59a10,10,0,0,1-10,10h-8a10,10,0,0,0-10,10V479.6a10,10,0,0,1-10,10H347.7a10,10,0,0,0-10,10v21.23a10,10,0,0,0,10,10h20.71a10,10,0,0,1,10,10v69.73"/>
            <line class="road CPD-NM" x1="632.13" y1="363.15" x2="468.49" y2="360.67"/>

            <!-- KEY -->
            <line class="bicycle" y1="603.65" x2="67.77" y2="603.65"/>
            <line class="air CPD-NM" x1="632.13" y1="345.8" x2="468.49" y2="345.8"/>
            <line class="air" y1="478.03" x2="67.77" y2="478.03"/>
            <line class="foot" y1="572.24" x2="67.77" y2="572.24"/>
            <line class="train" y1="540.84" x2="67.77" y2="540.84"/>
            <line class="road" y1="509.43" x2="67.77" y2="509.43"/>

            <text class="text_reg" transform="translate(416.28 645.45)">Cape <tspan class="cls-6" x="50.56" y="0">T</tspan><tspan class="cls-7" x="61.22" y="0">o</tspan><tspan x="71.67" y="0">wn</tspan></text>
            <text class="text_reg" transform="translate(336.54 321.4)">Namibia</text><text class="text_reg" transform="translate(837.39 377.22)">S<tspan class="cls-8" x="12.17" y="0">o</tspan><tspan class="cls-9" x="22.61" y="0">weto</tspan></text>
            <text class="text_reg" transform="translate(1031.36 723.5)">N<tspan class="cls-8" x="13.75" y="0">o</tspan><tspan x="24.2" y="0">whe</tspan><tspan class="air0" x="60.72" y="0">r</tspan><tspan class="air1" x="68.52" y="0">e</tspan></text><text class="text_reg" transform="translate(130.54 30.12)">Dakar</text>
            <text class="zm_text" transform="translate(645 229.04) rotate(-45)">Zambia</text>
            <text class="hr_mt_text" transform="translate(863.41 109.56) rotate(-45)">Ha<tspan class="air4" x="25.8" y="0">r</tspan><tspan class="air5" x="33.84" y="0">a</tspan><tspan class="air6" x="44.67" y="0">r</tspan><tspan x="52.72" y="0">e</tspan></text><text class="hr_mt_text" transform="translate(970.65 122.84) rotate(-45)">Muta<tspan class="air4" x="47.24" y="0">r</tspan><tspan class="air7" x="55.28" y="0">e</tspan></text>
            <text class="cpd_text" transform="translate(616.46 465.27) rotate(-45)">Check<tspan class="air9"><tspan x="0" y="26.45">P</tspan><tspan class="road0" x="17.43" y="26.45">oint</tspan></tspan><tspan x="0" y="52.89">Desk</tspan></text>

            <text class="key_text" transform="translate(76.77 485.28)">AIR</text>
            <text class="key_text" transform="translate(76.57 516.42)">ROAD</text>
            <text class="key_text" transform="translate(76.57 548.65)">TRAIN</text>
            <text class="key_text" transform="translate(76.57 580.05)">FOOT</text>
            <text class="key_text" transform="translate(76.27 610.56)">BICYCLE</text>

            <circle class="marker ZM" cx="632.13" cy="254.89" r="15.7"/>
            <circle class="marker HR" cx="863.53" cy="144.15" r="26.45"/>
            <circle class="marker MT" cx="957.74" cy="144.15" r="13.22"/>
            <circle class="marker NW" cx="1005.68" cy="715.22" r="14.88"/>
            <circle class="marker SW" cx="804.03" cy="368.11" r="18.18"/>
            <circle class="marker DK" cx="223.87" cy="21.01" r="19.01"/>
            <circle class="marker CPD" cx="647.83" cy="356.54" r="38.02"/>
            <circle class="marker CT" cx="384.2" cy="626.79" r="23.14"/>
            <circle class="marker NM" cx="468.49" cy="354.06" r="23.14"/>
            </g></g></svg>
        </div>

        <!-- events -->
        <div class="col-12 col-lg-8 events justify-content-center align-items-center">
            <div class="d-inline text-center">
                <h2>welcome to</h2>
                <h1>Check Point Desk</h1>
            </div>
        </div>


    </div>
</div>


<!-- video window -->
<div class="popup-window text-center d-none">
    <div class="iframe-outer">
        <div id="iframe-placeholder" style="padding:56.25% 0 0 0;position:relative;"></div>

    </div>  
        <button class="btn btn-light" id="skip">
            Skip this video
        </button>  

    
</div>



<!-- fast travel modal -->
<div class="fast-travel container-fluid page d-none">
    <div class="row">
        <div class="col-12 col-md-6 offset-md-3 ticket text-center">

            <h4>Looks like you are fresh out of transport.</h4>
            <hr>
            <p>Teleport to Check Point Desk</p>
            <button class="btn btn-lg btn-warning" id="fast-travel"><i class="fas fa-rocket"></i></button>

        </div>
    </div>
</div>


<!-- sound cloud voice over -->
<div class="soundcloud">
<iframe id="voiceover" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/930058207&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/laura-seal-1" title="Laura Seal" target="_blank" style="color: #cccccc; text-decoration: none;">Laura Seal</a> · <a href="https://soundcloud.com/laura-seal-1/nora-voice-over" title="Nora Voice Over" target="_blank" style="color: #cccccc; text-decoration: none;">Nora Voice Over</a></div>
</div>




<!-- script: vimeo api -->
<script src="https://player.vimeo.com/api/player.js"></script>

<!-- link to assets -->
<script>
    const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/nora-chipaumire/assets/`;
</script>


<!-- soundcloud api -->
<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/nora-chipaumire/soundcloud.js"></script>


<!-- script: modes and destinations -->
<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/nora-chipaumire/modes.js"></script>

<!-- script: event listeners and functions -->
<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/nora-chipaumire/script.js"></script>