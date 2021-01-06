var bars = [
    {
         name: "HandleBar",
        location: [30.266662, -97.742054]
    },
    {
        name: "Whisler's",
        location: [30.2620161, -97.7226869]
    },
    {
        name: "The Roosevelt Room",
        location: [30.267789, -97.746277]
    },
    {
        name: "The Library Bar",
        location: [30.266897, -97.728072]
    },
    {
        name: "Firehouse Lounge",
        location: [30.268174, -97.741042]
    },
    {
        name: "Saxon Pub",
        location: [30.2535515, -97.7635592]
    },
    {
        name: "Corner Bar",
        location: [30.249437, -97.766893]
    },
    {
        name: "Workhorse Bar",
        location: [30.317858, -97.722036]
    },
    {
        name: "Barfly's",
        location: [30.3158, -97.7141]
    },
    {
        name: "Garage",
        location: [30.268007, -97.7440126]
    },
    {
        name: "Dive Bar & Lounge",
        location: [30.2798513, -97.7420803]
    },
    {
        name: "The Skylark Lounge",
        location: [30.2846, -97.7045]
    },
    {
        name: "Bling Pig Pub",
        location: [30.2671, -97.7398]
    },
    {
        name: "Half Step",
        location: [30.2585538, -97.385365]
    },
    {
        name: "Drinkwell",
        location: [30.3172332, -97.7206052]
    },
    {
        name: "Upstairs at Caroline",
        location: [30.2688104, -97.7423102]
    },
    {
        name: "Nickel City",
        location: [30.268651, -97.728072]
    },
    {
        name: "Key Bar",
        location: [30.269722, -97.74939]
    },
    {
        name: "Container Bar",
        location: [30.260356, -97.738494]
    }
];

var barMarkers = [];

for (var i = 0; i < bars.length; i++) {
    barMarkers.push(
        L.marker(bars[i].location).bindPopup("<h1>" + bars[i].name + "</h1>")
    );
}

var liquorStores = [
    {
        name: "Chris's Liquor Store",
        location: [30.247116, -97.773396]
    },
    {
        name: "Travis Heights Wine & Spirits",
        location: [30.238142, -97.739354]
    },
    {
        name: "King Liquor",
        location: [30.32628, -97.740667]
    },
    {
        name: "Twin's Liquor",
        location: [30.235508, -97.791124]
    },
    {
        name: "Urban Wine Liquor",
        location: [30.264868, -97.744228]
    },
    {
        name: "South Lamar Wine & Spirits",
        location: [30.2469838, -97.777764]
    },
    {
        name: "Austin's Liquor",
        location: [30.3566706, -97.6868989]
    },
    {
        name: "Wiggy's Wine & Spirits",
        location: [30.2764, -97.7519]
    },
    {
        name: "J&J Spirits",
        location: [30.2686, -97.7281]
    },
    {
        name: "The Austin Wine Merchant",
        location: [30.2697, -97.7479]
    }
];

var liquorstoreMarkers = [];

for (var i = 0; i < liquorStores.length; i++) {
    liquorstoreMarkers.push(
        L.marker(liquorStores[i].location).bindPopup("<h1>" + liquorStores[i].name + "</h1>")
    );
}

var barLayer = L.layerGroup(barMarkers);
var liquorstoreLayer = L.layerGroup(liquorstoreMarkers);

var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/1/1/0?access_token=pk.eyJ1IjoiYWtzcGVsaW90cyIsImEiOiJja2lpOG9waDAwMGF5MnBxcnl6am5oaHJ0In0.YEEhHfhuXniuu0udC8Movw", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
});

var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
});

var baseMaps = {
    Light: light,
    Dark: dark
};

var overlayMaps = {
    Bars: barLayer,
    Liquor_Stores: liquorstoreLayer
};

var myMap = L.map("map", {
    center: [30.2672, -97.7431],
    zoom: 6,
    layers: [dark, barLayer, liquorstoreLayer]
});

L.control.layers(baseMaps, overlayMaps).addTo(myMap);