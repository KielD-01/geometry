const triangular_based_pyramid = require('../figures/triangular_based_pyramid');
const helpers = require('../helpers');

const tests = {
    triangular_based_pyramid: {
        dummyFunction: [
            {c: ['triangular_based_pyramid'], r: 'Hello triangular_based_pyramid!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, triangular_based_pyramid);
};