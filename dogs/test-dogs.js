var assert = require('assert');
var dogs = require('./index');

describe('dogs', function() {

  it('group name should be `pack`', function() {
    assert.equal('pack', dogs.groupName());
  });

});
