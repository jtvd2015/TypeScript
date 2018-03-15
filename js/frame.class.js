"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Frames = /** @class */ (function () {
    function Frames(frame) {
        this.frame = frame;
        this.score = Math.floor(Math.random() * 11);
    }
    return Frames;
}());
exports.Frames = Frames;
