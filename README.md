# lite-id
[![Build Status](https://travis-ci.org/imatveev/lite-id.svg?branch=master)](https://travis-ci.org/imatveev/lite-id)<br />
A simple nodejs module for generate unique string id.
## Installation
    npm install lite-id
## When should I use lite-id?
You need to generate a simple unique id in code.
## API
    var id = require('lite-id);
    console.log(id());
    //Result: J6YgVpwp1929
### id([length])
Generates an id. Optional [length] is set resulting id length. Default length is 10.
## Tests

Lite-id have a mocha test to find collisions of generated id. Test for 1,000,000 generations of default length
and default alphabet is passed and showed no conflicts.
## Examples

With default length

    var id = require('lite-id');
    console.log(id());
    //Result: J6YgVpwp1929

With custom length

    var id = require('lite-id');
    console.log(id(20));
    //Result: jXf315M_G10SQKa2786RG
