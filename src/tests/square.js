const square = require('../figures/square');
const helpers = require('../helpers');

const tests = {
    square: {
        getSquare: [
            {
                c: [2],
                r: {
                    getSquarePerimeter: 8,
                    getSquareArea: 4,
                }
            }
        ],
        getSquareArea: [
            {c: [5], r: 25},
            {c: [-10], r: 100}, // Fail
            {c: [23], r: 529},
        ],
        getSquarePerimeter: []
    }
};

module.exports.t = function () {
    return helpers.runTests(tests, square.square);
};