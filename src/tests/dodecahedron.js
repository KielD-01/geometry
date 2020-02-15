const dodecahedron = require('../figures/dodecahedron');
const helpers = require('../helpers');

const tests = {
    dodecahedron: {
        dummyFunction: [
            {c: ['dodecahedron'], r: 'Hello dodecahedron!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, dodecahedron);
};