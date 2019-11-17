const square_based_pyramid = require('../figures/square_based_pyramid');
const helpers = require('../helpers');

const tests = {
    square_based_pyramid: {
        dummyFunction: [
            {c: ['square_based_pyramid'], r: 'Hello square_based_pyramid!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, square_based_pyramid.square_based_pyramid);
};