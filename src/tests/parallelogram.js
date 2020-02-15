const parallelogram = require('../figures/parallelogram');
const helpers = require('../helpers');

const tests = {
    parallelogram: {
        dummyFunction: [
            {c: ['parallelogram'], r: 'Hello parallelogram!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, parallelogram);
};