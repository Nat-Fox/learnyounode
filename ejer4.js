var fs = require('fs');
// aca esta el texto
var data = process.argv[2];

// la callback es la segunda function

var ejecutar = fs.readFile(data, function(err, data) {
    // si hay un error se imprime
    if (err !== null) {
        console.log(err);
    }
    console.log(data.toString().split('\n').length - 1);
});