const cuboid = require('../figures/cuboid');
const helpers = require('../helpers');

const tests = {
    cuboid: {
        dummyFunction: [
            {c: ['cuboid'], r: 'Hello cuboid!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, cuboid);
};