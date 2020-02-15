const octahedron = require('../figures/octahedron');
const helpers = require('../helpers');

const tests = {
    octahedron: {
        dummyFunction: [
            {c: ['octahedron'], r: 'Hello octahedron!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, octahedron);
};