const heptagon = require('../figures/heptagon');
const helpers = require('../helpers');

const tests = {
    heptagon: {
        dummyFunction: [
            {c: ['heptagon'], r: 'Hello heptagon!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, heptagon.heptagon);
};