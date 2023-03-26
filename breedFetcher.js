const request = require('request');
const fs = require('fs');

const breedName = process.argv[2];
//const filePath = "siberian.json";
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

//const fetchBreedDescription = (breedName, callback) => {
request(url, (error, response, body) => {

  if (error) {
    console.log(`Failed to request details: ${error}`);
  } else if (response.statusCode !== 200) {
    console.log(`Invalid response status code ${response.statusCode} fpr ${url}`);
  } else {
    //console.log(body);
   // console.log(typeof body);
    const data = JSON.parse(body);
    console.log(data[0].description);
    //console.log(typeof data);

    // fs.writeFile(filePath, body, (err) => {
    //   if (err) {
    //     console.log(`Error saving to ${filePath}: ${err}`);
    //   } else {
    //     console.log(`Saved to ${filePath}`);
    //   }
    // });
  }
})
//}
//fetchBreedDescription(siberian)

// const fetchBreedDescription = function(breedName, callback) {
//   request(url, (error, response, body) => {
//     //console.log(typeof body);
//     if (error) {
//       console.log(`Failed to request details: ${error}`, null);
//     } else if (response.statusCode !== 200) {
//       console.log(`Invalid response status code ${response.statusCode} for ${url}`);
//     } else {
//       fs.writeFile(filePath, body, (err) => {
//         if (err) {
//           console.log(`Error saving to ${filePath}: ${err}`);
//         } else {
//           console.log(`Downloaded and saved  `);
//         }

//         const data = JSON.parse(body);
//         // console.log(data);
//         // console.log(typeof data);
//       });
//     }
//   });

// };





