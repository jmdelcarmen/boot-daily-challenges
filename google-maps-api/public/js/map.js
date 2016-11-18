'use strict';



function initMap() {

  var mapOptions = {
    center: {lat: 39.511481, lng: -101.427368},
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);


  navigator.geolocation.getCurrentPosition(function (location) {
    //set marker to current location
    let me = new google.maps.Marker({
      position: new google.maps.LatLng(location.coords.latitude, location.coords.longitude),
      map: map
    });


    let placesToGo = [
      {lat:37.387474, lng: -122.057543, name: 'Silicon Valley, CA', imgurl: '/images/siliconvalley.png', description: 'Silicon Valley is a nickname for the southern portion of the San Francisco Bay Area, which is located in part of the U.S. state of California known as Northern California. It is home to many of the world\'s largest high-tech corporations, as well as thousands of startup companies.'},
      {lat:47.60621, lng: -122.332071, name: 'Seattle, WA', imgurl: '/images/seattle.png', description: 'Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and contains thousands of acres of parkland. Washington State’s largest city, it’s home to a large tech industry, with Microsoft and Amazon headquartered in its metropolitan area. The futuristic Space Needle, a 1962 World’s Fair legacy, is its most iconic landmark.'},
      {lat:29.545926, lng:-95.105942 , name: 'NASA, Houston, TX', imgurl: '/images/nasa.jpg', description: 'The National Aeronautics and Space Administration is an independent agency of the executive branch of the United States federal government responsible for the civilian space program as well as aeronautics and aerospace research.'},
      {lat:45.487062, lng:-122.80371, name: 'Portland, OR', imgurl: '/images/portland-oregon.jpg', description: 'Portland, Oregon’s largest city, sits on the Columbia and Willamette rivers, in the shadow of snow-capped Mount Hood. It’s known for its parks, bridges and bicycle paths, as well as for its eco-friendliness and its microbreweries and coffeehouses. Iconic Washington Park encompasses sites from the formal Japanese Garden to Oregon Zoo and its railway. The city hosts thriving art, theater and music scenes.' },
      {lat:42.357044, lng:-71.09286, name: 'MIT, Cambridge, MA', imgurl: '/images/mit.png', description: 'The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts. Founded in 1861 in response to the increasing industrialization of the United States, MIT adopted a European polytechnic university model and stressed laboratory instruction in applied science and engineering.'}
    ];


    placesToGo.forEach(function (place) {
      var marker = new google.maps.Marker({
        position: {lat: place.lat, lng: place.lng},
        map: map
      });

      var infoWindowOptions = {
        content:
         `<div class="iw">
          <header>
          <p>${place.name}</p>
            <img src="${place.imgurl}">
          </header>
          <section>
            <p>${place.description}</p>
          </section>
          <footer>

          </footer>
         </div>`,
      };
      var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
      google.maps.event.addListener(marker, 'click', function (e) {
        infoWindow.open(map, marker);
      });
      marker.addListener('click', toggleBounce);
    });


    function toggleBounce() {
      if (this.getAnimation() !== null) {
        this.setAnimation(null);
      } else {
        this.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

  });
}
