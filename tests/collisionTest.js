var id = require('../index.js');
var assert = require('assert');

function findCollisions(iterations){
    var basicID = id();
    for(var i =0; i<iterations; i++){
        if(id() === basicID){
            return false;
        }
    }
    return true;
}

describe('add', function(){
    it('there are no collisions', function(){
        assert.equal(findCollisions(200), true);
    });
});

function test(){
    var start = Date.now();
    var etalon = id();
    for(var i=0; i<6000000; i++){
        if(i%10000 == 0){
            process.stdout.write('\033c');
            process.stdout.write(i/60000+'%');
        }
        if(id() == etalon){
            return false;
        }
    }
    console.log(Date.now()-start);
}
//test();