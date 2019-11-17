const ellipsoid = require('../figures/ellipsoid');
const helpers = require('../helpers');

const tests = {
    ellipsoid: {
        dummyFunction: [
            {c: ['ellipsoid'], r: 'Hello ellipsoid!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, ellipsoid.ellipsoid);
};