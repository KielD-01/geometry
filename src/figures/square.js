/**
 * Returns square area
 *
 * @param a
 * @returns {number}
 */
getSquareArea = function (a) {
    return a < 0 ? 0 : Math.pow(a, 2);
};

/**
 * Returns square perimeter
 *
 * @param a
 * @returns {number}
 */
getSquarePerimeter = function (a) {
    return a < 0 ? 0 : a * 4;
};

/**
 * Returns square:
 * - Perimeter
 * - Area
 *
 * @param a
 * @returns {{getSquareArea: number, getSquarePerimeter: number}}
 */
getSquare = function (a) {
    return {
        getSquarePerimeter: getSquarePerimeter(a),
        getSquareArea: getSquareArea(a),
    }
};

module.exports = {
    getSquare,
    getSquarePerimeter,
    getSquareArea
};