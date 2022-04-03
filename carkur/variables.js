const canvas = document.querySelector("canvas").getContext("2d");

var heightMap = 800;
var widthMap = 1620;

var gravity = 0.5;
var gravity2 = gravity;
var gravityTF = true;

var jumpHeight2 = 20;
var jumpHeight = 20;

var speed = 0.9;
var speed2 = speed;

canvas.canvas.height = heightMap;
canvas.canvas.width = widthMap;

// Level
var level = 1;


const player1 = 
{
  height: 32,
  jumping: true,
  width: 32,
  x: 0,
  xVelocity: 0,
  y: heightMap - 100,
  yVelocity: 0

};




// Sterowanie
const controller =
{
  left: false,
  right: false,
  up: false,
  keyListener: function (event) 
  {
    
    var key_state = (event.type == "keydown") ? true : false;

    switch (event.keyCode) 
    {
        // LEFT
        case 37:// LEFT Arrow 
        controller.left = key_state;
        break;
        case 65:// A
        controller.left = key_state;
        break;
    
        // UP
        case 38:// UP Arrow
        controller.up = key_state;
        break;
        case 87:// W
        controller.up = key_state;
        break;
        case 32:// Space
        controller.up = key_state;
        break;
    
        // RIGHT
        case 39:// RIGHT Arrow
        controller.right = key_state;
        break;
        case 68:// D
        controller.right = key_state;
        break;
    }
  }
}



// ! LEVELS

// cube1 
// level 5
const cube1 = 
{
    height: 32,
    width: 32,
    x: 500,
    xVelocity: 0,
    y: heightMap - 200,
    yVelocity: 0
};
var gravityCube1 = gravity;
var openPlatform1 = false;