// Llama al module_6
var modulo6 = require('./module_6');

var directorio = process.argv[2];
var extension = process.argv[3];

modulo6(directorio, extension, function(err, data) {
    if (err !== null) {
        console.log(err);
    }
    console.log(data.join('\n'));
});