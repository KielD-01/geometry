const trapezium = require('../figures/trapezium');
const helpers = require('../helpers');

const tests = {
    trapezium: {
        dummyFunction: [
            {c: ['trapezium'], r: 'Hello trapezium!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, trapezium.trapezium);
};