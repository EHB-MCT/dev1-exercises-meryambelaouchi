"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let height = window.innerHeight;
let width = window.innerWidth;

let frameCount = 50;

window.onclick = get;

drawCircle();

function drawCircle() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    console.log(frameCount);
    requestAnimationFrame(drawCircle);

    if (frameCount >= width) {
        context.fillStyle = 'blue';
        Utils.fillCircle(frameCount, 50, 50);
        frameCount--;
    } else {
        context.fillStyle = 'blue';
        Utils.fillCircle(frameCount, 50, 50);
        frameCount++;
    }
}

function get() {
    context.fillStyle = 'red';
    Utils.fillCircle(frameCount, 50, 25);
}