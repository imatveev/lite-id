//     lite-id
//
//     Copyright (c) 2015 Ivan Matvieiev
//     MIT License - http://opensource.org/licenses/mit-license.php

var crypto = require('crypto');

function randomByte() {
    var byte = Math.floor(crypto.randomBytes(128)[0]);
    return byte.toString()[0];
}

function getChar() {
    var alphabet = 'abcdefghijkl-_mnopqrstuvwxyz'.split('');
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function getCase(char) {
    return parseInt(randomByte()) % 2 === 0 ? char.toUpperCase() : char;
}

function getRandom() {
    return Math.floor(Math.random() * randomByte()) % 3 === 0 ? randomByte() : getCase(getChar());
}

var uid = function (len) {
    var id = '';
    if (!len) {
        len = 10;
    }
    while (id.length < len) {
        id += getRandom();
    }
    return id;
};

module.exports = uid;

