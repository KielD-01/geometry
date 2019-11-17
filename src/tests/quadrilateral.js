const quadrilateral = require('../figures/quadrilateral');
const helpers = require('../helpers');

const tests = {
    quadrilateral: {
        dummyFunction: [
            {c: ['quadrilateral'], r: 'Hello quadrilateral!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, quadrilateral.quadrilateral);
};