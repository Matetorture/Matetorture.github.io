const cursor = document.querySelector('.cursor');

//Rusza customowym cursorem
document.addEventListener('mousemove', e => 
{
    //przesuwa customowy cursor w miejsce prawdziwego cursora
    cursor.setAttribute("style", "top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;")            
})

//Animacja clickania
document.addEventListener('click', () => 
{
    //dodaje do classy clickanie
    cursor.classList.add("clickanie");
    //usówa po czasie żeby wruciło do normy
    setTimeout(() => {cursor.classList.remove("clickanie")}, 100)
})

//Kiedy najedziesz na clickalną rzecz
function OnMouse()
{
    //dodanie do classy hover
    cursor.classList.add("hover");
}
//Kiedy najedziesz na nie clickalną rzecz
function NoOnMouse()
{
    //usunięcie z classy hover
    cursor.classList.remove("hover");
}

//Czy stać cię na upgrade
function CzyStac()
{
    //Upgrade 1
    if (score < shop1C)
    {
        document.getElementById("shop1").style.color = "#ff0000";
        document.getElementById("shop1buy").style.color = "#ff0000";
    }
    else
    {
        document.getElementById("shop1").style.color = "#adff2f";
        document.getElementById("shop1buy").style.color = "#adff2f";
    }
    //Upgrade 2
    if (score < shop2C)
    {
        document.getElementById("shop2").style.color = "#ff0000";
        document.getElementById("shop2buy").style.color = "#ff0000";
    }
    else
    {
        document.getElementById("shop2").style.color = "#adff2f";
        document.getElementById("shop2buy").style.color = "#adff2f";
    }
    //Upgrade 3
    if (score < shop3C)
    {
        document.getElementById("shop3").style.color = "#ff0000";
        document.getElementById("shop3buy").style.color = "#ff0000";
    }
    else
    {
        document.getElementById("shop3").style.color = "#adff2f";
        document.getElementById("shop3buy").style.color = "#adff2f";
    }
    //Upgrade 4
    if (score < shop4C)
    {
        document.getElementById("shop4").style.color = "#ff0000";
        document.getElementById("shop4buy").style.color = "#ff0000";
    }
    else
    {
        document.getElementById("shop4").style.color = "#adff2f";
        document.getElementById("shop4buy").style.color = "#adff2f";
    }



    //Powtórzenie
    setTimeout("CzyStac()", 100);
}