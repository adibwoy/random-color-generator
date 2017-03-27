"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hexCodeArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var colorPref = "#";
var RandomColorGenerator = (function () {
    function RandomColorGenerator() {
    }
    RandomColorGenerator.GenerateRandomColor = function () {
        var colorCode = colorPref;
        for (var i = 0; i < 6; i++) {
            colorCode += hexCodeArr[Math.floor(Math.random() * 16)];
        }
        return colorCode;
    };
    return RandomColorGenerator;
}());
exports.RandomColorGenerator = RandomColorGenerator;
