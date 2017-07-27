var fs = require('fs');
// Modulo que exporta una funcion
module.exports = function(ruta, extension, callback) {
    //console.log(ruta, extension, callback);
    fs.readdir(ruta, function(err, data) {
        //console.log(data);
        // si hay un error se imprime
        if (err !== null) {
            return callback(err);
        }
        var filtrados = data.filter(function(archivo) {
            return archivo.split('.')[1] === extension;
        });

        callback(err, filtrados);
    });
}