//     lite-id
//
//     Copyright (c) 2015 Ivan Matvieiev
//     MIT License - http://opensource.org/licenses/mit-license.php
'use strict';

const crypto = require('crypto');

const randomByte = () => ~~crypto.randomBytes(1)[0].toString()[0];

const getChar = () => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz-_ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return alphabet[~~(Math.random() * alphabet.length)];
};

const getRandom = () => {
    return randomByte() % 2 === 0 ? randomByte() : getChar();
};

const uid = (len, id) => {
    len = len || 10;
    id = id || '';
    if(id.length === len) {
        return id;
    }
    return uid(len, id + getRandom());
};

module.exports = uid;
