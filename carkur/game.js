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

    // ! dash
    timeNow = Date.now();
    timeDeltaDash = timeNow - timeDash;
    if (timeDeltaDash > dashCooldown && controller.dash)
    {
        timeDash = Date.now();
        dash();
    }
    if (timeDeltaDash/dashCooldown <= 1)
    {
        dashBar.style.width = timeDeltaDash/dashCooldown * 100 + "%";
        dashBar.innerHTML = Math.floor(timeDeltaDash/dashCooldown * 100);
    }
    else 
    {
        dashBar.style.width = "100%";
        dashBar.innerHTML = dashCooldown / 100;
    }

    // ! timer 
    timerString = min + ":" + secString + "." + milisec;
    if (sec >= 0 && sec <= 9)
    {
        secString = "0"+sec;
    }
    if (milisec >= 9)
    {
        milisec = 0;
        sec++;
        if (sec >= 0 && sec <= 9)
        {
            secString = "0"+sec;
        }
        else
        {
            secString = sec;
        }
    }
    if (sec >= 59)
    {
        sec = 0;
        min++;
    }
    

    // działanie klawisza w lewo
    if (controller.left) {player1.xVelocity -= 0.5; player1.rotationLeft = true; }
    // działanie klawisza w prawo
    if (controller.right) { player1.xVelocity += 0.5; player1.rotationLeft = false; }

    // gravity
    player1.yVelocity += gravity2;
    player1.x += player1.xVelocity;
    player1.y += player1.yVelocity;

    createVelocityItems();
    
    // szybkość
    player1.xVelocity *= speed2;
    player1.yVelocity *= speed2;

    if (player1.xVelocity < 0.1 && player1.xVelocity > 0.1)
    {
        player1.xVelocity = 0;
    }

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
    siteCube("player1", "cube1");

    // background drawing
    canvas.fillStyle = "#131313";
    canvas.fillRect(0, 0, widthMap, heightMap);
    
    // timer drawing
    canvas.fillStyle = "#242424";
    canvas.textAlign = 'center';
    canvas.font = "400px Arial";
    canvas.fillText(timerString, widthMap/2, heightMap/2 + 70);

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

// ! timer
setInterval(() => {
    milisec++;
}, 100);


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