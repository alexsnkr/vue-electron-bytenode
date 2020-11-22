const bytenode = require('bytenode');
const fs = require('fs');
const v8 = require('v8');

v8.setFlagsFromString('--no-lazy');


bytenode.compileFile('./dist_electron/bundled/background.js', './dist_electron/bundled/background.jsc');

fs.copyFile('./src/background.bytenode.js', './dist_electron/bundled/background.js', (err) => {
    if (err) throw err;
    process.exit();
});