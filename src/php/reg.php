<?php
    //连接数据库
    include('./conn.php');

    //接收数据
    $username = $_POST['username'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $test = $_POST['test'];

    //查询用户名数据库中是否存在
    $sql = "select * from reg where userName='$username'";

    //执行sql语句
    $result = $mysqli->query($sql);

    //判断结果中数据大于0行
    if($result->num_rows>0){ 
        // 说明查询到了这个用户名
        echo '<script>alert("用户名已存在");</script>';
        echo '<script>location.href="./reg.html";</script>';
        $mysqli->close();
        die;
    }

    //将用户传递过来的数据 写入数据库
    $insertUser = "insert into reg(userName,userPass,userPhone,userTest)values('$username','$password','$phone','$test')";

    //执行SQL语句
    $res = $mysqli->query($insertUser);

    //显示结果
    if($res){
        echo '<script>alert("注册成功");</script>';
        echo '<script>location.href="./login.html";</script>';
    }

    //断开连接
    $mysqli->close();
    
?>