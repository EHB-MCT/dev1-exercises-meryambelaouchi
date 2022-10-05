"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSunset();

function drawSunset() {



    context.fillStyle = 'orange';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();

    context.fillStyle = 'yellow';
    context.beginPath();
    context.ellipse(200, 250, 100, 50, 0, 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = 'blue';
    context.beginPath();
    context.rect(50, 250, 300, 100);
    context.fill();



}