<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kwanele/style.css">




<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 text-left">
            <h1>i dont know what to be remembered for anymore</h1>
            <h2>INSTRUCTIONS:</h2>
                <p>
                     Headphones are required for this artwork. Click on the next button at the bottom of the page to move through worlds.
                </p>

            <div class="text-center">
            <button id="btn-begin" class="my-5 btn btn-light">start</button>
            </div>
            
        </div>
    </div>
</div>


<div class="grey">

<div class="dot"></div>

<div class="text-holder">
    <div id="screen-text" class="moving-text"><p>At no point are we directing you to think like us, we want you to feel all that you do. Find more reasons not to believe in our forces- that's pretty boring! We want you to feel powerfully from us the flawed premise that you have got going on when you say why does the World not do this, why does the World not do that because in that very moment you are doing that very thing you are accusing them of doing</p></div>
    </div>

</div>

<div id="three-js-container" class="d-none">
    <div id="loading">
        <div class="text-center">
            <h1>loading...</h1>
            <div class="progress"><div class="progressbar"></div></div>
        </div>
    </div>
    <canvas id="c-1" class="d-none"></canvas>
    <canvas id="c-2" class="d-none"></canvas>
    
</div>

<div class="buttons d-none">
    <button class="btn btn-light" id="next">
        next
    </button>
</div>

<div class="videos">
    <div class="video-div" style="padding:56.34% 0 0 0;position:relative;"><iframe id="video-1" src="https://player.vimeo.com/video/488614705?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

    <div class="video-div" style="padding:56.34% 0 0 0;position:relative;"><iframe id="video-2" src="https://player.vimeo.com/video/488614715?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

    <div class="video-div" style="padding:56.34% 0 0 0;position:relative;"><iframe id="video-3" src="https://player.vimeo.com/video/488614804?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

    <div class="video-div" style="padding:56.34% 0 0 0;position:relative;"><iframe id="video-4" src="https://player.vimeo.com/video/488614837?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

    <div class="video-div" style="padding:56.34% 0 0 0;position:relative;"><iframe id="video-5" src="https://player.vimeo.com/video/488614878?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>


</div>

<div class="other-audio d-none">
    <audio id="world-1" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kwanele/assets/world-1.mp3" loop preload></audio>
    <audio id="world-2" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kwanele/assets/world-2.mp3" loop preload></audio>
</div>
<div class="sounds">
    <iframe id="world-3" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943502785&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-384038096" title="KGC" target="_blank" style="color: #cccccc; text-decoration: none;">KGC</a> · <a href="https://soundcloud.com/user-384038096/firstworld" title="THIRD WORLD" target="_blank" style="color: #cccccc; text-decoration: none;">THIRD WORLD</a></div>
