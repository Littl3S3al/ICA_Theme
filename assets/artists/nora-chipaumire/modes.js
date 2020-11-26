
var CPD, NW, CT, NM, DK, ZM, HR, SW, MT;


// modes
var air = {
    icon: '<div class="icon air" data-target="air"><i class="fas fa-plane"></i></div>',
    NW : '481768504',
    CT : '481768504',
    DK : '481768504',
    NM : '481768504',
    HR : '475338772',
    name : 'air'
};
var road = {
    icon: '<div class="icon road" data-target="road"><i class="fas fa-shuttle-van"></i></div>',
    SW : '475338833',
    CT : '475338527',
    NM : '475338527',
    HR : '475338460',
    MT : '475338527',
    name : 'road'
};
var train = {
    icon: '<div class="icon train" data-target="train"><i class="fas fa-subway"></i></div>',
    SW : '475338893',
    name : 'train'
};
var foot = {
    icon: '<div class="icon foot" data-target="foot"><i class="fas fa-shoe-prints"></i></div>',
    ZM : '475339049',
    name : 'foot'
};
var bicycle = {
    icon: '<div class="icon bicycle" data-target="bicycle"><i class="fas fa-bicycle"></i></div>',
    NM : '477632642',
    CT : '477632642',
    name : 'bicycle'
};



// events
var beauty = {
    id: 'beauty',
    name : 'Beauty | drum – makeba',
    link : '475338431',
    image : assets + 'events/beauty.svg',
    viewed : false

};
var guerrilla = {
    id: 'guerrilla',
    name : 'Guerrilla | Winnie',
    link : '475338570',
    image : assets + 'events/guerrilla.svg',
    viewed : false
};
var ylnka = {
    id: 'ylnka',
    name : 'YInka - negra venus',
    link : '475339076',
    image : assets + 'events/ylnka.svg',
    viewed : false
};
var heifer_venus = {
    id : 'heifer_venus',
    name : 'Heifer Venus',
    link : '475551655',
    image : assets + 'events/heifer.svg',
    viewed : false
};
var mother_venus = {
    id : 'mother_venus',
    name : 'Mother Venus | Victoria santa Cruz',
    link : '475338648',
    image : assets + 'events/mother.svg',
    viewed : false
}




// first update
{
    CPD = {
        abr : 'CPD',
        label : '<div class="item" data-target="CPD"><p>Check Point Desk</p></div>',
        name : 'Check Point Desk',
        desitnations: [NW, CT, NM, DK, ZM, HR, SW],
        NW: [air],
        CT: [air, road],
        NM: [air, road],
        DK: [air],
        ZM: [foot],
        HR: [road, air],
        SW: [road, train]
    };
    
    NW = {
        abr : 'NW',
        label: '<div class="item" data-target="NW"><p>Nowhere</p></div>', 
        name : 'Nowhere',
        desitnations: [CPD],
        CPD : [air]
    };
    CT = {
        abr : 'CT',
        label : '<div class="item" data-target="CT"><p>Cape Town</p></div>',
        name : 'Cape Town',
        desitnations: [CPD, NM],
        CPD : [air, road],
        NM : [bicycle],
        events : [ ylnka ]
    };
    NM = {
        abr : 'NM',
        label : '<div class="item" data-target="NM"><p>Namibia</p></div>', 
        name : 'Namibia',
        desitnations: [CT, CPD],
        CPD : [air, road],
        CT : [bicycle]
    };
    DK = {
        abr : 'DK',
        label : '<div class="item" data-target="DK"><p>Dakar</p></div>', 
        name : 'Dakar',
        desitnations: [CPD],
        CPD : [air]
    };
    ZM = {
        abr : 'ZM',
        label : '<div class="item" data-target="ZM"><p>Zambia</p></div>',
        name : 'Zambia',
        desitnations: [CPD],
        CPD : [foot]
    };
    HR = {
        abr : 'HR',
        label : '<div class="item" data-target="HR"><p>Harare</p></div>', 
        name : 'Harare',
        desitnations: [CPD, MT],
        CPD : [air, road],
        MT : [road],
        events : [ heifer_venus ]
    };
    MT = {
        abr : 'MT',
        label : '<div class="item" data-target="MT"><p>Mutare</p></div>', 
        name : 'Mutare',
        desitnations: [HR],
        HR : [road],
        events : [ mother_venus ]
    };
    SW = {
        abr : 'SW',
        label : '<div class="item" data-target="SW"><p>Soweto</p></div>', 
        name : 'Soweto',
        desitnations: [CPD],
        CPD : [train, road],
        events : [ beauty , guerrilla ]
    };
}


// second update
{
    CPD = {
        abr : 'CPD',
        label : '<div class="item" data-target="CPD"><p>Check Point Desk</p></div>',
        name : 'Check Point Desk',
        desitnations: [NW, CT, NM, DK, ZM, HR, SW],
        NW: [air],
        CT: [air, road],
        NM: [air, road],
        DK: [air],
        ZM: [foot],
        HR: [road, air],
        SW: [road, train]
    };
    
    NW = {
        abr : 'NW',
        label: '<div class="item" data-target="NW"><p>Nowhere</p></div>', 
        name : 'Nowhere',
        desitnations: [CPD],
        CPD : [air]
    };
    CT = {
        abr : 'CT',
        label : '<div class="item" data-target="CT"><p>Cape Town</p></div>',
        name : 'Cape Town',
        desitnations: [CPD, NM],
        CPD : [air, road],
        NM : [bicycle],
        events : [ ylnka ]
    };
    NM = {
        abr : 'NM',
        label : '<div class="item" data-target="NM"><p>Namibia</p></div>', 
        name : 'Namibia',
        desitnations: [CT, CPD],
        CPD : [air, road],
        CT : [bicycle]
    };
    DK = {
        abr : 'DK',
        label : '<div class="item" data-target="DK"><p>Dakar</p></div>', 
        name : 'Dakar',
        desitnations: [CPD],
        CPD : [air]
    };
    ZM = {
        abr : 'ZM',
        label : '<div class="item" data-target="ZM"><p>Zambia</p></div>',
        name : 'Zambia',
        desitnations: [CPD],
        CPD : [foot]
    };
    HR = {
        abr : 'HR',
        label : '<div class="item" data-target="HR"><p>Harare</p></div>', 
        name : 'Harare',
        desitnations: [CPD, MT],
        CPD : [air, road],
        MT : [road],
        events : [ heifer_venus ]
    };
    MT = {
        abr : 'MT',
        label : '<div class="item" data-target="MT"><p>Mutare</p></div>', 
        name : 'Mutare',
        desitnations: [HR],
        HR : [road],
        events : [ mother_venus ]
    };
    SW = {
        abr : 'SW',
        label : '<div class="item" data-target="SW"><p>Soweto</p></div>', 
        name : 'Soweto',
        desitnations: [CPD],
        CPD : [train, road],
        events : [ beauty , guerrilla ]
    };
}

