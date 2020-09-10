# Guten Signup

Signup gutenberg block . Can be added as a normal block via Gutenberg and user can change the button name + placeholder of signup field. Block is called guten-signup.

For quicker use, in case you want to use the block but not deal with environment setup, just download the repository as a ZIP file and install it as a normal Wordpress plugin. Activate it and voila, the block is ready for use. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

For the development environment, you need to install npm and then the @wordpress/env package. @wordpress/env requires Docker to be running. Please install @wordpress/env as a local package for this block, and "wp-env":"wp-env" is already defined on package.json. 

```
$ cd /path/to/gutenberg-block
$ npm install 
$ npm i @wordpress/env
```

### Start environment

Since the wp-env package is installed as a local package, you will need to start the environment using npm run as below: 

```
$ npm run wp-env start
```

With that the dev-environment starts. If you want webpack to listen for changes you need to run this command as well:

```
$ npm run watch-wp
```

## Environment info

After wp-env has started you should navigate to http://localhost:8888 in your web browser to see WordPress running with the local WordPress plugin or theme running and activated. Default login credentials are:

```
username: admin 
password: password
```


To stop dev-environment just run:

```
$ npm run wp-env stop
```

### More about the dev environment

For more info or troubleshooting steps, check https://www.npmjs.com/package/@wordpress/env package where you have all the details about the dev environment. 
