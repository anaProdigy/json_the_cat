const request = require('request');

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {

  if (error) {
    console.log(`Failed to request details: ${error}`);
  } else if (response.statusCode !== 200) {
    console.log(`Invalid response status code ${response.statusCode} fpr ${url}`);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
})






