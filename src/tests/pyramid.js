const pyramid = require('../figures/pyramid');
const helpers = require('../helpers');

const tests = {
    pyramid: {
        dummyFunction: [
            {c: ['pyramid'], r: 'Hello pyramid!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, pyramid.pyramid);
};