"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let position = 25;

drawSquares(position, position, 400);
drawSquares(position * 2, position * 2, 350);
drawSquares(position * 3, position * 3, 300);
drawSquares(position * 4, position * 4, 250);
drawSquares(position * 5, position * 5, 200);
drawSquares(position * 6, position * 6, 150);
drawSquares(position * 7, position * 7, 100);
drawSquares(position * 8, position * 8, 50);


function drawSquares(x, y, size) {
    context.fillStyle = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    context.beginPath();
    context.rect(x, y, size, size);
    context.fill();
}