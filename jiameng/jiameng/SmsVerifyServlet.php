<?php
function request_by_curl($remote_server, $post_string) {  
	$ch = curl_init();  
	curl_setopt($ch, CURLOPT_URL, $remote_server);  
	curl_setopt($ch, CURLOPT_POSTFIELDS, 'content=' . $post_string);  
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  
	curl_setopt($ch, CURLOPT_USERAGENT, "qianyunlai.com's CURL Example beta");  
	$data = curl_exec($ch);  
	curl_close($ch);  
	return $data;  
}

// sdkapi.sms.mob.com   http://sdkapi.sms.mob.com/utils/zonelist
	// utils   zonelist
		// appkey efa5b80e9ae4
		// token 58175d8a14fceb1f9f97b0721
		// hash 836ff776

$check = json_encode(array("phone"=>'18081551646','countryCode'=>'+86'));
// echo $check ;  13674260662
echo $check;



// $check = array();
// $check['phone'] =  $_GET['phone'];
// $check = json_encode($check);

$data =  request_by_curl('http://api.jmchat.com/jiameng/SmsVerifyServlet', $check);
print_r( $data  ); 

?>