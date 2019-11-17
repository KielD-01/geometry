const octagon = require('../figures/octagon');
const helpers = require('../helpers');

const tests = {
    octagon: {
        dummyFunction: [
            {c: ['octagon'], r: 'Hello octagon!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, octagon.octagon);
};