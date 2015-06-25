var assert = require('assert');
var id = require('../index.js');

function findCollisions(iterations){
    var basicID = id();
    for(var i =0; i<iterations; i++){
        if(id() === basicID){
            return true;
        }
    }
    return false;
}

describe('add', function(){
    it('there are no collisions', function(){
        assert.equal(findCollisions(1000), false);
    });
});
