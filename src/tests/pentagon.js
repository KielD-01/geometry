const pentagon = require('../figures/pentagon');
const helpers = require('../helpers');

const tests = {
    pentagon: {
        dummyFunction: [
            {c: ['pentagon'], r: 'Hello pentagon!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, pentagon.pentagon);
};