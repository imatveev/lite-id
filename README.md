# lite-id
[ ![Codeship Status for imatveev/lite-id](https://codeship.com/projects/edbbd010-fd35-0132-3eaa-5a06a30fe976/status?branch=master)](https://codeship.com/projects/87692)
[![Build Status](https://travis-ci.org/imatveev/lite-id.svg?branch=master)](https://travis-ci.org/imatveev/lite-id)<br />
A simple nodejs module for generate unique string id.
## Installation
    npm install lite-id
## When should I use lite-id?
You need to generate a simple unique id in code.
## API
    var id = require('lite-id);
### id([length],[options])
Generates an id. Optional [length] is set resulting id length. Default length is 10.
Optional [options] is an object with these defaults:

    {chars:'abcdefghijkl-_mnopqrstuvwxyz',
     strictCase: false
    }
You can specify characters by which your id will be generated using a variable chars.
strictCase is a boolean that specifies whether to use your character set char strictly following case-sensitive,
or randomize case (false - randomizes, true - strictly following case).
## Tests
Lite-id have a mocha test to find collisions of generated id. Test for 1,000,000 generations of default length
and default alphabet is passed and showed no conflicts.
## Examples

With default length

    var id = require('lite-id');
    console.log(id());
    //Result: J6YgVpwp1929

With custom length

    var id = require('lite-id')(20);
    console.log(id);
    //Result: jXf315M_G10SQKa2786RG
    
With custom alphabet

    var id = require('lite-id');
    console.log(id(15,{chars:'qwertyQWERTY1234567890',         
                       strictCase: true}));
    //Result: 2wE5R5Q2qw9e49R4