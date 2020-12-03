export const prepareLocations = (locations) => {
    return locations.map(location => ({
      country: location.country,
      code: location.code,
      cities: composeCitiesToString(location.cities).join(),
  }));
}

//I can use reduce method
const composeCitiesToString = (cities) => {
    return cities.map(city =>  city.name );
};
