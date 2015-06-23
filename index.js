//     lite-id
//
//     Copyright (c) 2015 Ivan Matvieiev
//     MIT License - http://opensource.org/licenses/mit-license.php

var crypto = require('crypto');

function randomByte() {
    return Math.floor(crypto.randomBytes(256)[0]/10^crypto.randomBytes(256)[0]/10);
}

function getChar() {
    var alphabet = 'abcdefghijkl-_mnopqrstuvwxyz'.split('');
    return alphabet[Math.floor(Math.random() * 28)];
}
function getCase(char) {
    if (parseInt(randomByte()) % 2 === 0) {
        return char.toUpperCase();
    }
    else {
        return char;
    }
}

function getRandom(){
    if (Math.floor(Math.random() * randomByte()) % 2 === 0) {
        return randomByte();
    }
    else {
        return getCase(getChar());
    }
}

var uid = function (len) {
    var id = '';
    if (!len) {
        len = 10;
    }
    while(id.length<=len) {
        id += getRandom();
    }
    if(id.length>len){
        id.slice(0, -1);
    }
    return id;
};

module.exports = uid;