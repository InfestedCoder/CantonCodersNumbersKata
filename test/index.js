var answer =  require('../index');
var assert = require('assert');

describe('meaning of life', () => {

    it('returns 42', () => {
        const result = answer();
        assert.equal(result, 42);
    });

});