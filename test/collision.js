'use strict';

const id = require('../index.js');

const fillPool = (size, pool) => {
    while (pool.length < size) {
        pool.push(id());
        if(pool.length*100/size%1 == 0){
            process.stdout.write('\x1B[2J\x1B[0f\u001b[0;0H');
            process.stdout.write(pool.length*100/size+'%');
        }
    }
    return pool;
};

const checkBySort = iterations => {
    fillPool(iterations, [])
    .sort()
    .forEach((el, index, pool) => {
        if (el === pool[index+1]) {
            throw new Error(`Collision on ${el}`);
        }
    });
};

describe('collision', () => {
    it(`there are no collisions on ${process.env.NODE_COLLISION_THRESHOLD}`, () => {
        checkBySort(process.env.NODE_COLLISION_THRESHOLD);
    });
});
