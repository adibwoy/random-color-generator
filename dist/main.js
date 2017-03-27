"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var random_color_generator_1 = require("./random-color-generator");
var MainApp = (function () {
    function MainApp() {
        this._colorBackgroundElement = document.getElementById("color-background");
        this._colorCodeElement = document.getElementById("color-code");
        this.listenToSpaceBar();
        this.listenToClick();
        this.changeBackgroundColor();
    }
    MainApp.prototype.changeBackgroundColor = function () {
        var newColor = random_color_generator_1.RandomColorGenerator.GenerateRandomColor();
        this._colorBackgroundElement.style.backgroundColor = newColor;
        this._colorCodeElement.innerText = newColor;
    };
    MainApp.prototype.listenToSpaceBar = function () {
        var self = this;
        document.body.onkeyup = function (e) {
            if (e.keyCode == 32) {
                self.changeBackgroundColor();
            }
        };
    };
    MainApp.prototype.listenToClick = function () {
        var self = this;
        this._colorBackgroundElement.onclick = function (e) {
            self.changeBackgroundColor();
        };
        this._colorCodeElement.onclick = function (e) {
            e.stopPropagation();
        };
    };
    return MainApp;
}());
exports.MainApp = MainApp;
new MainApp();
