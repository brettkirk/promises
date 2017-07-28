/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  var firstLine = '';
  fs.readFile(filePath, (err, data) => {
    if (!data) {  
      callback(err, data);
    } else {
      var stringed = data.toString();
      firstLine += stringed.slice(0, stringed.indexOf('\n'));
      callback(err, firstLine);
    }
  });
  
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  stringed = '';
  request.on('data', chunk => {
    stringed += chunk.toString();
    console.log(stringed);
  })
  callback(err, statusCode);
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
