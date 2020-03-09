window.addEventListener('load', ()=> {
  let long;
  let lat;
  // html elements
  let temperatureDescription = document.querySelector ('.temperature-description')
  let temperatureDegree = document.querySelector ('.temperature-degree')
  let locationTimezone = document.querySelector ('.location-timezone')

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = 'https://cors-anywhere.herokuapp.com/'
      const api = `${proxy}https://api.darksky.net/forecast/c99c5e4649b8f0354dc1edeb7ac3a3cd/${lat},${long}`;

      fetch(api)
        .then(response =>{
            return response.json();
        })
          .then(data =>{
            // pulls out all data from data.currently
            const {temperature, summary} = data.currently;
            //Set DOM elements from the api
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone;
          });
    });
  }
});
