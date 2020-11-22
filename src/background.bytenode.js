'use strict';

const bytenode = require('bytenode');
const fs = require('fs');
const v8 = require('v8');
const path = require('path');

v8.setFlagsFromString('--no-lazy');

if (!fs.existsSync(path.join(__dirname, './background.jsc'))) {
    bytenode.compileFile(path.join(__dirname, './background.src.js'),path.join(__dirname,  './background.jsc'));
}

require(path.join(__dirname,'./background.jsc'));