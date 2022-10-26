"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let height = window.innerHeight;
let width = window.innerWidth;


drawBubbles();

function drawBubbles() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 100; i++) {

        let hue = Math.floor(Math.random() * 360);

        let random = Math.random();

        let marginHeight = Utils.randomNumber(200, height - 200);
        let marginWidth = Utils.randomNumber(200, width - 200);

        context.fillStyle = Utils.hsla(hue, 75, 50, 50);
        Utils.fillCircle(marginWidth, marginHeight, 50 * random);
    }
}