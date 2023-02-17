const request = require('request');

const fs = require('fs');

const breedName = process.argv[2];
const filePath = `${breedName}.json`;
const url = `https://api.thecatapi.com/v1/breeds/search?q=Siberian`






request(url, (error, response, body) => {
  console.log(typeof body)
  if (error) {
    console.log(`Error fetching ${url}`);
  } else if (response.statusCode !== 200) {
    console.log(`Invalid response status code ${response.statusCode} for ${url}`);
  } else {
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        console.log(`Error saving to ${filePath}: ${err}`);
      } else {
        console.log(`Downloaded and saved  `);
      }

      const data = JSON.parse(body);
     // console.log(data);
     // console.log(typeof data);
    });
  }
});





// const fetchBreedDescription = function(breedName, callback) {

// request(url, (error, response, body) => {
//   if (error) {
//     callback(error, null);
//   } else {
//     console.log(body);
//   }
// })
// }