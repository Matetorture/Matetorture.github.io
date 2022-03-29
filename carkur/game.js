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

            // *  level 4 cube1
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
            
            var openPlatform = false;


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

                // * cube1
                cube1.yVelocity += gravityCube1;
                cube1.x += cube1.xVelocity;
                cube1.y += cube1.yVelocity;
                
                if (square.x < cube1.x + 33 && square.x > cube1.x - 33 && square.y < cube1.y + 33 && square.y > cube1.y - 33 && cube1.x > 0 && cube1.x < widthMap - square.width && level==4)
                {
                    cube1.x += square.xVelocity;
                    Colision();gravityTF = false;
                }

    
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

                // * cube1
                if (cube1.y > heightMap - 14 - 16 - 32) 
                {
                    cube1.y = heightMap - 14 - 16 - 32;
                    cube1.yVelocity = 0;
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

    
                    // * cube1 drawing
                    if (level==4)
                    {
                        context.fillStyle = "#A0522D";
                        context.beginPath();
                        context.rect(cube1.x, cube1.y, cube1.width, cube1.height);
                        context.fill(); 
                    }
                    

    // squer drawing
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
        createColisionAndDrawing(100, 1020, 1220, "#444444", 30, "Colision();", 0, 0);
        //belka 2
        createColisionAndDrawing(180, 1370, 1570, "#444444", 30, "Colision();", 0, 0);
        //belka 3
        createColisionAndDrawing(250, 1070, 1270, "#444444", 30, "Colision();", 0, 0);
        //lava 1
        createColisionAndDrawing(260, 70, 970, "#a70000", 70, "Dead();", 20, 70);
        //belka 4
        createColisionAndDrawing(325, 870, 920, "#444444", 30, "Colision();", 0, 0);
        //belka 5    
        createColisionAndDrawing(350, 700, 750, "#444444", 30, "Colision();", 0, 0);
        //belka 6    
        createColisionAndDrawing(450, 570, 620, "#444444", 30, "Colision();", 0, 0);
        //belka 7
        createColisionAndDrawing(520, 380, 430, "#444444", 30, "Colision();", 0, 0);
        //belka 8
        createColisionAndDrawing(600, 20, 220, "#444444", 30, "Colision();", 0, 0);
        //END
        createColisionAndDrawing(655, 70, 120, "#ffdc09", 80, "Win()", 20, 80);
    }
    //level 2
    else if (level==2)
    {
        //belka 1
        createColisionAndDrawing(100, 170, 220, "#444444", 30, "Colision();", 0, 0);
        //belka 2
        createColisionAndDrawing(150, 395, 445, "#444444", 30, "Colision();", 0, 0);
        //belka 3
        createColisionAndDrawing(150, 570, 620, "#444444", 30, "Colision();", 0, 0);
        //jump pad 1
        createColisionAndDrawing(225, 720, 920, "#006abc", 30, "JumpPad();", 0, 0);
        //belka 4
        createColisionAndDrawing(600, 970, 1120, "#444444", 30, "Colision();", 0, 0);
        //speed 1
        createColisionAndDrawing(600, 1120, 1420, "#FFA500", 30, "Speed();", 0, 0);
        //belka 5
        createColisionAndDrawing(600, 1420, 1570, "#444444", 30, "Colision();", 0, 0);
        //belka 6
        createColisionAndDrawing(400, 1520, 1620, "#444444", 30, "Colision();", 0, 0);
        //belka 7
        createColisionAndDrawing(250, 1220, 1420, "#444444", 30, "Colision();", 0, 0);
        //END
        createColisionAndDrawing(305, 1250, 1300, "#ffdc09", 80, "Win()", 20, 80);
    }
    //level 3
    else if (level==3)
    {
        //belka 1
        createColisionAndDrawing(100, 170, 220, "#444444", 30, "Colision();", 0, 0);
        //jump pad 1
        createColisionAndDrawing(210, 300, 400, "#006abc", 30, "JumpPad();", 0, 0);
        //belka 2
        createColisionAndDrawing(570, 500, 600, "#444444", 30, "Colision();", 0, 0);
        //speed 1
        createColisionAndDrawing(570, 600, 900, "#FFA500", 30, "Speed();", 0, 0);
        //lava 1
        createColisionAndDrawing(450, 520, 1380, "#a70000", 70, "Dead();", 20, 70);
        //belka 3
        createColisionAndDrawing(570, 1250, 1400, "#444444", 30, "Colision();", 0, 0);
        //belka 4
        createColisionAndDrawing(300, 1450, 1620, "#444444", 30, "Colision();", 0, 0);
        //belka 5
        createColisionAndDrawing(200, 1150, 1300, "#444444", 30, "Colision();", 0, 0);
        //belka 6
        createColisionAndDrawing(250, 950, 1020, "#444444", 30, "Colision();", 0, 0);
        //belka 7
        createColisionAndDrawing(250, 700, 820, "#444444", 30, "Colision();", 0, 0);
        //END
        createColisionAndDrawing(305, 720, 770, "#ffdc09", 80, "Win()", 20, 80);
    }
    else if (level==4)
    {
        gravityCube1 = 0.5;
        //belka 1
        createColisionAndDrawing(100, 170, 600, "#444444", 30, "Colision();", 0, 0); 
                        //belka 1 cube1
                        createColisionAndDrawingCube1(100, 170, 600, "#444444", 30, "gravityCube1=0; cube1.yVelocity = 0;", 0, 0);
         //button 1
         openPlatform = false;
         createColisionAndDrawing(30, 1200, 1230, "#bf8bff", 30, "openPlatform = true;", 0, 10); 
                        //button 1 cube1
                        createColisionAndDrawingCube1(30, 1200, 1230, "#bf8bff", 30,"openPlatform = true;", 0, 10);
        // platforma 1
        if (openPlatform==false)
        {
            createColisionAndDrawing(200, 650, 900, "#e5d0ff", 30, "", 0, 0);
        }
        else if (openPlatform==true)
        {
            createColisionAndDrawing(200, 650, 900, "#bf8bff", 30, "Colision();", 0, 0);
        }
        //belka 2
        createColisionAndDrawing(300, 950, 1000, "#444444", 30, "Colision();", 0, 0);
        //jump pad 1  
        createColisionAndDrawing(300, 1200, 1400, "#006abc", 30, "JumpPad();", 0, 0);
        //belka 3
        createColisionAndDrawing(600, 850, 1100, "#444444", 30, "Colision();", 0, 0);
        //END
        createColisionAndDrawing(655, 870, 920, "#ffdc09", 80, "Win()", 20, 80);
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
    if (square.y > heightMap - createY - 50 - heightMinus && square.y < heightMap - createY - 40 + heightPlus  && square.x > createX1 - 32 && square.x < createX2) 
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
                // * create colision cube1
                function createColisionAndDrawingCube1(createY, createX1, createX2, color, lineW, attribute, heightMinus, heightPlus)
                {
                    //if colision
                    if (cube1.y > heightMap - createY - 50 - heightMinus && cube1.y < heightMap - createY - 40 + heightPlus  && cube1.x > createX1 - 32 && cube1.x < createX2) 
                    {
                        eval(attribute);
                    }
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