</div>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/soundcloud.js"></script>
<script>
    const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kwanele/assets/`;
</script>

<script src="https://player.vimeo.com/api/player.js"></script>

<!-- bird shaders -->
<script id="fragmentShaderPosition" type="x-shader/x-fragment">

    uniform float time;
    uniform float delta;

    void main()	{

        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 tmpPos = texture2D( texturePosition, uv );
        vec3 position = tmpPos.xyz;
        vec3 velocity = texture2D( textureVelocity, uv ).xyz;

        float phase = tmpPos.w;

        phase = mod( ( phase + delta +
            length( velocity.xz ) * delta * 3. +
            max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );

        gl_FragColor = vec4( position + velocity * delta * 15. , phase );

    }

</script>

<!-- shader for bird's velocity -->
<script id="fragmentShaderVelocity" type="x-shader/x-fragment">

    uniform float time;
    uniform float testing;
    uniform float delta; // about 0.016
    uniform float separationDistance; // 20
    uniform float alignmentDistance; // 40
    uniform float cohesionDistance; //
    uniform float freedomFactor;
    uniform vec3 predator;

    const float width = resolution.x;
    const float height = resolution.y;

    const float PI = 3.141592653589793;
    const float PI_2 = PI * 2.0;
    // const float VISION = PI * 0.55;

    float zoneRadius = 40.0;
    float zoneRadiusSquared = 1600.0;

    float separationThresh = 0.45;
    float alignmentThresh = 0.65;

    const float UPPER_BOUNDS = BOUNDS;
    const float LOWER_BOUNDS = -UPPER_BOUNDS;

    const float SPEED_LIMIT = 9.0;

    float rand( vec2 co ){
        return fract( sin( dot( co.xy, vec2(12.9898,78.233) ) ) * 43758.5453 );
    }

    void main() {

        zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
        separationThresh = separationDistance / zoneRadius;
        alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
        zoneRadiusSquared = zoneRadius * zoneRadius;


        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec3 birdPosition, birdVelocity;

        vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
        vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;

        float dist;
        vec3 dir; // direction
        float distSquared;

        float separationSquared = separationDistance * separationDistance;
        float cohesionSquared = cohesionDistance * cohesionDistance;

        float f;
        float percent;

        vec3 velocity = selfVelocity;

        float limit = SPEED_LIMIT;

        dir = predator * UPPER_BOUNDS - selfPosition;
        dir.z = 0.;
        // dir.z *= 0.6;
        dist = length( dir );
        distSquared = dist * dist;

        float preyRadius = 150.0;
        float preyRadiusSq = preyRadius * preyRadius;


        // move birds away from predator
        if ( dist < preyRadius ) {

            f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
            velocity += normalize( dir ) * f;
            limit += 5.0;
        }


        // if (testing == 0.0) {}
        // if ( rand( uv + time ) < freedomFactor ) {}


        // Attract flocks to the center
        vec3 central = vec3( 0., 0., 0. );
        dir = selfPosition - central;
        dist = length( dir );

        dir.y *= 2.5;
        velocity -= normalize( dir ) * delta * 5.;

        for ( float y = 0.0; y < height; y++ ) {
            for ( float x = 0.0; x < width; x++ ) {

                vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
                birdPosition = texture2D( texturePosition, ref ).xyz;

                dir = birdPosition - selfPosition;
                dist = length( dir );

                if ( dist < 0.0001 ) continue;

                distSquared = dist * dist;

                if ( distSquared > zoneRadiusSquared ) continue;

                percent = distSquared / zoneRadiusSquared;

                if ( percent < separationThresh ) { // low

                    // Separation - Move apart for comfort
                    f = ( separationThresh / percent - 1.0 ) * delta;
                    velocity -= normalize( dir ) * f;

                } else if ( percent < alignmentThresh ) { // high

                    // Alignment - fly the same direction
                    float threshDelta = alignmentThresh - separationThresh;
                    float adjustedPercent = ( percent - separationThresh ) / threshDelta;

                    birdVelocity = texture2D( textureVelocity, ref ).xyz;

                    f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
                    velocity += normalize( birdVelocity ) * f;

                } else {

                    // Attraction / Cohesion - move closer
                    float threshDelta = 1.0 - alignmentThresh;
                    float adjustedPercent;
                    if( threshDelta == 0. ) adjustedPercent = 1.;
                    else adjustedPercent = ( percent - alignmentThresh ) / threshDelta;

                    f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;

                    velocity += normalize( dir ) * f;

                }

            }

        }



        // this make tends to fly around than down or up
        // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);

        // Speed Limits
        if ( length( velocity ) > limit ) {
            velocity = normalize( velocity ) * limit;
        }

        gl_FragColor = vec4( velocity, 1.0 );

    }

</script>

<script type="x-shader/x-vertex" id="birdVS">

    attribute vec2 reference;
    attribute float birdVertex;

    attribute vec3 birdColor;

    uniform sampler2D texturePosition;
    uniform sampler2D textureVelocity;

    varying vec4 vColor;
    varying float z;

    uniform float time;

    void main() {

        vec4 tmpPos = texture2D( texturePosition, reference );
        vec3 pos = tmpPos.xyz;
        vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);

        vec3 newPosition = position;

        if ( birdVertex == 4.0 || birdVertex == 7.0 ) {
            // flap wings
            newPosition.y = sin( tmpPos.w ) * 5.;
        }

        newPosition = mat3( modelMatrix ) * newPosition;


        velocity.z *= -1.;
        float xz = length( velocity.xz );
        float xyz = 1.;
        float x = sqrt( 1. - velocity.y * velocity.y );

        float cosry = velocity.x / xz;
        float sinry = velocity.z / xz;

        float cosrz = x / xyz;
        float sinrz = velocity.y / xyz;

        mat3 maty =  mat3(
            cosry, 0, -sinry,
            0    , 1, 0     ,
            sinry, 0, cosry

        );

        mat3 matz =  mat3(
            cosrz , sinrz, 0,
            -sinrz, cosrz, 0,
            0     , 0    , 1
        );

        newPosition =  maty * matz * newPosition;
        newPosition += pos;

        z = newPosition.z;

        vColor = vec4( birdColor, 1.0 );
        gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );
    }

</script>

<!-- bird geometry shader -->
<script type="x-shader/x-fragment" id="birdFS">

    varying vec4 vColor;
    varying float z;

    uniform vec3 color;

    void main() {
        // Fake colors for now
        float z2 = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
        gl_FragColor = vec4( z2, z2, z2, 1. );

    }

</script>

<!-- three.js script -->
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/kwanele/script.js"></script>