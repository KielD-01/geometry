const cylinder = require('../figures/cylinder');
const helpers = require('../helpers');

const tests = {
    cylinder: {
        dummyFunction: [
            {c: ['cylinder'], r: 'Hello cylinder!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, cylinder);
};