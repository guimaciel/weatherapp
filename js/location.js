
// GET USER LOCATION OR USE DEFAULT LOCATION
// DEF DEFAULT LOCATION:
let lat = -19.744660;
let long = -47.943257;
let unit = "metric";

function geoLeocation() {
  window.navigator.geolocation
  .getCurrentPosition((success) => {
    return loadWeater(success.coords.latitude,success.coords.longitude,unit);
    console.dir(success);
  }, (error) => {
    return loadWeater(lat,long,unit);
  });
}
geoLeocation();


function activatePlacesSearch() {
  let input = document.getElementById('searchTextField');
  
  const options = {
      fields: ['geometry','name'],
      types: ['(cities)']
  };

  let autocomplete = new google.maps.places.Autocomplete(input,options);

  autocomplete.addListener("place_changed",() =>{
      const place = autocomplete.getPlace();
      try {
        let placeCoords = JSON.stringify(place.geometry.location);
        placeCoords = JSON.parse(placeCoords);
       console.log(`Name: ${place.name} - Position: ${place.geometry.location}`);
      //  console.dir(place);
      //  localStorage.setItem(place.name, place.geometry.location);
      console.log(placeCoords);
      console.log(`Latitude: ${placeCoords.lat} Longitude: ${placeCoords.lng}`);
       return loadWeater(placeCoords.lat,placeCoords.lng, unit);
      } catch(err) {
          alert("Location not found!");
          console.log("error" + err);
      }
  });
}