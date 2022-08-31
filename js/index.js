const axios = require("axios");

const options = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: { locale: "en-US", pageSize: "20", startFrom: "0" },
  headers: {
    "X-RapidAPI-Key": "24f2da13b7msh41b92e9359bfad8p1fd0fbjsnb9f8f4e0b1c7",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

// const
