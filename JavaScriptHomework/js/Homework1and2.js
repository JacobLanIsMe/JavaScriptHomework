document.getElementById("name").addEventListener("blur", checkName);
document.getElementById("pwd").addEventListener("blur", checkPwd);
document.getElementById("date").addEventListener("blur", checkDate);


let correctIcon = "<img src='../img/correct.png'/>";
let incorrectIcon = "<img src='../img/incorrect.png'/>";
function checkName() {
    let name = document.getElementById("name").value;
    let spanName = document.getElementById("spanName");
    /*let re = /^[\u4e00-\u9fa5]{2,}$/;*/
    //if (re.test(name)) {
    //    spanName.innerHTML = `${correctIcon}Correct`;
    //} else {
    //    spanName.innerHTML = `${incorrectIcon}Incorrect`;
    //}
    
    let isChi = true;
    if (name == "") {
        spanName.innerHTML = `${incorrectIcon}姓名不能空白`;
    } else if (name.length < 2) {
        spanName.innerHTML = `${incorrectIcon}至少要兩個中文字`;
    } else {
        for (let i = 0; i < name.length; i++) {
            if (name.charCodeAt(i) < 0x4E00 || name.charCodeAt(i) > 0x9FA5) {
                spanName.innerHTML = `${incorrectIcon}必須全部為中文字`;
                isChi = false;
                break;
            }
        }
        if (isChi) spanName.innerHTML = `${correctIcon}Correct`;
    }
}
function checkPwd() {
    let pwd = document.getElementById("pwd").value.toUpperCase();
    let spanPwd = document.getElementById("spanPwd");
    //let re = /[A-Za-z0-9!@#$%^&*]{6,}/;
    //if (re.test(pwd)) {
    //    spanPwd.innerHTML = "⭕Correct";
    //} else {
    //    spanPwd.innerHTML = "❌Incorrect";
    //}
    let re = /[!@#$%^&*]{1,}/;
    let flag1 = false, flag2 = false, flag3 = false;
    if (pwd == "") {
        spanPwd.innerHTML = `${incorrectIcon}密碼不能空白`;
    } else if (pwd.length < 6) {
        spanPwd.innerHTML = `${incorrectIcon}密碼需要大於6個字`;
    } else {
        for (let i = 0; i < pwd.length; i++) {
            if (pwd.charAt(i) >= "A" && pwd.charAt(i) <= "Z") {
                flag1 = true;
            } else if (pwd.charAt(i) >= "0" && pwd.charAt(i) <= "9") {
                flag2 = true;
            } else if (re.test(pwd.charAt(i))) {
                flag3 = true;
            }
            if (flag1 && flag2 && flag3) break;
        }
        if (flag1 && flag2 && flag3) spanPwd.innerHTML = `${correctIcon}Correct`;
        else spanPwd.innerHTML = `${incorrectIcon}密碼格式錯誤`;
    }
}
function checkDate() {
    let myDate = document.getElementById("date").value;
    let spanDate = document.getElementById("spanDate");
    let correctDate = new Date(myDate);
    myDate = myDate.split("/");
    let myYear = myDate[0];
    let myMonth = myDate[1];
    let myDay = myDate[2];
    let correctYear = correctDate.getFullYear();
    let correctMonth = correctDate.getMonth() + 1;
    let correctDay = correctDate.getDate();
    if (myYear == correctYear && myMonth == correctMonth && myDay == correctDay) {
        spanDate.innerHTML = `${correctIcon}Correct`;
    } else {
        spanDate.innerHTML = `${incorrectIcon}Incorrect`;
    }
}
