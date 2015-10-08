<?php 
    // …
	if($_SERVER['REQUEST_METHOD'] === 'POST') {
		// Get "n" and return
		$number = file_get_contents("signups.json");
		$json = json_decode($number, true);
		$nOfUsers = $json["n"];

		echo $nOfUsers;

	} else {
		$number = file_get_contents("signups.json");
		$json = json_decode($number, true);
		$nOfUsers = $json["n"];
		if($nOfUsers > 950) {
                   $nOfUsers = 923;
                } else {
                   $nOfUsers++;
                }

		// Save to file
		$jsonToSave = Array('n' => $nOfUsers);
		$jsonToSave = json_encode($jsonToSave);
		file_put_contents('signups.json', $jsonToSave);

		echo $nOfUsers;
	}
?>