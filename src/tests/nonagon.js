const nonagon = require('../figures/nonagon');
const helpers = require('../helpers');

const tests = {
    nonagon: {
        dummyFunction: [
            {c: ['nonagon'], r: 'Hello nonagon!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, nonagon);
};