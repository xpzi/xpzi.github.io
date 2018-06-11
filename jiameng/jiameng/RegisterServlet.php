<?php
include './post.php';

//手机号接口检测

 $check = json_encode(array(
							"name"=>'abcd',
							"literaryName" => 'abc',
							"gender"=> '1',
							"countryCode"=>'86',
							"phone"=>'18081551646',
							"password"=>'123456',
							"smsCode"=>'1234'
						));



echo $check;
// $check = array();
// $check['phone'] =  $_GET['phone'];
// $check = json_encode($check);

$data =  request_by_curl('http://api.jmchat.com/jiameng/RegisterServlet', $check);
print_r( $data  ); 

?>