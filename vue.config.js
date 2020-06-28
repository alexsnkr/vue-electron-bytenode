const { dependencies } = require('./package.json');

module.exports = {
    pluginOptions: {
        electronBuilder: {
            externals: [...Object.keys(dependencies)]
        }
    }
}