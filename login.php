<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>服务器发送</title>
</head>
<body>
<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$user=$_POST['user'];
$pwd=$_POST['pwd'];
if ($user=="黄桃" and $pwd=="960329")
{
    echo "登录成功";
}else
{
    echo "登录失败";
	echo "姓名：".$user."<br>";
    echo "密码：".$pwd."<br>";
    flush();
}

?>
</body>
</html>
