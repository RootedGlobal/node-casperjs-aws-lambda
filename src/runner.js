var fs = require('fs');
var path = require('path');
var childProcess = require('child_process');
var utils = require('./utils');

// CasperJS script runner.
module.exports = function (fileName, args, callback) {
    var casperPath = utils.getCasperPath();
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
        /* append args to options via parameters so that it can be sent over to casper script: http://docs.casperjs.org/en/latest/cli.html#raw-parameter-values */
        for (var key in args) {
            // format to: '--key=value'
            options.push('--' + key + '=' + args[key]);
	    }
    }

    // Set the path as described here: https://aws.amazon.com/blogs/compute/running-executables-in-aws-lambda/
    if (process.env['LAMBDA_TASK_ROOT']) {
        // adding ':/var/task/bin' in path fixes the issue: "Fatal: [Errno 2] No such file or directory; did you install phantomjs?"
        // reference: https://github.com/narainsagar/node-casperjs-aws-lambda/issues/3
        process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'] + ':/var/task/bin';
    }
    console.log('PATH', process.env['PATH']);
    console.log('Calling casperJS: ', casperPath, options, phantomOptions);

    // Launch the child process
    var ps = childProcess.execFile(casperPath, options, phantomOptions);
    
    ps.stdout.on('data', function(data) {
        console.log(data);
        outputData.push(data);
    });

    ps.stderr.on('data', function(err) {
        console.error('error: ' + err);
        error = err;
    });

    ps.on('exit', function(code) {
        console.log('child process exited with code ' + code);
        callback(error, outputData);
    });
};