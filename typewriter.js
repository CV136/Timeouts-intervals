let prout = ["p", "r", "o", "u", "t"]
let i = 0
function typewriter() {
    console.log(prout[i]);
    i++;
}
setInterval(typewriter, 1000);
clearInterval(typewriter, 1000)
