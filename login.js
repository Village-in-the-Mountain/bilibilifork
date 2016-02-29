function UserLogin(name, pass) {
    $.ajax({
        type: "GET",
        url: "?",
        data: "action=Login&d=" + new Date() + "&name=" + "&pass=" + pass,
        success: function (data) {
            if (data == "??") {
                window.location = "???";
            } else {
                alert("用户名或密码错误miao~");
                return false;
            }
        }
    })
}

$(function () {
    $("#divMag").ajaxStart(function () {
        $(this).show().html("loading......");
    })
    $("#divMag").ajaxStop(function () {
        $(this).html("finished").hide();
    })
    $("#loginbtn").click(function () {
        var $name = $("#userIdTxt");
        var $pass = $("#passwdTxt");
        if ($name.val() != " "&&$pass.val() != " "
        )
        {
            UserLogin($name.val(), $pass.val());
        }
        else
        {
            if ($name.val() == " ") {
                alert("没写名字miao~");
                $name.focus();
                return false;
            } else {
                alert("没写密码miao~");
                return false;
            }
        }
    })
})

