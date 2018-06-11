<?php
include './post.php';

//登陆接口测试成功
//$login = json_encode(array("number"=>'11127', "password"=>"12345", "type"=>"id"));
//echo $login ;

$login = array();
//$login['number'] =   intval($_GET['number']);
$login['number'] =   $_GET['number'];
$login['password'] = md5($_GET['password']);
$login['type'] = $_GET['type'];
$login = json_encode($login);

$data =  request_by_curl('http://api.jmchat.com/jiameng/LoginServlet', $login);
print_r( $data  ); 

?>