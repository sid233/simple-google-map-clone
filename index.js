mapboxgl.accessToken = 'pk.eyJ1IjoicmFqcHV0ODgiLCJhIjoiY2w5OGY2NTJ2MDE0NjNwbm51ZGFid3BsOSJ9.NRZ5rcgsMJz3W4HPz10jOQ';

//api for current location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(pos) {
    console.log(pos)
    setupMap([pos.coords.longitude, pos.coords.latitude])

}
function errorLocation() {
    setupMap([78.0080745, 27.1766701])  // default location
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',   // passing id map in div
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();   // adding control
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, "top-left")


    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    );

    // measuring distance btw two points  

    // var to = [77.99520, 27.18223] //lng, lat
    // var from = [coords.longitude, coords.latitude] //lng, lat 

    // var greenMarker = new mapboxgl.Marker({
    //     color: 'green'
    // })
    //     .setLngLat(to) // marker position using variable 'to'
    //     .addTo(map); //add marker to map

    // var purpleMarker = new mapboxgl.Marker({
    //     color: 'purple'
    // })
    //     .setLngLat(from) // marker position using variable 'from'
    //     .addTo(map); //add marker to map

    // var options = {
    //     units: 'kilometers'
    // }; // units can be degrees, radians, miles, or kilometers, just be sure to change the units in the text box to match. 

    // var distance = turf.distance(to, from, options);

    // var value = document.getElementById('map-overlay')
    // value.innerHTML = "Distance: " + distance.toFixed([2]) + " miles"


}
