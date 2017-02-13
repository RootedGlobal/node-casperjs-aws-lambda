var runner = require('./src/runner');

// App entry Point
exports.handler = function (event, context) {
    console.log('Running index.handler');
    console.log('==================================================');
    console.log('event', event);
    console.log('==================================================');
    var filename = 'sample-script.js'; // file should be placed inside /src/scripts/
    var args = { // attach & pass this data to sample-script.js
        'email': 'hello@hello.com',
        'password': '12345',
        // etc..
    };
    console.log('Executing file named: ', filename, 'with parameters:', JSON.stringify(args));
    console.log('==================================================');
    // Execute the casperJS script and exit.
    runner(filename, args, function(err, data) {
        console.log('==================================================');
        console.log('Stopping index.handler');
        context.done();
    });
};
