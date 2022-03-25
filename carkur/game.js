const context = document.querySelector("canvas").getContext("2d");

var heightMap = 800;
var widthMap = 1620;

var gravity = 0.5;
var gravity2 = gravity;
var gravityTF = true;

var jumpHeight2 = 20;
var jumpHeight = 20;

var speed = 0.9;
var speed2 = speed;

context.canvas.height = heightMap;
context.canvas.width = widthMap;

var level = 1;

const square = 
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

const loop = function () 
{

    // działanie klawisza skoku
    if (controller.up && square.jumping == false) 
    {
        square.yVelocity -= jumpHeight2;
        square.jumping = true;

        //niwelacja odbiajczy
        jumpHeight2 = jumpHeight;
    }

    // działanie klawisza w lewo
    if (controller.left) {square.xVelocity -= 0.5;}
    // działanie klawisza w prawo
    if (controller.right) { square.xVelocity += 0.5; }

    // gravity
    square.yVelocity += gravity2;
    square.x += square.xVelocity;
    square.y += square.yVelocity;
    
    // szybkość
    square.xVelocity *= speed2;
    square.yVelocity *= speed2;

    // Ground
    if (square.y > heightMap - 14 - 16 - 32) 
    {
        square.jumping = false;
        square.y = heightMap - 14 - 16 - 32;
        square.yVelocity = 0;
    }

    // ! Site
    // Left
    if (square.x < 0) { square.x = 0; } 
    // Right
    else if (square.x > widthMap - square.width) { square.x = widthMap - square.width; }

    // background drawing
    context.fillStyle = "#131313";
    context.fillRect(0, 0, widthMap, heightMap); 

    //Rysuje lewel
    drawingLevel();

    // Cube drawing
    context.fillStyle = "#fff487";
    context.beginPath();
    context.rect(square.x, square.y, square.width, square.height);
    context.fill();


    // ground drawing
    context.strokeStyle = "#444444";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(0, heightMap - 15);
    context.lineTo(widthMap, heightMap - 15);
    context.stroke();

    // update draw again
    window.requestAnimationFrame(loop);
}

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);

