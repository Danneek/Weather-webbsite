const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/fc6c5f1c036c7da713bfeb2ca1339088/${encodeURIComponent(
    longitude
  )},${encodeURIComponent(latitude)}?lang=sv&units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " För tillfället " +
          body.currently.temperature +
          " grader ute, det är en  " +
          body.currently.precipProbability +
          "% risk för regn"
      );
    }
  });
};

module.exports = forecast;
