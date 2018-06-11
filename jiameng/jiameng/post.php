<?php
header('Content-Type:text/html;Charset=utf-8');
/**  
 * Curl版本  
 * 使用方法：  
 * $post_string = "app=request&version=beta";  
 * request_by_curl('http://www.qianyunlai.com/restServer.php', $post_string);  
 */
// post 请求方法
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

?>