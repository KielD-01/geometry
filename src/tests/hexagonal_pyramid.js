const hexagonal_pyramid = require('../figures/hexagonal_pyramid');
const helpers = require('../helpers');

const tests = {
    hexagonal_pyramid: {
        dummyFunction: [
            {c: ['hexagonal_pyramid'], r: 'Hello hexagonal_pyramid!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, hexagonal_pyramid);
};