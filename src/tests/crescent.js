const crescent = require('../figures/crescent');
const helpers = require('../helpers');

const tests = {
    crescent: {
        dummyFunction: [
            {c: ['crescent'], r: 'Hello crescent!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, crescent);
};