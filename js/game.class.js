"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_class_1 = require("./frame.class");
var Game = /** @class */ (function () {
    function Game(nbr) {
        this.frames = [];
        this.total = 0;
        this.nbr = nbr;
        for (var x_1 = 0; x_1 < 10; x_1++) {
            var f = new frame_class_1.Frame(x_1);
            this.frames.push(f);
            this.total += f.score;
        }
    }
    Game.prototype.print = function () {
        var msg = "";
        for (var _i = 0, _a = this.frames; _i < _a.length; _i++) {
            var frame = _a[_i];
            msg += frame.score + ",";
        }
        msg += "score " + this.total;
        console.log(msg);
    };
    return Game;
}());
exports.Game = Game;
