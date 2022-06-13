
// Get user location or set a default location
// define default location:
let lat = 49.2827;
let long = -123.1066;
let unit = "metric";

function geoLeocation() {
  window.navigator.geolocation
  .getCurrentPosition((success) => {
    loadWeater(success.coords.latitude,success.coords.longitude,unit);
    loadWeatherForecast(success.coords.latitude,success.coords.longitude,unit);
  }, (error) => {
    loadWeater(lat,long,unit);
    loadWeatherForecast(lat,long,unit);
  });
}
geoLeocation();


// Search city (Google Places)
let inputSearch = document.getElementById('searchTextField');
function activatePlacesSearch() {
  
  const options = {
      fields: ['geometry','name'],
      types: ['(cities)']
  };

  let autocomplete = new google.maps.places.Autocomplete(inputSearch,options);

  autocomplete.addListener("place_changed",() =>{
      const place = autocomplete.getPlace();
      try {
        let placeCoords = JSON.stringify(place.geometry.location);
        placeCoords = JSON.parse(placeCoords);
        selectFav.selectedIndex = 0;
        loadWeater(placeCoords.lat,placeCoords.lng, unit);
        loadWeatherForecast(placeCoords.lat,placeCoords.lng, unit);
      } catch(err) {
          alert("Location not found!");
      }
  });
}


// Favorites Select
let selectFav = document.getElementById('favCity');
// Clear Favorites
let btnClear = document.getElementById("btnClear");

btnClear.addEventListener('click',function(){
  localStorage.clear();
  const starIco = document.getElementById("star_ico");
  starIco.innerText = "star_border";
  fillSelect();
})

// Fill select
fillSelect();
function fillSelect() {
  selectFav.length = 0;
  let values= [];
  let keys = Object.keys(localStorage);
  let size = keys.length;
  selectFav.options.add(new Option("Favorite cities",""));
  for (let i = 0 ; i < size ; i++) {
      selectFav.options.add(new Option(keys[i],localStorage.getItem(keys[i])));
  }
  selectFav.selectedIndex = 0;
}

// Select Event Listener
selectFav.addEventListener('change',function(){
  inputSearch.value = "";
  if (selectFav[selectFav.selectedIndex].value) {
    const coord = JSON.parse(selectFav[selectFav.selectedIndex].value);
    loadWeater(coord.lat,coord.lon,unit);
    loadWeatherForecast(coord.lat,coord.lon,unit);
  }
})
