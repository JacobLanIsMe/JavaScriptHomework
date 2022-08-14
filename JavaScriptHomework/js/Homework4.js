let startPlay = window.setInterval(PlayImage, 8000);
document.getElementById("play").addEventListener("click", PlayOrPause);
document.getElementById("imgdiv").addEventListener("mouseover", article4MouseOver);
document.getElementById("imgdiv").addEventListener("mouseout", article4MouseOut);
document.getElementById("imgdiv").addEventListener("click", LinkTo);
document.getElementById("previous").addEventListener("click", PreviousClick);
document.getElementById("next").addEventListener("click", NextClick);
let imageInfo = ["https://www.taiwanbear.org.tw/bear/bear/55",
    "https://zh.wikipedia.org/zh-tw/%E6%B2%99%E6%BC%A0",
    "https://sports.ettoday.net/news/2311871",
    "https://tour.taitung.gov.tw/zh-tw/attraction/details/429",
    "https://zh.wikipedia.org/wiki/%E5%8C%97%E6%A5%B5%E7%8B%BC",
    "https://zh.wikipedia.org/zh-tw/%E9%BB%83%E7%9F%B3%E5%9C%8B%E5%AE%B6%E5%85%AC%E5%9C%92",
    "https://tw.news.yahoo.com/%E5%8C%97%E5%B8%82%E5%BF%A0%E5%AD%9D%E8%A5%BF%E8%B7%AF%E5%A4%95%E9%99%BD%E6%87%B8%E6%97%A5%E7%BE%8E%E6%99%AF%E5%90%B8%E7%9D%9B-2-%E5%9C%96-104957463.html",
    "https://www.natgeomedia.com/science/article/content-15366.html",
    "https://zh.wikipedia.org/zh-tw/%E5%A4%A9%E4%BA%95",
    "https://dl.lib.ntu.edu.tw/s/photo/page/Home"];
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
document.getElementById("imgdiv").innerHTML = `<img src="img/homework4/${imageNum}.jpg" id="article4img${imageNum}" />`;
direction();
function PlayImage() {
    imageNum += 1;
    let oldImageNum = imageNum - 1;
    if (imageNum > 10) {
        imageNum = 1;
    }
    document.getElementById("imgdiv").innerHTML = `<img src="img/homework4/${oldImageNum}.jpg" id="article4img${oldImageNum}" /><img src="img/homework4/${imageNum}.jpg" id="article4img${imageNum}" />`;
    document.getElementById(`article4img${oldImageNum}`).style.right = "0";
    document.getElementById(`article4img${imageNum}`).style.right = "-100%";
    let oldImageObj = document.getElementById(`article4img${oldImageNum}`);
    let imageObj = document.getElementById(`article4img${imageNum}`);
    let shiftDistance = 0.5;
    let slide = setInterval(function () {
        if (shiftDistance > 100) {clearInterval(slide); return;}
        oldImageObj.style.right = `${shiftDistance}%`;
        imageObj.style.right = `${shiftDistance - 100}%`;
        shiftDistance += 0.5;
    }, 8);
    direction();
}

let IsPlay = true;


function direction() {
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
    clearInterval(startPlay);
    imageNum -= 1;
    let oldImageNum = imageNum + 1;
    if (imageNum < 1) {
        imageNum = 10;
    }
    document.getElementById("imgdiv").innerHTML = `<img src="img/homework4/${oldImageNum}.jpg" id="article4img${oldImageNum}" /><img src="img/homework4/${imageNum}.jpg" id="article4img${imageNum}" />`;
    document.getElementById(`article4img${oldImageNum}`).style.left = "0";
    document.getElementById(`article4img${imageNum}`).style.left = "-100%";
    let oldImageObj = document.getElementById(`article4img${oldImageNum}`);
    let imageObj = document.getElementById(`article4img${imageNum}`);
    let shiftDistance = 0.5;
    let slide = setInterval(function () {
        if (shiftDistance > 100) { clearInterval(slide); return; }
        oldImageObj.style.left = `${shiftDistance}%`;
        imageObj.style.left = `${shiftDistance - 100}%`;
        shiftDistance += 0.5;
    }, 8);
    direction();
    if (!IsPlay) return;
    startPlay = window.setInterval(PlayImage, 5000);
}
function NextClick() {
    clearInterval(startPlay);
    PlayImage();
    if (!IsPlay) return;
    startPlay = window.setInterval(PlayImage, 5000);
}

function CircleClick() {
    clearInterval(startPlay);
    imageNum = Number(this.id.substr(9));
    document.getElementById("imgdiv").innerHTML = `<img src="img/homework4/${imageNum}.jpg" id="article4img${imageNum}" />`;
    direction()
    if (!IsPlay) return;
    startPlay = window.setInterval(PlayImage, 5000);
}
function CircleMouseOver() {
    if (Number(this.id.substr(9)) == imageNum) return;
    document.getElementById(this.id).src = "img/dot.png";
}
function CircleMouseOut() {
    if (Number(this.id.substr(9)) == imageNum) return;
    document.getElementById(this.id).src = "img/circle.png";
}


function LinkTo() {
    window.open(imageInfo[imageNum-1], "_blank");
}



