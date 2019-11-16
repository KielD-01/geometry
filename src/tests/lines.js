const lines = require('../figures/lines');
const helpers = require('../helpers');

const tests = {
    lines: {
        getLineCoordinates: [
            {c: ['x'], r: '0,0'},
            {c: ['x', 2, -5], r: '-3,21'},
        ],
        dummyFunction: []
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, lines.lines);
};