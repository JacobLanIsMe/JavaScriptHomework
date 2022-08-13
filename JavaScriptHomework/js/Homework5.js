document.addEventListener("DOMContentLoaded", init);
document.getElementById("selectYear").addEventListener("change", ChangeYearOrMonth);
document.getElementById("selectMonth").addEventListener("change", ChangeYearOrMonth);

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
let strDate = "";
let today;
let year;
let month;
let date;
const bigMonth = [1, 3, 5, 7, 8, 10, 12];
const smallMonth = [4, 6, 9, 11];
function init() {
    today = new Date();
    year = today.getFullYear();
    month = today.getMonth()+1;
    date = today.getDate();
    document.getElementById("selectYear").value = year;
    document.getElementById("selectMonth").value = month;
    AddDate();
    document.getElementById("selectDate").value = date;
}

function ChangeYearOrMonth() {
    year = document.getElementById("selectYear").value;
    month = document.getElementById("selectMonth").value;
   /* date = document.getElementById("")*/
    AddDate();
    document.getElementById("informationContent").innerHTML = `您選擇的日期是 ${year} 年 ${month} 月`;
}


function AddDate() {
    strDate = "";
    let count;
    if (bigMonth.indexOf(parseInt(month)) != -1) {
        count = 31;
    } else if (smallMonth.indexOf(parseInt(month)) != -1) {
        count = 30;
    } else {
        let day1 = new Date(`${year}/${month}/29`);
        if (day1.getDate() != 29) count = 28;
        else count = 29;
    }
    for (let i = 1; i <= count; i++) {
        strDate += `<option value="${i}" id="d${i}">${i}</option>`;
    }
    document.getElementById("selectDate").innerHTML = strDate;
}








