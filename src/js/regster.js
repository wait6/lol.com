let isRight = [0, 0, 0];

    let oUser = document.getElementById("userId");
    let oPass = document.getElementById("passId");
    let oPhone = document.getElementById("phone");
    let oBtnReg = document.getElementById("btnReg");
    let msaBox = document.getElementById("messagebox");

    oUser.onblur = function () {
        isUser();
        if (isRight[0] == 1) {
            hasUser();
        }
    }

    function isUser() {
        var reg = /^[a-zA-Z\u4E00-\u9FA5][a-zA-Z0-9\u4E00-\u9FA5]{1,15}$/;
        if (reg.test(oUser.value)) {
            isRight[0] = 1;
            oUser.nextElementSibling.innerHTML = "√";
        } else {
            isRight[0] = 0;
            oUser.nextElementSibling.innerHTML = "×，数字，字母，汉字组成，不能以数字开头，2-16位";
        }
    }

    function hasUser() {
        ajax({
            url: "./php/checkUser.php",
            params: "username=" + oUser.value,
            callback: function (str) {
                if (str == "1") {
                    isRight[3] = 0;
                    oUser.nextElementSibling.innerHTML = "该用户已存在";
                } else if (str == "0") {
                    isRight[3] = 1;
                    oUser.nextElementSibling.innerHTML = "该用户可以使用";
                }
            }
        });
    }

    oBtnReg.onclick = function () {

        let sum = 0;

        isRight.forEach(item => {
            sum += item;
        });

        if (sum == 4) {
            ajax({
                method: "post",
                url: "./php/regSave.php",
                params: `username=${oUser.value}&userpass=${oPass.value}`,
                callback: function (str) {
                    if (str == "1") {
                        msaBox.innerHTML = "注册成功，请<a href='login.html'>登录</a>";
                    } else if (str == "0") {
                        msaBox.innerHTML = "注册失败";
                    }
                }
            });
        } else {
            msaBox.innerHTML = "你还有些信息没有填写正确，请仔细阅读";
        }
    }

    oPass.onblur = function () {
        isPass();
    }

    oPhone.onblur = function () {
        isPhone();
    }

    function isPass() {
        var reg = /^[\da-zA-Z]{6,16}$/;
        if (reg.test(oPass.value)) {
            isRight[1] = 1;
            oPass.nextElementSibling.innerHTML = "√";
        } else {
            isRight[1] = 0;
            oPass.nextElementSibling.innerHTML = "×，6-16位数字和字母";
        }
    }

    function isPhone() {
        var reg = /^1[0-9]{10}$/;
        if (reg.test(oPhone.value)) {
            isRight[2] = 1;
            oPhone.nextElementSibling.innerHTML = "√";
        } else {
            isRight[2] = 0;
            oPhone.nextElementSibling.innerHTML = "×";
        }
    }