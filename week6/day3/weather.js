function fetchApi(url) {
  return fetch(url).then((res) => res.json());
}

const apiKey = 'e82251deb1644f092281f508884933dd'; // super secret.

const city = prompt('What city do want to the weather for?');
// const city = 'London';

const getGeocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

function getGeocodes() {
  return fetchApi(getGeocodeUrl);
}

const geocodes = getGeocodes();

geocodes.then((geocode) => {
  // console.log(geocode);
  let locString = '';
  for (let i = 0; i < geocode.length; i++) {
    locString += `${i + 1}. ${geocode[i].name}, ${geocode[i].state}, ${geocode[i].country} \n`;
  }

  const userSelection = prompt(`Make a selection:
    
    ${locString}
    `);

  const locationSelection = geocode[userSelection - 1];

  const { lat, lon } = locationSelection;

  fetchApi(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  )
    // .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log('something went wrong');
    });
});
