"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let height = window.innerHeight;
let width = window.innerWidth;

let rows = 9;
let columns = 9;

let stepHeight = height / columns;
let stepWidth = width / rows;


drawCircles();

function drawCircles() {
    for (let i = 0; i <= columns; i++) {
        for (let j = 0; j <= rows; j++) {
            context.fillStyle = '#7dc4e8';
            Utils.fillCircle(0 + j * stepWidth, 0 + i * stepWidth, stepHeight + 2);
        }
    }
}