
// Get user location or set a default location
// define default location:
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
        return loadWeater(placeCoords.lat,placeCoords.lng, unit);
      } catch(err) {
          alert("Location not found!");
          console.log("error" + err);
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
  console.log("change select");
  console.dir(selectFav);
  if (selectFav[selectFav.selectedIndex].value) {
    const coord = JSON.parse(selectFav[selectFav.selectedIndex].value);
    return loadWeater(coord.lat,coord.lon,unit);
  }
})
