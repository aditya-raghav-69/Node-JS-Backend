

// the import.js file will import all memebers of the carsExports

let cars = require('./carsExports'); // assuming carsExports is in the same directory
console.log(cars[3].ghost);


console.log(cars[1].supra);
console.log(cars[0].mustang);
console.log(cars[2].scorpio);
