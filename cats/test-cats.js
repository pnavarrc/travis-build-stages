var assert = require('assert');
var cats = require('./index');

describe('cats', function() {

  it('group name should be `clowder`', function() {
    assert.equal('clowder', cats.groupName());
  });

});
