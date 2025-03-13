const swapCase = require("swap-case").swapCase


function greet(name) {
    console.log(swapCase(`hello ${name} welcome!`))
}

greet("samuel")
module.exports = greet;