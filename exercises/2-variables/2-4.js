"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

drawSunset();

function drawSunset() {
    context.fillStyle = '#EA9E24';
    context.beginPath();
    context.rect(0, 0, width, height / 4);
    context.fill();

    context.fillStyle = '#FC701B';
    context.beginPath();
    context.rect(0, height / 4, width, height / 4);
    context.fill();

    context.fillStyle = '#A51F02';
    context.beginPath();
    context.rect(0, height * 2 / 4, width, height / 4);
    context.fill();

    context.fillStyle = '#00198C';
    context.beginPath();
    context.rect(0, height * 3 / 4, width, height / 4);
    context.fill();

    context.fillStyle = '#FFFFC8';
    context.beginPath();
    context.arc(width / 2, height * 3 / 4, width / 4, Math.PI, 0);
    context.fill();
}