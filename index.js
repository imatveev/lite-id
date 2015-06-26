//     lite-id
//
//     Copyright (c) 2015 Ivan Matvieiev
//     MIT License - http://opensource.org/licenses/mit-license.php

var crypto = require('crypto');

function randomByte() {
    return Math.floor(crypto.randomBytes(256)[0] / 10 ^ crypto.randomBytes(256)[0] / 10);
}

function getChar(options) {
    var alphabet;
    if (options && options.chars) {
        alphabet = options.chars.split('');
    }
    else {
        alphabet = 'abcdefghijkl-_mnopqrstuvwxyz'.split('');
    }
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function getCase(char) {
    if (parseInt(randomByte()) % 2 === 0) {
        return char.toUpperCase();
    }
    else {
        return char;
    }
}

function getRandom(options) {
    if (Math.floor(Math.random() * randomByte()) % 3 === 0 && (!options || options && !options.chars)) {
        return randomByte();
    }
    else {
        if (options && options.strictCase) {
            return getChar(options);
        }
        else {
            return getCase(getChar(options));
        }
    }
}

var uid = function (len, options) {
    if (typeof len === 'object') {
        options = len;
        len = false;
    }
    var id = '';
    if (!len) {
        len = 10;
    }
    while (id.length <= len) {
        id += getRandom(options);
    }
    if (id.length > len) {
        id.slice(0, -1);
    }
    return id;
};

module.exports = uid;