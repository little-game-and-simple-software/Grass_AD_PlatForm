<?php

header("Content-Type: text/html; charset=utf-8");

#echo "连接成功";
	
	$servername = "localhost";
	$username = "sfydb_6411555";
	$password = "Zr871214";
    $conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
	echo "连接失败";
    die("连接失败: " . $conn->connect_error);
} 
else
{
	echo "连接成功";
	echo $account;
	echo $pwd;
}
?>