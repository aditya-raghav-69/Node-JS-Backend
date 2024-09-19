// module.exports = 17147514



const sum = (a, b) => a + b;

function greet() {
    console.log("This is the data which I have exported from the math.js file");
    console.log("le lawde kar diya print ")
}

let obj = {
    sum: sum,
    greet: greet
}

module.exports = obj;