const kite = require('../figures/kite');
const helpers = require('../helpers');

const tests = {
    kite: {
        dummyFunction: [
            {c: ['kite'], r: 'Hello kite!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, kite);
};