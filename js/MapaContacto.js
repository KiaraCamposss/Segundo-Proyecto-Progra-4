function iniciar() {
    var location = { lat: 10.0967869, lng:  -84.3793208 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}