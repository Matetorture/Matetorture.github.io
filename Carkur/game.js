const context = document.querySelector("canvas").getContext("2d");

var heightMap = 800;
var widthMap = 1620;
var gravity = 0.5;

var gravity2 = gravity;

context.canvas.height = heightMap;
context.canvas.width = widthMap;

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
};

const loop = function () {

    // działanie klawisza skoku
    if (controller.up && square.jumping == false) 
    {
        square.yVelocity -= 20;
        square.jumping = true;
    }

    // działanie klawisza w lewo
    if (controller.left) {square.xVelocity -= 0.5;}
    // działanie klawisza w prawo
    if (controller.right) { square.xVelocity += 0.5; }

    // gravity
    square.yVelocity += gravity;
    square.x += square.xVelocity;
    square.y += square.yVelocity;
    
    // ślizg
    square.xVelocity *= 0.9;
    // square.xVelocity *= 0.5;
    square.yVelocity *= 0.9;

    // Ground Teren
    if (square.y > heightMap - 14 - 16 - 32) 
    {
        square.jumping = false;
        square.y = heightMap - 14 - 16 - 32;
        square.yVelocity = 0;
    }

    // ! Boki
    // Lewy
    if (square.x < -20) { square.x = -15; } 
    // Prawy
    else if (square.x > widthMap - 15) { square.x = widthMap - 20; }

    // back for each frame
    context.fillStyle = "#131313";
    context.fillRect(0, 0, widthMap, heightMap); 

    //Rysuje lewel
    drawLevel();

    // Cube for each frame
    context.fillStyle = "#fff487";
    context.beginPath();
    context.rect(square.x, square.y, square.width, square.height);
    context.fill();


    // ground for each frame
    context.strokeStyle = "#444444";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(0, heightMap - 15);
    context.lineTo(widthMap, heightMap - 15);
    context.stroke();


    // console.log('x: '+square.x+' y:'+square.y);

    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);
};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);

function drawLevel()
{
    // if (square.y > heightMap - y - 49 && square.y < heightMap - y - 40 && square.x < widthMap - x && square.x > widthMap - x - 22 ) 
    // {
    //     Colision();
    // }

    //belka 1
    if (square.y > heightMap - 100 - 49 && square.y < heightMap - 100 - 40 && square.x < widthMap - 400 && square.x > widthMap - 600 - 22 ) 
    {
        Colision();
    }
    //belka 2
    else if (square.y > heightMap - 180 - 49 && square.y < heightMap - 180 - 40 && square.x < widthMap - 50 && square.x > widthMap - 250 - 22) 
    {
        Colision();
    }
    //belka 3
    else if (square.y > heightMap - 250 - 49 && square.y < heightMap - 250 - 40 && square.x < widthMap - 350 && square.x > widthMap - 550 - 22 ) 
    {
        Colision();
    }
    // lava 1
    else if (square.y > heightMap - 260 - 69 && square.y < heightMap - 220 - 20 && square.x < widthMap - 650 && square.x > widthMap - 1550 - 22 ) 
    {
        Dead();
        Colision();
    }
    //belka 4
    else if (square.y > heightMap - 325 - 49 && square.y < heightMap - 325 - 40 && square.x < widthMap - 700 && square.x > widthMap - 750 - 22 ) 
    {
        Colision();
    }
    //belka 5
    else if (square.y > heightMap - 350 - 49 && square.y < heightMap - 350 - 40 && square.x < widthMap - 900 && square.x > widthMap - 950 - 22 ) 
    {
        Colision();
    }
    //belka 6
    else if (square.y > heightMap - 450 - 49 && square.y < heightMap - 450 - 40 && square.x < widthMap - 1025 && square.x > widthMap - 1075 - 22 ) 
    {
        Colision();
    }
    //belka 7
    else if (square.y > heightMap - 500 - 49 && square.y < heightMap - 500 - 40 && square.x < widthMap - 1225 && square.x > widthMap - 1275 - 22 ) 
    {
        Colision();
    }
    //belka 7
    else if (square.y > heightMap - 600 - 49 && square.y < heightMap - 600 - 40 && square.x < widthMap - 1400 && square.x > widthMap - 1600 - 22 ) 
    {
        Colision();
    }
    //END
    else if (square.y > heightMap - 655 - 49 && square.y < heightMap - 655 - 40 && square.x < widthMap - 1500 && square.x > widthMap - 1550 - 22 ) 
    {
        alert('win');
    }




    //bez belki
    else
    {
        gravity=gravity2;
    }

    //belka 1 rysunek
    context.strokeStyle = "#444444";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(widthMap - 400, heightMap - 100);
    context.lineTo(widthMap - 600, heightMap - 100);
    context.stroke();

    //belka 2 rysunek
    context.strokeStyle = "#444444";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(widthMap - 50, heightMap - 180);
    context.lineTo(widthMap - 250, heightMap - 180);
    context.stroke();

    //belka 3 rysunek
    context.strokeStyle = "#444444";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(widthMap - 350, heightMap - 250);
    context.lineTo(widthMap - 550, heightMap - 250);
    context.stroke();

    //lava 1 rysunek
    context.strokeStyle = "#e56520";
    context.lineWidth = 70;
    context.beginPath();
    context.moveTo(widthMap - 650, heightMap - 260);
    context.lineTo(widthMap - 1550, heightMap - 260);
    context.stroke();

    //belka 4 rysunek
    context.strokeStyle = "#444444";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(widthMap - 700, heightMap - 325);
    context.lineTo(widthMap - 750, heightMap - 325);
    context.stroke();

    //belka 5 rysunek
    context.strokeStyle = "#444444";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(widthMap - 900, heightMap - 350);
    context.lineTo(widthMap - 950, heightMap - 350);
    context.stroke();

    //belka 6 rysunek
    context.strokeStyle = "#444444";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(widthMap - 1025, heightMap - 450);
    context.lineTo(widthMap - 1075, heightMap - 450);
    context.stroke();

    //belka 7 rysunek
    context.strokeStyle = "#444444";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(widthMap - 1225, heightMap - 500);
    context.lineTo(widthMap - 1275, heightMap - 500);
    context.stroke();

    //belka 8 rysunek
    context.strokeStyle = "#444444";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(widthMap - 1400, heightMap - 600);
    context.lineTo(widthMap - 1600, heightMap - 600);
    context.stroke();

    //END
    context.strokeStyle = "#ffdc09";
    context.lineWidth = 80;
    context.beginPath();
    context.moveTo(widthMap - 1500, heightMap - 655);
    context.lineTo(widthMap - 1550, heightMap - 655);
    context.stroke();
};
function Colision()
{
    gravity=0;
    square.yVelocity = 0;
    square.jumping = false;
};

function Dead()
{
    square.y = heightMap - 100;
    square.x = 0;
};