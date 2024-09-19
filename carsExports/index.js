// This is the main file. In this file we have added all files of the cars

// This file will exports all code of carsExports directory

let ford = require('./ford');
let toyota = require('./toyota');
let mahindra = require('./mahindra');
let rollsroyce = require('./rollsroyce');


let mdoels = [ford, toyota, mahindra, rollsroyce];

module.exports = mdoels