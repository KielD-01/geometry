const ellipse = require('../figures/ellipse');
const helpers = require('../helpers');

const tests = {
    ellipse: {
        dummyFunction: [
            {c: ['ellipse'], r: 'Hello ellipse!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, ellipse.ellipse);
};