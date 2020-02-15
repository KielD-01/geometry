const cube = require('../figures/cube');
const helpers = require('../helpers');

const tests = {
    cube: {
        dummyFunction: [
            {c: ['cube'], r: 'Hello cube!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, cube);
};