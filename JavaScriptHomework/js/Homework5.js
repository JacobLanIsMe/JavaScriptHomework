document.addEventListener("DOMContentLoaded", init);
document.getElementById("selectYear").addEventListener("change", ChangeYearOrMonth);
document.getElementById("selectMonth").addEventListener("change", ChangeYearOrMonth);
document.getElementById("selectDate").addEventListener("change", ChangeDate);


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
let IsSelectDate = false;

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
    document.getElementById("selectDate").value = "1";
    ShowCalender();
}

function ChangeYearOrMonth() {
    year = document.getElementById("selectYear").value;
    month = document.getElementById("selectMonth").value;
    AddDate();
    date = document.getElementById("selectDate").value;
    document.getElementById("informationContent").innerHTML = `您選擇的日期是 ${year} 年 ${month} 月 ${date} 日`;
    ShowCalender();
}

function ChangeDate() {
    if (IsSelectDate) ShowCalender();
    year = document.getElementById("selectYear").value;
    month = document.getElementById("selectMonth").value;
    date = document.getElementById("selectDate").value;
    document.getElementById("informationContent").innerHTML = `您選擇的日期是 ${year} 年 ${month} 月 ${date} 日`;
    document.getElementById(`c${date}`).style.backgroundColor = "#B9B973";
    document.getElementById(`c${date}`).style.color = "white";
    IsSelectDate = true;
    
}

function AddDate() {
    strDate = "";
    let count = DecideDayCount();
    
    for (let i = 1; i <= count; i++) {
        strDate += `<option value="${i}" id="d${i}">${i}</option>`;
    }
    document.getElementById("selectDate").innerHTML = strDate;
}

function ShowCalender() {
    let count = DecideDayCount();
    let firstDay = new Date(`${year}/${month}/1`).getDay();
    let weekcount = (Math.ceil((count - (7 - firstDay)) / 7)) + 1;
    let start = 1;
    let str = "";
    for (let i = 1; i <= weekcount; i++) {
        str += "<tr>";
        for (let j = 0; j < 7; j++) {
            if (i == 1 && j >= firstDay) {
                str += `<td id="c${start}">${start}</td>`;
                start += 1;
            } else if (i > 1 && start <= count) {
                str += `<td id="c${start}">${start}</td>`;
                start += 1;
            } else {
                str += `<td> </td>`;
            }
        }
        str += "</tr>";
    }
    document.getElementById("tbody").innerHTML = str;
    for (let i = 1; i <= count; i++) {
        document.getElementById(`c${i}`).addEventListener("mouseover", MouseOverCalender);
        document.getElementById(`c${i}`).addEventListener("mouseout", MouseOutCalender);
        document.getElementById(`c${i}`).addEventListener("click", ClickCalender);
    }
}

function DecideDayCount() {
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
    return count;
}

function MouseOverCalender() {
    if (date == this.id.substr(1)) return;
    document.getElementById(this.id).style.backgroundColor = "#DEDEBE";
    document.getElementById(this.id).style.color = "white";
    document.getElementById(this.id).style.cursor = "pointer";
}
function MouseOutCalender() {
    if (date == this.id.substr(1)) return;
    document.getElementById(this.id).style.backgroundColor = "#F0F0F0";
    document.getElementById(this.id).style.color = "black";
}
function ClickCalender() {
    document.getElementById("selectDate").value = this.id.substr(1);
    ChangeDate()
}






