const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');

// message board
const message_board = document.querySelector('#message-board');

// various information boxes
const itineraryBox = document.querySelector('.itinerary');
const destinationBox = document.querySelector('.destinations');
const modesBox = document.querySelector('.modes');
const confirmBox = document.querySelector('.confirm-box');

// boxes categorised
const eventView = [itineraryBox];
const mapView = [destinationBox, modesBox, confirmBox];

// view and switching view variables
const switchBtn = document.querySelector('#switch');
let viewMap = true;

// switching between map and events variables
const map = document.querySelector('.map');
const options = document.querySelector('.options');
const events = document.querySelector('.events');
let welcome = events.querySelector('h1');
let desk = document.querySelector('.desk');

// current destination information
const currentBox = document.querySelector('.current-location');
const abbrev = document.querySelector('#abreviation');
const location_title = currentBox.querySelector('h2');
// destination choices box
const destination_list = document.querySelector('.avail-destinations');
// modes of transport choices box
const modes_list = document.querySelector('.modes .avail-options');
// confirmation of transport box
const conf_destination = document.querySelector('#final-destination');
const conf_mode = document.querySelector('#mode');
const conf_btn = document.querySelector('#begin-travel');
// events choices
const events_choices = document.querySelector('.itinerary .avail-options');
let eventbtns = [];

// popup window
const popup = document.querySelector('.popup-window');
const iframe_placeholder = popup.querySelector('#iframe-placeholder');
const skipBtn = document.querySelector('#skip');
let iframe;
let player;

// fast travel popup window
const fast_travel = document.querySelector('.fast-travel');
const fast_btn = document.querySelector('#fast-travel');

// map
const markers = document.querySelectorAll('.marker');

// mobile tabs
const view_travel = document.querySelector('#view-travel');
const view_map = document.querySelector('#view-map');
const view_events = document.querySelector('#view-events');

let current_destination = CPD;
let selected_destination, selected_mode;

// soundcloud
var iframeElement   = document.querySelector('#voiceover');
var widget1         = SC.Widget(iframeElement);



// event listeners

window.addEventListener('load', () => {
    setTimeout(() => {
        if(window.innerWidth < 992){
            fullscreenBtn.click();
        }  
    }, 1000);
});

window.addEventListener('orientationchange', (event) => {
    if(event.target.screen.orientation.angle > 0){
        options.classList.remove('d-none'); 
        map.style.display = 'flex';
        events.style.display = 'none';
    }
})


// begin
beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
    message_board.classList.remove('d-none');
    widget1.play();
});

widget1.bind(SC.Widget.Events.FINISH, function(){
    message_board.classList.add('d-none');
});

view_travel.addEventListener('click', () => {
    options.classList.remove('d-none');
    eventView.forEach(item => {
        item.classList.add('d-none');
    });
    mapView.forEach(item => {
        item.classList.remove('d-none');
    });
    map.style.display = 'none';
});

view_map.addEventListener('click', () => {
    options.classList.add('d-none');
    map.style.display = 'flex';
    events.style.display = 'none';
})

view_events.addEventListener('click', () => {
    options.classList.remove('d-none');
    eventView.forEach(event => {
        event.classList.remove('d-none');
    });
    mapView.forEach(map => {
        map.classList.add('d-none');
    })
    map.style.display = 'none';
})


