#!/usr/bin/env node

// Kevin Crane
// Homework 1 - First 100 Primes
var fs = require('fs');
var outfile = "primes.txt";

var primes = new Array();
primes.push(2);
var outText = "2";

// Repeat everything until you find 100 primes
var num = 3;
var numPrimes = 1;
while(numPrimes < 100) {
    var isPrime = true;
    // Iterate through every previous prime number, see if it's a multiple of 'num'
    for(var i = 0; i<primes.length; i++) {
        if(num % primes[i] == 0) {
            isPrime = false;
            break;
        }
    }

    // If num wasn't divisible by anything, add it to primes
    if(isPrime) {
        primes.push(num);
        numPrimes++;
        outText += "," + num;
        console.log("Prime number: " + num);
    }
    num += 2;
}

// Write to file
outText += "\n";
fs.writeFile(outfile, outText);