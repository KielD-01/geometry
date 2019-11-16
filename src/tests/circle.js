const circle = require('../figures/circle');
const helpers = require('../helpers');

const tests = {
    circle: {
        dummyFunction: [
            {c: ['circle'], r: 'Hello circle!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, circle.circle);
};