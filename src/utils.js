var fs = require('fs');
var path = require('path');

module.exports = {
    // Get the path to the phantomjs executable
    getPhantomPath: function () {
        var phantomPath = path.join(__dirname, '..', 'node_modules', 'phantomjs', 'bin', 'phantomjs');
        if (fs.existsSync(phantomPath)) {
            return phantomPath;
        }
        return path.join(__dirname, '..', 'bin', 'phantomjs');
    },

    // Get the path to the casperjs executable
    getCasperPath: function () {
        var casperPath = path.join(__dirname, '..', 'node_modules', 'casperjs', 'bin', 'casperjs');
        if (!fs.existsSync(casperPath)) {
            throw new Error('Not able to find "casperjs" executable in "node_modules". Please run `$ npm install` to install the project dependencies.');
        }
        return casperPath;
    },

};