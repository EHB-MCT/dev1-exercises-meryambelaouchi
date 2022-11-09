"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let height = window.innerHeight;
let width = window.innerWidth;

drawDots();

function drawDots() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 10000; i++) {
        let x = width * Math.random();
        let y = height * Math.random();
        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        if (distance < 200) {
            context.fillStyle = 'red';
        } else {
            context.fillStyle = 'white';
        }

        Utils.fillCircle(x, y, 2);
    }
}