// [ '/Users/nat/.nvm/versions/node/v8.2.1/bin/node',
// '/Users/nat/Workspace/evaluado/ejer2.js',
// '1',
// '2',
// '3']

var arr = process.argv;
var sum = 0;
for (var i = 2; i < arr.length; i++) {
    sum += parseInt(arr[i]);
}

console.log(sum);