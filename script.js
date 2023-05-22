verifyWiner();
function verifyWiner(){
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1) {
        document.getElementById("button1").innerHTML = "Winner";
        document.getElementById("button2").innerHTML = "Loser";
        document.getElementById("button3").innerHTML = "Loser";
    } else if (randomNumber == 2) {
        document.getElementById("button1").innerHTML = "Loser";
        document.getElementById("button2").innerHTML = "Winner";
        document.getElementById("button3").innerHTML = "Loser";
    } else if (randomNumber == 3) {
        document.getElementById("button1").innerHTML = "Loser";
        document.getElementById("button2").innerHTML = "Loser";
        document.getElementById("button3").innerHTML = "Winner";
    }
}
button1.addEventListener('click', function onClick() {
    verifyWiner();
});
button2.addEventListener('click', function onClick() {
    verifyWiner();
});
button3.addEventListener('click', function onClick() {
    verifyWiner();
});