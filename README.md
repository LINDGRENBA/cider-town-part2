# _Cider Town_

#### _React Exercise for Epicodus, 09.11.2020_

#### By _**Brittany Lindgren**_

## Description

*Enjoy all the delicious, refreshing flavors of cider that Cider Town has to offer. Tart, sweet, sour, we've got it all.*

## Setup / Installation

* Open a text editor, such as Visual Studio Code
* Open the terminal using `cmd + shift + ~` on Mac or `ctrl + shift + ~` on Windows
* In the terminal, clone the repository `git clone https://github.com/LINDGRENBA/cider-town.git`
* Navigate into the directory by entering `cd cider-town` into the terminal
* Enter the following command into the terminal `npm install --save-exact react-scripts@3.2.0`
* Start the project by running the following command in the terminal `npm start`
* The project should open in the browser


## User Stories
| Goal | Status | Notes |
|---------|-------|-----|
|  As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brewery, alcohol content and price.   |   completed   |   none   |
|  As a user, I want to submit a form to add a new keg to a list.   |   completed   |   none   |
|  As a user, I want to be able to click on a keg to see its detail page.   |   completed   |   none   |
|  As a user, I want to see how many pints are left in a keg.   |   in progress   |   none   |
|  As a user, I want to be able to click a button _next to a keg_ whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.   |   in progress   |   none   |


## Stretch Goals

* Add additional details to CiderDetail component to show more than is displayed on CiderMenu
* Add a header
* Style header
* Add an about and events section
* Style about and events sections

## Component Diagram

![Diagram of React Components](./src/images/component-diagram.PNG)


## Errors / Bugs
| Message or Error | Cause | Fix |
|---------|-------|-----|
|  Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. Check the render method of `CiderControl`.  |  Caused by importing empty files?  |  Add content to empty components  |
|  No button text visible in reusable form submit button  |  Incorrect component used in CiderControl.js  |  for `else if (this.state.formVisibleOnPage)` conditional, change `<ReusableForm />` to `<AddCiderForm />` |
|   |   |   |




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
