var fs = require('fs');
var rs = fs.createReadStream('./mynewfile3.txt');
rs.on('open', function () {
  console.log('The file is open');
});