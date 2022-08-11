let startPlay = window.setInterval(PlayImage, 5000);
document.getElementById("play").addEventListener("click", PlayOrPause);
document.getElementById("article4img").addEventListener("mouseover", article4MouseOver);
document.getElementById("article4img").addEventListener("mouseout", article4MouseOut);
document.getElementById("previous").addEventListener("click", PreviousClick);
document.getElementById("next").addEventListener("click", NextClick);
let str = "";
for (let i = 1; i <= 10; i++) {
    str += `<img src="img/circle.png" class="circleimg" id="circleimg${i}">`;
}
document.getElementById("selectdiv").innerHTML = str;
for (let i of document.getElementsByClassName("circleimg")) {
    document.getElementById(i.id).addEventListener("click", CircleClick);
    document.getElementById(i.id).addEventListener("mouseover", CircleMouseOver);
    document.getElementById(i.id).addEventListener("mouseout", CircleMouseOut);
}
let imageNum = 1;
ImageSelect();
function PlayImage() {
    imageNum += 1;
    if (imageNum > 10) {
        imageNum = 1;
    }
    ImageSelect();
}
let IsPlay = true;

function PlayOrPause() {
    IsPlay = !IsPlay;
    if (IsPlay) {
        document.getElementById("play").src = "img/pause.png";
        startPlay = window.setInterval(PlayImage, 5000);
    } else {
        document.getElementById("play").src = "img/play.png";
        clearInterval(startPlay);
    }
}
function article4MouseOver() {
    clearInterval(startPlay);
}
function article4MouseOut() {
    if (!IsPlay) return;
    startPlay = window.setInterval(PlayImage, 5000);
}
function PreviousClick() {
    imageNum -= 1;
    if (imageNum < 1) {
        imageNum = 10;
    }
    ImageSelect();
}
function NextClick(){
    imageNum += 1;
    if (imageNum > 10) {
        imageNum = 1;
    }
    ImageSelect();
}

function CircleClick(){
    imageNum = Number(this.id.substr(9));
    ImageSelect();
}
function CircleMouseOver() {
    if (Number(this.id.substr(9)) == imageNum) return;
    document.getElementById(this.id).src = "img/dot.png";
}
function CircleMouseOut() {
    if (Number(this.id.substr(9)) == imageNum) return;
    document.getElementById(this.id).src = "img/circle.png";
}



function ImageSelect() {
    document.getElementById("article4img").src = `img/homework4/${imageNum}.jpg`;
    for (let i = 1; i <= 10; i++) {
        if (i == imageNum) {
            document.getElementById(`circleimg${imageNum}`).src = "img/dash.png";
            document.getElementById(`circleimg${imageNum}`).style.width = "30px";
        } else {
            document.getElementById(`circleimg${i}`).src = "img/circle.png";
            document.getElementById(`circleimg${i}`).style.width = "10px";
        }
    }
}
