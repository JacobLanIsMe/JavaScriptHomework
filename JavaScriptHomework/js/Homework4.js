window.setInterval(PlayImage, 5000);
document.getElementById("play").

let imageNum = 2;
function PlayImage() {
    if (imageNum > 10) {
        imageNum = 1;
    }
    document.getElementById("article4img").src = `img/homework4/${imageNum}.jpg`;
    imageNum += 1;
}
