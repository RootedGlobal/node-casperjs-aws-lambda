# CasperJS AWS Lambda Template

A [CasperJS](http://casperjs.org/) node.js app for [Amazon Lambda](http://aws.amazon.com/lambda/).
Based on [node-lambda-template](https://github.com/rebelmail/node-lambda-template) using [node-lambda](https://github.com/rebelmail/node-lambda).
The app includes a [PhantomJS](http://phantomjs.org/) binary (i.e., in root directory named: `phantomjs`) compiled for AWS Linux (https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-linux-x86_64.tar.bz2).

## Setup / Install

Clone the project:

```shell
$ git clone https://github.com/narainsagar/node-casperjs-aws-lambda.git
```

Install dependencies using npm. It'll install the AWS SDK as well as PhantomJS on the development machine.

```shell
$ npm install # OR $ npm i
```

## Usage

After installing use the following `npm` commands as described below. They're only wrapping the `node-lambda` functionality to allow `node-lambda` to be installed only locally. Additional params can be provided using `-- args`. For a list of available options see the `node-lambda` [documentation](https://github.com/RebelMail/node-lambda).

**There are the 3 available commands:**

Run the setup command to generate the environment file with the configuration used for the Amazon Lambda function. Edit the resulting `.env.` file with your custom settings.
```shell
$ ./node_modules/.bin/node-lambda setup
# OR
$ npm run setup
```

To run the function locally execute the following command.
```shell
$ ./node_modules/.bin/node-lambda run
# OR
$ npm run start
```

Run the following command to deploy the app to Amazon Lambda. 
```shell
$ ./node_modules/.bin/node-lambda deploy
# OR
$ npm run deploy
```

> **Note:** npm version 2.x or newer required to pass arguments to the scripts using `-- args`


## Contributing

- Star our [GitHub Repository](https://github.com/narainsagar/node-casperjs-aws-lambda) ⭐
- Fork our [GitHub Repository](https://github.com/narainsagar/node-casperjs-aws-lambda#fork-destination-box) 👈
- Create [pull requests](https://github.com/narainsagar/node-casperjs-aws-lambda/pulls), [submit bugs](https://github.com/narainsagar/node-casperjs-aws-lambda/issues), suggest new features or documentation updates 🔧

## About Me

> My name is **Narain Sagar**, I’m a FullStack JavaScript Developer, lives in  Karachi, Pakistan and pretty much enjoying my life.

![@narainsagar](https://avatars0.githubusercontent.com/narainsagar?&s=128)

## Follow Me 👍

[Website](http://narainsagar.com/) | [Twitter](https://twitter.com/narainsagar) | [LinkedIn](https://www.linkedin.com/pk/narainsagar) |  [Facebook](https://facebook.com/NarainSagarPage) | [Github](https://github.com/narainsagar) | [Stack Overflow](www.stackoverflow.com/users/5228251/narainsagar)

## License

MIT © [Narain Sagar](http://narainsagar.com/)
