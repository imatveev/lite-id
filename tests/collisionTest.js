var assert = require('assert');
var id = require('../index.js');

function findCollisions(iterations){
    var basicID = id();
    for(var i =0; i<iterations; i++){
        if(id() === basicID){
            return false;
        }
    }
    return true;
}

/*describe('add', function(){
    it('there are no collisions', function(){
        assert.equal(findCollisions(200), true);
    });
});*/

console.log(id().length);