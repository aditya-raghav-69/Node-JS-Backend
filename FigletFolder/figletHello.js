// let fig = require("figlet");

var figlet = require("figlet");

figlet("mera naam hai pote \n jo apne baap ke bhi nhi hote ", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});