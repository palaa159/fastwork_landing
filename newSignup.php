<?php 
	$value = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : null;
	if ($value === 'GET') {
		// Increase number
		// 
		// echo "yeah";
		$number = file_get_contents("signups.json");
		$json = json_decode($number, true);
		$nOfUsers = $json["n"];
		$nOfUsers++;

		// Save to file
		$jsonToSave = Array('n' => $nOfUsers);
		$jsonToSave = json_encode($jsonToSave);
		file_put_contents('signups.json', $jsonToSave);

    // …
	} else if($value === 'POST') {
		// Get "n" and return
		$number = file_get_contents("signups.json");
		$json = json_decode($number, true);
		$nOfUsers = $json["n"];

		echo $nOfUsers;

	}
?>