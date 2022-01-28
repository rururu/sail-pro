<?php
// router.php

function setFlag($str, $race)
{
    $fdFlag = fopen($race. "/" ."Flag.txt", 'w') or die("не удалось создать файл");
	fwrite($fdFlag, $str);
	fclose($fdFlag);
}

function getFlag($race)
{
    $fdFlag = fopen($race. "/" ."Flag.txt", 'r');
	if ($fdFlag != false){
		$flag = fread($fdFlag, 1);
		fclose($fdFlag);
	}
	else{
		$flag = "0";
	}
	return $flag;	
}

$uri = $_SERVER['REQUEST_URI'];
list($null,$nmea,$race) = explode("/", $uri);
$nameAIVDM = $race. "/" . "AIVDM.txt";
$nameGPRMC = $race. "/" . "GPRMC.txt";

if(!is_dir($race)){
	mkdir($race);
}


$entityBody = "" . file_get_contents('php://input')."\r\n";
$posGPRMC = strpos($entityBody, "GPRMC");
$posAIVDM = strpos($entityBody, "AIVDM");
$Flag = "?";

if ($posAIVDM == 1){
	$Flag = getFlag($race);	
	if ($Flag == "0"){
		setFlag("1", $race);
		$open = 'w';						
	}
	else{
		$open = 'a';		
	}
	$fdAIVDM = fopen($nameAIVDM, $open) or die("не удалось создать файл");
	fwrite($fdAIVDM, $entityBody);
	fclose($fdAIVDM);	
}
else{	
	if ($posGPRMC == 1){
		setFlag("0", $race);
		$open = 'w';	
	}
	else{
		$open = 'a';				
	}
	$fdGPRMC = fopen($nameGPRMC, $open) or die("не удалось продолжить файл");
	fwrite($fdGPRMC, $entityBody);
	fclose($fdGPRMC);	
}
/*
$fdt = fopen("allNMEA.txt", 'a');
fwrite($fdt, "race=" . $race . " Flag=" . $Flag . " posGPRMC=" . $posGPRMC . " posAIVDM=" . $posAIVDM ." nmea=" . $entityBody);
fclose($fdt);	
*/
    	

?>