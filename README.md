# CasperJS AWS Lambda Template

A [CasperJS](http://casperjs.org/) node.js app for [Amazon Lambda](http://aws.amazon.com/lambda/).
Based on [node-lambda-template](https://github.com/rebelmail/node-lambda-template) using [node-lambda](https://github.com/rebelmail/node-lambda).
The app includes a [PhantomJS](http://phantomjs.org/) binary (i.e., in the `/bin/` directory named: `phantomjs`) compiled for AWS Linux (https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-linux-x86_64.tar.bz2).

**Note:** If you want to use different PhantomJS binary in your project, then you will be need to download a latest binary from [here](https://bitbucket.org/ariya/phantomjs/downloads/) and replace it with `/bin/phantomjs` (i.e., Make sure you keep the name as is for now).

## Codebase / Directory Structure

This describes the app directory structure & conventions.

```
.                               # project root directory
├── node_modules                # project dependencies directory
│   ├── .bin                    # node_modules bin directory
│   ├── casperjs                # casperjs executable
│   ├── phantomjs               # phantomjs executable
│   └── ...                     # etc
├── bin                         # bin directory
│   ├── phantomjs               # local phantomjs executable
│   └── ...                     # etc
├── src                         # source files
│   ├── scripts                 # directory contains all casperjs scrapping scripts.
│   │   ├── sample-script.js    # sample casperjs script
│   │   └── ...                 # etc
│   ├── runner.js               # dynamic casperjs script runner
│   ├── utils.js                # utility functions inside here.
│   └── ...                     # etc
├── test                        # directory contains test files
│   ├── basic.js                # sample basic test
│   └── ...
├── .env                        # it is where you place your AWS deployment configuration
├── .gitignore                  # exclude files/etc to be tracked & pushed on git (i.e., local configuration, credentials, dependencies, etc.)
├── deploy.env                  # it has the same format as `.env`, but is used for holding any environment/config variables that you need to be deployed with your code to Lambda but you don't want in version control (e.g. DB connection info)
├── event.json                  # it is where you mock your event
├── index.js                    # app main entry point
├── package.json                # project details (i.e., version, author info, dependencies, etc.)
├── README.md                   # project documentation guide.
└── ...                         # etc
```
## Setup / Install

Clone the project:

```shell
$ git clone https://github.com/narainsagar/node-casperjs-aws-lambda.git
```

Install dependencies using npm. It'll install the AWS SDK as well as PhantomJS on the development machine.

```shell
$ npm install # yarn
```

## Usage

After installing use the following `npm` commands as described below. They're only wrapping the `node-lambda` functionality to allow `node-lambda` to be installed only locally. Additional params can be provided using `-- args`. For a list of available options see the `node-lambda` [documentation](https://github.com/RebelMail/node-lambda).

**There are the 3 available commands:**

- setup: `$ npm run setup`
- start: `$ npm run start`
- deploy: `$ npm run deploy`

> Run the `$ npm run setup` command to generate the `.env` environment file with the default configuration used for the Amazon Lambda function.

You need to edit the resulting `.env` file with your custom settings.

For this you need to have aws account and fill out confuguration in `.env` file:

```shell
AWS_ENVIRONMENT=development
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_ROLE_ARN=your_amazon_role
AWS_REGION=us-east-1
AWS_FUNCTION_NAME=
AWS_HANDLER=index.handler
AWS_MODE=event
.....
.....
AWS_RUNTIME=nodejs
....
```
FYI: You can also specify `nodejs` version for `AWS_RUNTIME` config option. i.e.,

```shell
AWS_RUNTIME=nodejs6.10
```

To generate `.env` environment file run the following command:
```shell
$ ./node_modules/.bin/node-lambda setup
# OR
$ npm run setup # yarn setup
```

To run the function locally execute the following command:
```shell
$ ./node_modules/.bin/node-lambda run
# OR
$ npm run start # yarn start
```

Run the following command to deploy the app to Amazon Lambda:
```shell
$ ./node_modules/.bin/node-lambda deploy
# OR
$ npm run deploy # yarn deploy
```

For running tests:
```shell
$ npm run test # yarn test
```

For more about commands visit `node_lambda` [repository here](https://github.com/motdotla/node-lambda)
> **Note:** npm version 2.x or newer required to pass arguments to the scripts using `-- args`

## Contributing

- Star our [GitHub Repository](https://github.com/narainsagar/node-casperjs-aws-lambda) ⭐
- Fork our [GitHub Repository](https://github.com/narainsagar/node-casperjs-aws-lambda) 👈
- Create [pull requests](https://github.com/narainsagar/node-casperjs-aws-lambda/pulls), [submit bugs](https://github.com/narainsagar/node-casperjs-aws-lambda/issues), suggest new features or documentation updates 🔧

## About Me

> My name is **Narain Sagar**, I’m a FullStack JavaScript Developer, lives in  Karachi, Pakistan and pretty much enjoying my life.

![@narainsagar](https://avatars0.githubusercontent.com/narainsagar?&s=128)

## Follow Me 👍

[Medium](http://blog.narainsagar.com/) | 
[Website](http://narainsagar.com/) | 
[Twitter](https://twitter.com/narainsagar) | 
[LinkedIn](https://www.linkedin.com/pk/narainsagar) | 
[Facebook](https://facebook.com/NarainSagarPage) | 
[Github](https://github.com/narainsagar) | 
[Stack Overflow](www.stackoverflow.com/users/5228251/narainsagar)

## License

MIT © [Narain Sagar](http://narainsagar.com/)
