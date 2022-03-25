const clickerCounter = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("clicker__speed");
let img = document.getElementById("cookie");
let timerStart;
let timerEnd;
let timer;
img.onclick = () => {
    
    if ((Number(clickerCounter.textContent) % 2) == 0) {
        img.width += 20;
        img.hight += 20;
        timerStart = new Date;
        timer = (1 / ((timerStart -  timerEnd)/1000)).toFixed(2);

    }
    else {
        if (isNaN(clickSpeed.textContent)) clickSpeed.textContent = '0';
        img.width -= 20;
        img.hight -= 20;
        timerEnd = new Date;
        timer = (1 / ((timerEnd -  timerStart)/1000)).toFixed(2);
    }
    if (isNaN(timer)) timer = 0;
    else clickSpeed.textContent = timer;
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
}
