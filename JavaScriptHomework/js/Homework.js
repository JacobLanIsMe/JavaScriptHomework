function checkName() {
    let name = document.getElementById("name").value;
    let spanName = document.getElementById("spanName");
    let re = /[\u4e00-\u9fa5]{2,}/;
    if (re.test(name)) {
        spanName.innerHTML = "⭕Correct";
    } else {
        spanName.innerHTML = "❌Incorrect";
    }
}
function checkPwd() {
    let pwd = document.getElementById("pwd").value;
    let spanPwd = document.getElementById("spanPwd");
    let re = /[A-Za-z0-9!@#$%^&*]{6,}/;
    if (re.test(pwd)) {
        spanPwd.innerHTML = "⭕Correct";
    } else {
        spanPwd.innerHTML = "❌Incorrect";
    }
    //let flag1 = false, flag2 = false, falg3 = false;
    //if (pwd == "") {
    //    spanPwd.innerHTML = "❌密碼不能空白";
    //} else if (pwd.length < 6) {
    //    spanPwd.innerHTML = "❌密碼需要大於6個字元";
    //} else {
    //    for (let i = 0; i < pwd.length; i++) {
    //        if (pwd.charAt(i) >= "A" && pwd.charAt(i) <= "Z") {
    //            flag1 = true;
    //        } else if (pwd.charAt(i) >= "0" && pwd.charAt(i) <= "9") {
    //            flag2 = true;
    //        } else if (re.test(pwd.charAt(i))) {
    //            flag3 = true;
    //        }
    //        if (flag1 && flag2 && flag3) break;
    //    }
    //    if (flag1 && flag2 && flag3) spanPwd.innerHTML = "⭕Correct";
    //    else spanPwd.innerHTML = "❌Incorrect";
    //}
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
        spanDate.innerHTML = "⭕Correct";
    } else {
        spanDate.innerHTML = "❌Incorrect";
    }
}