
let oUser = document.getElementById("userId");
let oPass = document.getElementById("passId");
let oPhone = document.getElementById("phone");

function isUser() {
    var reg = /^[a-zA-Z\u4E00-\u9FA5][a-zA-Z0-9\u4E00-\u9FA5]{1,15}$/;
    if (reg.test(oUser.value)) {
        oUser.nextElementSibling.innerHTML = "√";
    } else {
        oUser.nextElementSibling.innerHTML = "×，数字，字母，汉字组成，不能以数字开头，2-16位";
    }
}

function isPass() {
    var reg = /^[\da-zA-Z]{6,16}$/;
    if (reg.test(oPass.value)) {
        oPass.nextElementSibling.innerHTML = "√";
    } else {
        oPass.nextElementSibling.innerHTML = "×，6-16位数字和字母";
    }
}

function isPhone() {
    var reg = /^1[0-9]{10}$/;
    if (reg.test(oPhone.value)) {
        oPhone.nextElementSibling.innerHTML = "√";
    } else {
        oPhone.nextElementSibling.innerHTML = "×";
    }
}

oUser.onblur = function () {
    isUser();
}

oPass.onblur = function () {
    isPass();
}

oPhone.onblur = function () {
    isPhone();
}