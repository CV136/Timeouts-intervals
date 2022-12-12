let timerDiv = document.createElement("div")
let body = document.body
body.appendChild(timerDiv)

let minutesTimer = document.createElement("div")
body.appendChild(minutesTimer)

let time = 0
    
function elapsedTime() {
    timerDiv.innerHTML = time;
    time++;
    let minutesCounter = Number(time / 60)
    let minutes = Math.floor(minutesCounter)
    minutesTimer.innerHTML = `${minutes} minutes have passed`;
}
setInterval(elapsedTime, 1000)


