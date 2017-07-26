var fs = require('fs');
// se recibe como argumento, el tercero es el archivo de texto que necesito (indice 2)
//console.log(process.argv[2]);

// con toString() veo el contenido del txt
// con el split se marcan los espacios vacios
// con length - 1 cuento y quito el espacio del final
console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1);