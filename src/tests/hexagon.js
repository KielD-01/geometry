const hexagon = require('../figures/hexagon');
const helpers = require('../helpers');

const tests = {
    hexagon: {
        dummyFunction: [
            {c: ['hexagon'], r: 'Hello hexagon!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, hexagon);
};