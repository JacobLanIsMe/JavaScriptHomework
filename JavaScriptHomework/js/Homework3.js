for (let i = 1; i < 6; i++) {
    document.getElementById(`img${i}`).addEventListener("click", StarClicked);
    document.getElementById(`img${i}`).addEventListener("dblclick", StarDoubleClicked);
}
let oldStarId = 0;
function StarClicked() {
    let starId = Number(event.target.id.substr(3));
    if (starId < oldStarId) {
        document.getElementById("scorediv").innerHTML = `你給${oldStarId}顆星`;
    } else {
        for (let i = 1; i <= starId; i++) {
            document.getElementById(`img${i}`).style.filter = "grayscale(0)";
        }
        document.getElementById("scorediv").innerHTML = `你給${starId}顆星`;
        oldStarId = starId;
    }
}
function StarDoubleClicked() {
    let starId = Number(event.target.id.substr(3));
    if (oldStarId > 1) {
        if (starId < oldStarId) {
            for (let i = starId; i <= 4; i++) {
                document.getElementById(`img${i + 1}`).style.filter = "grayscale(1)";
            }
            oldStarId = starId;
            document.getElementById("scorediv").innerHTML = `你給${oldStarId}顆星`;
        }
    } else if (oldStarId == 1) {
        if (starId == oldStarId) {
            document.getElementById("img1").style.filter = "grayscale(1)";
            oldStarId = 0;
            document.getElementById("scorediv").innerHTML = `你給${oldStarId}顆星`;
        }
    }
}