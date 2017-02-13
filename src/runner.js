var fs = require('fs');
var path = require('path');
var childProcess = require('child_process');
var utils = require('./utils');

// CasperJS script runner.
module.exports = function (fileName, args, callback) {
    var casperPath = utils.getCasperPath(); // path.join(__dirname, 'node_modules', 'casperjs', 'bin', 'casperjs');
    var phantomOptions = {
        'PHANTOMJS_EXECUTABLE': utils.getPhantomPath()
    };

    var outputData = [];
    var error = null;

    var filePath = path.join(__dirname, 'scripts', fileName);
    if (!fs.existsSync(filePath)) {
        throw new Error('File: ' + fileName + ' not exists on directory path:', filePath);
    }
    var options = [
        filePath
    ];

    if (args && typeof args === 'object') {
        /* attach data via parameters to casper script: http://docs.casperjs.org/en/latest/cli.html#raw-parameter-values */
        for (var key in args) {
            // format to: '--key=value'
            options.push('--' + key + '=' + args[key]);
	    }
    }

    process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

    console.log('Calling casperJS: ', casperPath, options, phantomOptions);

    var ps = childProcess.execFile(casperPath, options, phantomOptions)
    ps.stdout.on('data', function(data) {
        console.log(data);
        outputData.push(data);
    });
    ps.stderr.on('data', function(err) {
        console.error('casper error  ---:> ' + err);
        error = err;
    });
    ps.on('exit', function(code) {
        console.log('child process exited with code ' + code);
        callback(error, outputData);
    });
};