# 365 FLICKS PODCAST WEBSITE

## Overview

### What is this app for?

This is website designed to promote a movie themed podcast 365 Flicks.

### What does it do?

This site will allow users to learn about the podcast, read reviews, listen to snippets of the podcast audio episodes as well as watching movie trailers. Users will also be able to contact the podcast with their comments as well as sign up to a news letter by submitting a form with various types of input.
 
### How does it work
 
The site uses AngularJS as a framework with bootstrap responsive design and jquery for affects and animation. More to follow...

## Features

### Existing Features
- None yet!
 
### Features Left to Implement
- User Based Features
    - Registration to a newsletter via form submission
    - Contact via form submission
- Other Features
    - Deployment of different styles to each of the informational pages

## Tech Used

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks

## Contributing
 
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

The simplest way to start this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].