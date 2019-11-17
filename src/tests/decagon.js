const decagon = require('../figures/decagon');
const helpers = require('../helpers');

const tests = {
    decagon: {
        dummyFunction: [
            {c: ['decagon'], r: 'Hello decagon!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, decagon.decagon);
};