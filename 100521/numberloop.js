var prompt = require('prompt-sync')()

// ask the user to typ in numbers until they are done
var num = 0
var end = "Y"
do {
    var num = prompt("Enter a number: ")
    var end = prompt("Enter 'Y' to enter a number: ")
} while (end == "Y")