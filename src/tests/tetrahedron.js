const tetrahedron = require('../figures/tetrahedron');
const helpers = require('../helpers');

const tests = {
    tetrahedron: {
        dummyFunction: [
            {c: ['tetrahedron'], r: 'Hello tetrahedron!'}
        ]
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, tetrahedron.tetrahedron);
};