const hexagonal_prism = require('../figures/hexagonal_prism');
const helpers = require('../helpers');

const tests = {
    hexagonal_prism: {
        dummyFunction: [
            {c: ['hexagonal_prism'], r: 'Hello hexagonal_prism!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, hexagonal_prism);
};