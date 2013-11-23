var fs = require('fs-extra'),
    path = require('path'),
    hogan = require("hogan.js");


outputHTML();

// Functions

// function to build HTML page from list
function outputHTML() {
  
  var template = hogan.compile(fs.readFileSync('designStudioHTML.mustache').toString());
  
  var output = template.render(require('./workshop.json'));
  
  fs.outputFileSync('designStudioHTML.html', output);
  
}