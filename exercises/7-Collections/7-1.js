"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let height = window.innerHeight;
let width = window.innerWidth;
let numbers = [];

setup();

function setup() {

    for (let i = 0; i < 1000; i++) {
        numbers[i] = Utils.randomNumber(0, 100);
    }

    console.log(calculateAverage(numbers));


}

function calculateAverage(list) {
    let sum = 0;

    for (let j = 0; j < list.length; j++) {
        sum += list[j];
    }

    let average = sum / list.length;
    return average;

}