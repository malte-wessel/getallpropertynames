getAllPropertyNames
=========

Get all property names along the prototype chain

[![Travis](https://img.shields.io/travis/malte-wessel/getallpropertynames.svg?style=flat-square)](https://travis-ci.org/malte-wessel/getallpropertynames)
[![NPM](https://img.shields.io/badge/npm-getallpropertynames-brightgreen.svg?style=flat-square)]()


## Install

````
npm install getallpropertynames --save
````

## Usage
````javascript
import getAllPropertyNames from 'getallpropertynames';


class Foo {
    foo() {}
}

class Bar extends Foo {
    bar() {}
}

let bar = new Bar();

getAllPropertyNames(bar); 
// ['constructor', 'bar', 'foo', 'toString', 'toLocaleString', 
// 'valueOf', 'hasOwnProperty', 'isPrototypeOf', ... ]

````
