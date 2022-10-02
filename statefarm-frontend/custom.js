$(function () {

    function initMap() {

        var location = new google.maps.LatLng(50.0875726, 14.4189987);
        // var location2 = new google.maps.LatLng(50.0875726, 14.4189987);

        // var locations= [location1,location2];
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'marker.png';


        // for( i=0;i<locations.length;i++){
            
        //     var mapOptions = {
        //         center: locations[i],
        //         zoom: 16,
        //         panControl: false,
        //         mapTypeId: google.maps.MapTypeId.ROADMAP
        //     }

        //     var marker = new google.maps.Marker({
        //         position: locations[i],
        //         map: map,
        //         icon: markerImage
        //     });

        //     var contentString = '<div class="info-window">' +
        //     '<h3>Info Window Content</h3>' +
        //     '<div class="info-content">' +
        //     '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
        //     '</div>' +
        //     '</div>';

        //     var infowindow = new google.maps.InfoWindow({
        //         content: contentString,
        //         maxWidth: 400
        //     });

           
        //    google.maps.event.addListener(marker,'click',(function(marker,i){
        //     return function(){
        //         infowindow.open(map, marker);
        //     }
        //    }))   
        // }

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
                '<h3>Info Window Content</h3>' +
                '<div class="info-content">' +
                '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

    }

    // google.maps.event.addDomListener(window, 'load', initMap);
    window.addEventListener('load',initMap);
});