function Colision()
{
    gravity2=0;
    player1.yVelocity = 0;
    player1.jumping = false;
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
    player1.y = heightMap - 100;
    player1.x = 0;
}

function Win()
{
    Colision();
    dialogW.open();
    level++;
    player1.y = heightMap - 100;
    player1.x = 0;
    gravity2=gravity;

    openPlatform1 = false;

    // mejsce cube1
    WhereItemlevel();
}

// create colision and drawing player
function createColisionAndDrawing(createY, createX1, createX2, color, lineW, attribute, heightMinus, heightPlus)
{
    //if colision
    if (player1.y > heightMap - createY - 50 - heightMinus && player1.y < heightMap - createY - 40 + heightPlus  && player1.x > createX1 - 32 && player1.x < createX2) 
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
    canvas.strokeStyle = color;
    canvas.lineWidth = lineW;
    canvas.beginPath();
    canvas.moveTo(createX1, heightMap - createY);
    canvas.lineTo(createX2, heightMap - createY);
    canvas.stroke();
}

// create colision cube1
function createColisionAndDrawingCube1(createY, createX1, createX2, attribute, heightMinus, heightPlus, cubeY, cubeX)
{
    //if colision
    if (cubeY > heightMap - createY - 50 - heightMinus && cubeY < heightMap - createY - 40 + heightPlus  && cubeX > createX1 - 32 && cubeX < createX2) 
    {
        eval(attribute);
    }
}

function drawingEverything()
{
    drawingItems();

    // player drawing
    canvas.fillStyle = "#fff487";
    canvas.beginPath();
    canvas.rect(player1.x, player1.y, player1.width, player1.height);
    canvas.fill();

    // ground drawing
    canvas.strokeStyle = "#444444";
    canvas.lineWidth = 30;
    canvas.beginPath();
    canvas.moveTo(0, heightMap - 15);
    canvas.lineTo(widthMap, heightMap - 15);
    canvas.stroke();
}

function groundItems(cubeY)
{
    eval
    (
        // level 5
        'if (' + cubeY + '> heightMap - 14 - 16 - 32)' +
        '{' +
        // cube1
        cubeY + ' = heightMap - 14 - 16 - 32;' +
        cubeY + 'Velocity = 0;' +
        '}'
    );
}