conf_btn.addEventListener('click', () => {
    if(selected_destination === undefined){
        alert('Please select a destination to travel to');
    } else if(selected_mode === undefined && !current_destination[selected_destination].length){
        fast_travel.classList.remove('d-none');
    }else if (selected_mode === undefined){
        alert('Please select your mode of transport to travel to ' + window[selected_destination].name)
    } else {
        setTimeout(() => {
            popup.classList.remove('d-none');
            if(selected_destination === 'CPD'){
                iframe_placeholder.innerHTML = `<iframe src="https://player.vimeo.com/video/${window[selected_mode][current_destination.abr]}?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
            } else if (selected_mode === 'bicycle' || selected_mode === 'foot') {
                iframe_placeholder.innerHTML = `<iframe src="https://player.vimeo.com/video/${window[selected_mode][selected_destination]}?autoplay=1&title=0&byline=0&portrait=0&loop=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
            }  else {
                iframe_placeholder.innerHTML = `<iframe src="https://player.vimeo.com/video/${window[selected_mode][selected_destination]}?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
            }


            // console.log(window[selected_mode]);
            

            // filtering array
            {
                let current_arr = current_destination[selected_destination];
                let selected_arr = window[selected_destination][current_destination.abr];
                let mode = window[selected_mode];

                current_destination[selected_destination] = filterItems(current_arr, mode);
                window[selected_destination][current_destination.abr] = filterItems(selected_arr, mode);

                // console.log(window[selected_destination][current_destination.abr]);
                // console.log(current_destination[selected_destination]);

            }

            
            // delete player;
            iframe = iframe_placeholder.querySelector('iframe');
            player = new Vimeo.Player(iframe);
            player.on('ended', () => {
                popup.classList.add('d-none');
                iframe.src = '';
            });

            welcome.innerText = window[selected_destination].name;

            if(selected_destination !== 'CPD'){
                switchView();
            }

            current_destination = window[selected_destination];
            selected_destination = undefined;
            selected_mode = undefined;
            add_destinations(current_destination);
            
        }, 1000);

        // select line and dot it
        let line;
        if(current_destination.abr === 'CPD'){
            line = document.querySelector(`.${selected_mode}.CPD-${selected_destination}`);
        } else if(selected_destination === 'CPD'){
            line = document.querySelector(`.${selected_mode}.CPD-${current_destination.abr}`);
        } else if (selected_destination === 'MT' || current_destination.abr === 'MT'){
            line = document.querySelector(`.${selected_mode}.HR-MT`);
        } else if(selected_mode === 'bicycle'){
            line =  document.querySelector(`.bicycle.CT-NM`);
        }
        line.classList.add('dotted');

    }

});

skipBtn.addEventListener('click', () => {
    popup.classList.add('d-none');
    iframe_placeholder.innerHTML = '';
})

switchBtn.addEventListener('click', () => {
    switchView();
})

fast_btn.addEventListener('click', (e) => {
    e.stopPropagation();
    fast_travel.classList.add('d-none');
    current_destination = CPD;
    selected_destination = undefined;
    selected_mode = undefined;
    add_destinations(CPD);
})
fast_travel.addEventListener('click', () => {
    fast_travel.classList.add('d-none');
})






// functions

function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el !== query;
    })
  };
  

function switchView (){
    viewMap = !viewMap;
    // show correct boxes for map view
    if(viewMap){
        mapView.forEach(box => {
            box.classList.remove('d-none')
        });
        eventView.forEach(box => {
            box.classList.add('d-none');
        });
        map.style.display = 'flex';
        events.style.display = 'none';
        switchBtn.innerHTML = 'View events <i class="fas fa-arrow-right"></i>';
    } else {
        mapView.forEach(box => {
            box.classList.add('d-none')
        });
        eventView.forEach(box => {
            box.classList.remove('d-none');
        });
        map.style.display = 'none';
        events.style.display = 'flex';
        switchBtn.innerHTML = '<i class="fas fa-arrow-left"></i> View map';
    }
}

function add_destinations (current) {
    // change the title of the page to match the current destination
    abbrev.innerText = current.abr;
    location_title.innerText = current.name;
    conf_destination.innerText = '...';
    conf_mode.innerText = '...';
    modes_list.innerHTML = '';

    // make marker on map pulse
    markers.forEach(marker => {
        marker.classList.remove('pulsing')
    })
    document.querySelector(`.marker.${current_destination.abr}`).classList.add('pulsing');
    
    // fill out the neccessary destination options
    destination_list.innerHTML = '';
    current.desitnations.forEach(destination => {
        destination_list.innerHTML += destination.label;
    });

    

    // add the event listeners to the various destinations
    const destinations = document.querySelectorAll('.item');

    destinations.forEach(item =>{
        item.addEventListener('click', () => {
            destinations.forEach(destination => {
                destination.classList.remove('checked');
            });
            item.classList.add('checked');
            conf_destination.innerText = item.innerText;
            conf_mode.innerText = '...';
            selected_destination = item.dataset.target;

            // add modes of transport for the selected option
            modes_list.innerHTML = '';
            let transport = current[item.dataset.target];
            transport.forEach(transport => {
                modes_list.innerHTML += transport.icon;
            });

            const modes = modes_list.querySelectorAll('.icon');

            modes.forEach(mode => {
                mode.addEventListener('click', () => {
                    modes.forEach(item => {
                        item.classList.remove('mode_checked');
                    });
                    mode.classList.add('mode_checked');
                    conf_mode.innerText = mode.dataset.target;
                    selected_mode = mode.dataset.target;
                })
            })
        })
    });

    // events
    add_events();
} 

function add_events(){
    if(current_destination.events){
        events_choices.innerHTML = '';
        current_destination.events.forEach(option => {
            let viewedClass = '';
            if(option.viewed){
                viewedClass = 'disabled';
            }
            events_choices.innerHTML += `
                <div class="card" id="${option.id}">
                    <img class="card-img-top" src="${option.image}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${option.name}</h5>
                    <button data-target="${option.id}" class="${viewedClass} event-btn btn btn-danger">Attend</button>
                    </div>
                </div>
            `;
        })
        eventbtns = events_choices.querySelectorAll('.event-btn');
    } else {
        events_choices.innerHTML = '<p>There are no available events in this location</p>';
    }

    eventbtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.classList.remove('d-none');
            
            iframe_placeholder.innerHTML = `<iframe src="https://player.vimeo.com/video/${window[btn.dataset.target].link}?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
                
                
            window[btn.dataset.target].viewed = true;
            btn.classList.add('disabled');

            delete player;
            let iframe = iframe_placeholder.querySelector('iframe');
            let player = new Vimeo.Player(iframe);
            player.on('ended', () => {
                popup.classList.add('d-none');
                iframe.src = '';
            });
        })
    })
}



// begin sequence

add_destinations(CPD);