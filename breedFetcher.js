const request = require('request');





const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback("breed not found", null );
    }
    callback(null, data[0].description.trim());
  });
};


module.exports = { fetchBreedDescription };







