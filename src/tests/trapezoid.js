const trapezoid = require('../figures/trapezoid');
const helpers = require('../helpers');

const tests = {
    trapezoid: {
        dummyFunction: [
            {c: ['trapezoid'], r: 'Hello trapezoid!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, trapezoid);
};