// Crea un programa que dado un directorio imprima una lista de archivos
//   filtrados por la extensión. El primer argumento será la ruta al directorio
//   (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si
//   recibes 'txt' deberás filtrar todos los archivos que terminen en .txt.

//   Nota: el segundo argumento no incluye el punto '.'.

//   La lista de archivos a imprimir en consola debe hacerse un archivo por
//   línea y debes utilizar Async I/O.

//  ─────────────────────────────────────────────────────────────────────────────

//  ## PISTAS

//   La función fs.readdir() recibe como parámetros: una ruta(path) y un
//   callback. La firma del callback es:

//      function callback (error, lista) { /* ... */ }

//   La lista es un arreglo de nombres de archivos de tipo String.

//   La documentación del módulo fs puede verse en:
//   file:///Users/nat/.nvm/versions/node/v8.2.1/lib/node_modules/learnyounode/
//   node_apidoc/fs.html

//   Además, el módulo path puede resultar útil, especialmente la función
//   extname.

//   La documentación del módulo path puede verse en:
//   file:///Users/nat/.nvm/versions/node/v8.2.1/lib/node_modules/learnyounode/
//   node_apidoc/path.html


var fs = require('fs');
var directorio = process.argv[2];
var extension = process.argv[3];



//console.log(directorio);
//console.log(extension);

fs.readdir(directorio, function(error, data) {
    // si hay un error se imprime
    if (err !== null) {
        console.log(err);
    }

    var filtrados = data.filter(function(archivo) {
        return archivo.split('.')[1] === extension;
    });

    console.log(filtrados.join('\n'));
});