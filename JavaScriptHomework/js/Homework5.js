document.addEventListener("DOMContentLoaded", init);
document.getElementById("selectYear").addEventListener("change", ChangeYear);
document.getElementById("selectMonth").addEventListener("change", ChangeMonth);

let strYear = "";
for (let i = 2010; i <= 2025; i++) {
    strYear += `<option value="${i}" id="y${i}">${i}</option>`;
}
document.getElementById("selectYear").innerHTML = strYear; 
document.getElementById("y2020").selected = true;
let strMonth = "";
for (let i = 1; i <= 12; i++) {
    strMonth += `<option value="${i}" id="m${i}">${i}</option>`
}
document.getElementById("selectMonth").innerHTML = strMonth;

let year;
let month;
let date;
let bigMonth = [1, 3, 5, 7, 8, 10, 12];
let smallMonth = [4, 6, 9, 11];
function init(){
    document.getElementById("selectYear").selectedIndex = -1;
    document.getElementById("selectMonth").selectedIndex = -1;
    document.getElementById("selectDate").selectedIndex = -1;
}

function ChangeYear() {
    let selectedYear = document.getElementById("selectYear");
    let yearIndex = selectedYear.selectedIndex;
    year = selectedYear.options[yearIndex].value;
    document.getElementById("informationContent").innerHTML = `您選擇的日期是 ${year} 年 ${month} 月`;
}

function ChangeMonth() {
    let selectedMonth = document.getElementById("selectMonth");
    let monthIndex = selectedMonth.selectedIndex;
    month = selectedMonth.options[monthIndex].value;
    if (bigMonth.indexOf(month)) {

    }
}
console.log(year);


