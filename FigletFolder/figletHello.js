// let fig = require("figlet");

var figlet = require("figlet");

figlet("Mera Naam hai bulla \n Karta hun khulla", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});