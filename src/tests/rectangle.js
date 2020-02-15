const rectangle = require('../figures/rectangle');
const helpers = require('../helpers');

const tests = {
    rectangle: {
        dummyFunction: [
            {c: ['rectangle'], r: 'Hello rectangle!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, rectangle);
};