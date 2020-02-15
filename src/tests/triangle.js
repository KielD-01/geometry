const triangle = require('../figures/triangle');
const helpers = require('../helpers');

const tests = {
    triangle: {
        dummyFunction: [
            {c: ['triangle'], r: 'Hello triangle!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, triangle);
};