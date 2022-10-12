"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

drawRects();

function drawRects() {

    context.fillStyle = '#2C3E50';
    context.beginPath();
    context.rect(0, 0, width, height);
    context.fill();

    context.fillStyle = '#3498DB';
    context.beginPath();
    context.rect(0, height * 4 / 6, width, height);
    context.fill();

    context.fillStyle = '#ECF0F1';
    context.beginPath();
    context.rect(width / 3, 0, width / 3, height);
    context.fill();

    context.fillStyle = '#E74C3C';
    context.beginPath();
    context.rect(0, height / 5, width, height / 4);
    context.fill();




}