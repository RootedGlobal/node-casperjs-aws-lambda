var path = require('path'),
    fs = require('fs'),
    childProcess = require('child_process');

// Get the path to the phantomjs application
function getPhantomFileName() {
    var phantomPath = path.join(__dirname, 'node_modules', 'phantomjs', 'bin', 'phantomjs');
    if ( /* process.env.DEBUG && */ fs.existsSync(phantomPath)) {
        return phantomPath;
    }
    return path.join(__dirname, 'phantomjs');
}

// Call the casperJS script
function runCasper(scriptName, callback) {
    var casperPath = path.join(__dirname, 'node_modules', 'casperjs', 'bin', 'casperjs');
    var outputData = [];
    var error = null;
    var childArgs = [
        path.join(__dirname, scriptName)
    ];
    var childOptions = {
        'PHANTOMJS_EXECUTABLE': getPhantomFileName()
    };
    
    process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

    console.log('Calling casperJS: ', casperPath, childArgs, childOptions);

    var ps = childProcess.execFile(casperPath, childArgs, childOptions);

    ps.stdout.on('data', function(data) {
        console.log(data);
        outputData.push(data);
    });

    ps.stderr.on('data', function(data) {
        console.log('casper error  ---:> ' + data);
        error = new Error(data);
    });

    ps.on('exit', function(code) {
        console.log('child process exited with code ' + code);
        callback(error, outputData);
    });
}

// Entry Point
exports.handler = function(event, context) {
    // Execute the casperJS call and exit
    runCasper('casperjs-script.js', context.done);
};
