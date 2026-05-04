const city = 'Altoona';

const address = {
  street: 'Wheaton Ave',
  number: '698',
  city: 'Kalamazoo',
  state: 'MI',
  zip: '49007'
};

// const city = address.city
// const state = address.state
// const zip = address.zip

const { city: locale, state, zip, country } = address;

console.log(city); // Altoona
console.log(locale); // Kalamazoo
console.log(country); // undefined

address.country = 'USA';

console.log(country); // USA
