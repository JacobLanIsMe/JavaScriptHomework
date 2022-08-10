for (let i = 1; i < 6; i++) {
    document.getElementById(`img${i}`).addEventListener("click", StarClicked);
    document.getElementById(`img${i}`).addEventListener("dblclick", StarDoubleClicked);
}
let oldStarId;
function StarClicked() {
    let starId = Number(event.target.id.substr(3));
    
    oldStarId = starId;
    for (let i = 1; i <= starId; i++) {
        document.getElementById(`img${i}`).style.filter = "grayscale(0)";
        
    }
    document.getElementById("scorediv").innerHTML = `你給${starId}顆星`;
}
function StarDoubleClicked() {
    let starId = Number(event.target.id.substr(3));
    for (let i = starId; i <= 5; i++) {
        document.getElementById(`img${i}`).style.filter = "grayscale(1)";
    }
    document.getElementById("scorediv").innerHTML = `你給${starId-1}顆星`;
}