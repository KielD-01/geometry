const cone = require('../figures/cone');
const helpers = require('../helpers');

const tests = {
    cone: {
        dummyFunction: [
            {c: ['cone'], r: 'Hello cone!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, cone.cone);
};