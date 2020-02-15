const triangular_prism = require('../figures/triangular_prism');
const helpers = require('../helpers');

const tests = {
    triangular_prism: {
        dummyFunction: [
            {c: ['triangular_prism'], r: 'Hello triangular_prism!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, triangular_prism);
};