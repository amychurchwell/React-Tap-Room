# React Tap Room
February 9, 2018. Amy Churchwell, Epicodus.

:email: amy.churchwell@gmail.com

A recreation of an [earlier Angular project](https://github.com/amychurchwell/taproom) using React. An app for a taproom used to track their kegs.

### Development in Angular vs. React

Some thoughts on the differences in development.


## App Objectives

_Patron_
* List/menu of all available kegs.
* Each keg: name, brand, price, and alcoholContent.
* Keg prices are color-coded.
* Alcohol content property is color-coded.

_Employee_

* Form for tapping a new keg to add it to the list.
* Option to edit a keg's properties after entering them.
* Button next to a keg whenever selling a pint. Decreasing number of pints left by 1.
* Kegs with less than 10 pints left are highlighted.

_Both_
* How many pints are left in a keg. Full: 124 pints.

## React Objectives

- [ ] Before coding, spend time planning and drawing out your React app's component structure.

- [ ] No dynamic data. For now, just hard-code data directly into your JSX.

- [ ] Commit history depicts a full day's work.

## Setup Instructions

Clone from GitHub.
```
$ git clone https://github.com/amychurchwell/React-Tap-Room.git
```

Install NPM packages.
```
$ npm install
```

## Notes

* Commit notes by themselves.
* Unforeseen issues and questions during development.

Interesting problem with trying to use an image URL as a prop in my keg list loop.

Imported image as usual.

```
import beer1 from '../../assets/beer-photo1.jpeg';
```
When passing _beer1_ into image prop for keg, compiles literally as _'beer1'_ in img src. Not the path file.

Attempted to assign actual path to a variable.
```
import beer1 from '../../assets/beer-photo1.jpeg';
let beer = {beer1}

var masterKegList = [
  {
  ...
    image: beer
  },
```
When inspecting page, compiled into [object Object] in img src tag. Unsuccessful to find a solution in Stack Overflow .etc. on this issue.
