const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");
var place = process.argv[2];
if (!place) {
  return console.log("enter place in cmi");
}
geocode(place, (error, data) => {
  if (error) {
    return console.log("error", error);
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log("Error", error);
    }
    console.log(data.place_name);
    console.log(forecastData);
  });
});