function drawingLevel()
{
    //level 1
    if (level==1)
    {
        //belka 1
        createColisionAndDrawing(100, 1220, 1020, "#444444", 30, "Colision();", 0, 0);
        //belka 2
        createColisionAndDrawing(180, 1570, 1370, "#444444", 30, "Colision();", 0, 0);
        //belka 3
        createColisionAndDrawing(250, 1270, 1070, "#444444", 30, "Colision();", 0, 0);
        //lava 1
        createColisionAndDrawing(260, 970, 70, "#a70000", 70, "Dead();", 20, 70);
        //belka 4
        createColisionAndDrawing(325, 920, 870, "#444444", 30, "Colision();", 0, 0);
        //belka 5    
        createColisionAndDrawing(350, 750, 700, "#444444", 30, "Colision();", 0, 0);
        //belka 6    
        createColisionAndDrawing(450, 620, 570, "#444444", 30, "Colision();", 0, 0);
        //belka 7
        createColisionAndDrawing(520, 430, 380, "#444444", 30, "Colision();", 0, 0);
        //belka 8
        createColisionAndDrawing(600, 220, 20, "#444444", 30, "Colision();", 0, 0);
        //END
        createColisionAndDrawing(655, 120, 70, "#ffdc09", 80, "Win()", 20, 80);
    }
    //level 2
    else if (level==2)
    {
        //belka 1
        createColisionAndDrawing(100, 220, 170, "#444444", 30, "Colision();", 0, 0);
        //belka 2
        createColisionAndDrawing(150, 445, 395, "#444444", 30, "Colision();", 0, 0);
        //belka 3
        createColisionAndDrawing(150, 620, 570, "#444444", 30, "Colision();", 0, 0);
        //jump pad 1
        createColisionAndDrawing(225, 920, 720, "#006abc", 30, "JumpPad();", 0, 0);
        //belka 4
        createColisionAndDrawing(600, 1120, 970, "#444444", 30, "Colision();", 0, 0);
        //speed 1
        createColisionAndDrawing(600, 1420, 1120, "#FFA500", 30, "Speed();", 0, 0);
        //belka 5
        createColisionAndDrawing(600, 1570, 1420, "#444444", 30, "Colision();", 0, 0);
        //belka 6
        createColisionAndDrawing(400, 1620, 1520, "#444444", 30, "Colision();", 0, 0);
        //belka 7
        createColisionAndDrawing(250, 1420, 1220, "#444444", 30, "Colision();", 0, 0);
        //END
        createColisionAndDrawing(305, 1370, 1320, "#ffdc09", 80, "Win()", 20, 80);
    }
    //level 3
    else if (level==3)
    {
        //belka 1
        createColisionAndDrawing(100, 220, 170, "#444444", 30, "Colision();", 0, 0);
        //jump pad 1
        createColisionAndDrawing(210, 400, 300, "#006abc", 30, "JumpPad();", 0, 0);
        //belka 2
        createColisionAndDrawing(570, 600, 500, "#444444", 30, "Colision();", 0, 0);
        //speed 1
        createColisionAndDrawing(570, 900, 600, "#FFA500", 30, "Speed();", 0, 0);
        //lava 1
        createColisionAndDrawing(450, 1380, 520, "#a70000", 70, "Dead();", 20, 70);
        //belka 3
        createColisionAndDrawing(570, 1400, 1250, "#444444", 30, "Colision();", 0, 0);
        //belka 4
        createColisionAndDrawing(300, 1620, 1450, "#444444", 30, "Colision();", 0, 0);
        //belka 5
        createColisionAndDrawing(300, 1620, 1450, "#444444", 30, "Colision();", 0, 0);
        //belka 6
        createColisionAndDrawing(200, 1270, 1150, "#444444", 30, "Colision();", 0, 0);
        //belka 7
        createColisionAndDrawing(250, 1020, 950, "#444444", 30, "Colision();", 0, 0);
        //belka 8
        createColisionAndDrawing(250, 820, 700, "#444444", 30, "Colision();", 0, 0);
        //END
        createColisionAndDrawing(305, 770, 720, "#ffdc09", 80, "Win()", 20, 80);
    }
    // no colison
    gravityTF = true;
}

function Colision()
{
    gravity2=0;
    square.yVelocity = 0;
    square.jumping = false;
}
function JumpPad()
{
    Colision();
    jumpHeight2 = 50;
}
function Speed()
{
    Colision();
    speed2=0.97;
}
function Dead()
{
    square.y = heightMap - 100;
    square.x = 0;
}
function Win()
{
    Colision();
    dialogW.open();
    level++;
    square.y = heightMap - 100;
    square.x = 0;
    gravity2=gravity;
}

function createColisionAndDrawing(createY, createX1, createX2, color, lineW, attribute, heightMinus, heightPlus)
{
    //if colision
    if (square.y > heightMap - createY - 50 - heightMinus && square.y < heightMap - createY - 40 + heightPlus && square.x < createX1 && square.x > createX2 - 32) 
    {
        eval(attribute);
        gravityTF = false;
    }
    //if no colison
    if (gravityTF == true)
    {
        gravity2=gravity;
        speed2 = speed;
    }

    //drawing
    context.strokeStyle = color;
    context.lineWidth = lineW;
    context.beginPath();
    context.moveTo(createX1, heightMap - createY);
    context.lineTo(createX2, heightMap - createY);
    context.stroke();
}

//game mode
const mode = document.querySelector('#mode');

mode.addEventListener("submit", (e) =>
{
    e.preventDefault();

    level = document.querySelector('#level').value;

    jumpHeight = document.querySelector('#jump').value;

    speed = document.querySelector('#speed').value;
});