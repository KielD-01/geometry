const sphere = require('../figures/sphere');
const helpers = require('../helpers');

const tests = {
    sphere: {
        dummyFunction: [
            {c: ['sphere'], r: 'Hello sphere!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, sphere);
};