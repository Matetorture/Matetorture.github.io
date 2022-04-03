const loop = function () 
{

    // działanie klawisza skoku
    if (controller.up && player1.jumping == false) 
    {
        player1.yVelocity -= jumpHeight2;
        player1.jumping = true;

        //niwelacja odbiajczy
        jumpHeight2 = jumpHeight;
    }



    



    // działanie klawisza w lewo
    if (controller.left) {player1.xVelocity -= 0.5;}
    // działanie klawisza w prawo
    if (controller.right) { player1.xVelocity += 0.5; }

    // gravity
    player1.yVelocity += gravity2;
    player1.x += player1.xVelocity;
    player1.y += player1.yVelocity;

    createVelocityItems();
    
    // szybkość
    player1.xVelocity *= speed2;
    player1.yVelocity *= speed2;

    // Ground
    if (player1.y > heightMap - 14 - 16 - 32) 
    {
        player1.jumping = false;
        player1.y = heightMap - 14 - 16 - 32;
        player1.yVelocity = 0;
    }

    groundItems("cube1.y");

    // ! Site
    // Left
    if (player1.x < 0) { player1.x = 0; } 
    // Right
    else if (player1.x > widthMap - player1.width) { player1.x = widthMap - player1.width; }

    // ! Site
    // Left
    if (cube1.x < 1) 
    { 
        if (cube1.y - 1 < player1.y )
        { 
            player1.x = cube1.width;
        }
        else if (cube1.y < player1.y)
        {
            player1.x = 1; 
        }
        cube1.x = 1; 
    } 
    // Right
    else if (cube1.x > widthMap - cube1.width - 1) 
    { 
        if (cube1.y - 1 < player1.y )
        { 
            player1.x =  widthMap - cube1.width - 1 - cube1.width;
        }
        else if (cube1.y < player1.y)
        {
            player1.x = widthMap - cube1.width - 1;
        }
        cube1.x = widthMap - cube1.width - 1; 
    }

    // background drawing
    canvas.fillStyle = "#131313";
    canvas.fillRect(0, 0, widthMap, heightMap); 

    //Rysuje lewel
    drawingLevel();

    // Rysuje wszystko poza itemami
    drawingEverything();


    // update draw again
    window.requestAnimationFrame(loop);
}

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);


//game mode
const mode = document.querySelector('#mode');

mode.addEventListener("submit", (e) =>
{
    e.preventDefault();

    level = document.querySelector('#level').value;

    jumpHeight = document.querySelector('#jump').value;

    speed = document.querySelector('#speed').value;

    // reset ustawienia rzeczy
    level = level - 1;
    Win();
});