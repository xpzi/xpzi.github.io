<?php
include './post.php';

//手机号接口检测

// $check = json_encode(array("phone"=>'18081551646'));
// echo $check ;  13674260662



$check = array();
$check['phone'] =  $_GET['phone'];
$check = json_encode($check);

$data =  request_by_curl('http://api.jmchat.com/jiameng/CheckBindServlet', $check);
print_r( $data  ); 

?>