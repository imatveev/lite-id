# lite-id
[![Build Status](https://travis-ci.org/imatveev/lite-id.svg?branch=master)](https://travis-ci.org/imatveev/lite-id)
![](https://david-dm.org/imatveev/lite-id.svg)<br />
A simple nodejs module for generate unique string id.
## Installation
    npm install lite-id
## When should I use lite-id?
You need to generate a simple unique id in code.
## API
    var id = require('lite-id);
### id([length])
Generates an id. Optional length is set resulting id length. Default length is 10.
## Example

With default length

    var id = require('lite-id');
    console.log(id());
    //Result: J6YgVpwp1929

With custom length

    var id = require('lite-id')(20);
    console.log(id);
    //Result: jXf315M_G10SQKa2786RG
