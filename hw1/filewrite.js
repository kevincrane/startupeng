#!/usr/bin/env node

// Kevin Crane
// Homework 1 - File Writer
var fs = require('fs');
var outfile = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFile(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);