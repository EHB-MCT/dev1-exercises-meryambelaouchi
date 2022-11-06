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
    for (let j = 0; j <= columns; j++) {
        for (let i = 0; i <= rows; i++) {
            let radius = stepHeight + 2;
            context.fillStyle = '#E87D7D';
            Utils.fillCircle(j * stepWidth, i * (radius * 4), radius);
            console.log(radius);

        }
    }

    for (let j = 0; j <= columns; j++) {
        for (let i = 0; i <= rows; i++) {
            let radius = stepHeight + 2;
            context.fillStyle = '#7dc4e8';
            Utils.fillCircle(i * stepWidth, stepWidth + j * (radius * 4), radius);
        }
    }

}