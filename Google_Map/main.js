function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 24.970575, lng: 121.267450 },
        zoom: 16
    });
    var marker = new google.maps.Marker({
        position: { lat: 24.970305, lng: 121.267450 },
        map: map
    });
}