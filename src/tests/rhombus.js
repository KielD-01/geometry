const rhombus = require('../figures/rhombus');
const helpers = require('../helpers');

const tests = {
    rhombus: {
        dummyFunction: [
            {c: ['rhombus'], r: 'Hello rhombus!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, rhombus);
};