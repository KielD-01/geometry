const icosahedron = require('../figures/icosahedron');
const helpers = require('../helpers');

const tests = {
    icosahedron: {
        dummyFunction: [
            {c: ['icosahedron'], r: 'Hello icosahedron!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, icosahedron.icosahedron);
};