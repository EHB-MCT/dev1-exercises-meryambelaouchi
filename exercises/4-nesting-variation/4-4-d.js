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
    for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= columns; i++) {
            let radius = stepHeight + 2;
            context.fillStyle = '#E87D7D';
            Utils.fillCircle(j * (radius * 4), 0 + i * stepWidth, radius);
            console.log(radius);

        }
    }

    for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= columns; i++) {
            let radius = stepHeight + 2;
            context.fillStyle = '#7dc4e8';
            Utils.fillCircle(stepWidth + j * (radius * 4), 0 + i * stepWidth, radius);
        }
    }


}