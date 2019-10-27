/**
 * Returns line coordinates
 *
 * @param axis
 * @param startCoordinatePoint
 * @param length
 * @returns {string}
 */
getLineCoordinates = function (axis = 'x', startCoordinatePoint = 0, length = 0) {
    let path = length < 0 ?
        [startCoordinatePoint - Math.abs(length), startCoordinatePoint] :
        [startCoordinatePoint, startCoordinatePoint + length];

    return `${axis} = ${path}`;
};

module.exports.getLineCoordinates = getLineCoordinates;

module.exports.lines = {
    getLineCoordinates,
};