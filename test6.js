/**
 * Created by blu on 9/2/15.
 */

var evens = [2, 4, 6];
var odds = evens.map(function (v) {
    return v + 1;
});

module.exports = {
    odds: odds
};
