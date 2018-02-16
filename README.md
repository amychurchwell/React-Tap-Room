# React Tap Room
February 9, 2018. Amy Churchwell, Epicodus.

:email: amy.churchwell@gmail.com

A recreation of an [earlier Angular project](https://github.com/amychurchwell/taproom) using React. An app for a taproom used to track their kegs.

### Development in Angular vs. React

Some thoughts on the differences in development.

**Angular**: _Typescript-based JavaScript framework._

**React**: _JavaScript library for building user interfaces._

I really enjoyed using Angular. I like the Angular-specific syntax (_ngFor_, _ngIf_, .etc.) TypeScript felt comfortable.

I feel like I can't comment in too much detail about my React experience because it is so new. I have been interested in the component breakdown React encourages, it allows the developer to think of their project in utilitarian pieces. I am also really looking forward to our future lessons about _state_.

Not a huge fan of the React CSS treatment, but I think I will have a better understanding of why in the future. Mostly, there is a big part of me that really wants to separate it into it's own .css file considering how the components are very modular.

JSX has been an interesting challenge so far, but beyond it visually feeling strange it isn't anything too alien.

## Component Tree

![component tree](https://raw.githubusercontent.com/amychurchwell/React-Tap-Room/master/src/assets/componenttree.png)


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

### Part 1

- [x] Before coding, spend time planning and drawing out your React app's component structure.

- [x] No dynamic data. For now, just hard-code data directly into your JSX.

- [x] Commit history depicts a full day's work.

### Part 2

- [] Add a keg to kegs list.
- [] Update component tree to show state.
- [] State is used only when necessary.
- [] State is lifted in an efficient manner that follows best practices.

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

Unsure how to design the component tree with employee authentication in mind. Technically the same component. In Angular it would be handled with some sort of _ngIf_ hooked up to a boolean, but I suspect this will become clearer once we learn about states.
