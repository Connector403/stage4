<?php

$lat = $_REQUEST['lat'];
  $lng = $_REQUEST['lng'];


  $url = "http://api.geonames.org/findNearbyPlaceNameJSON?formatted=true&lat=". $lat."&lng=".$lng."&username=sherazzi403";

  $ch = curl_init();

  curl_setopt($ch, CURLOPT_POST, 1  );

  curl_setopt($ch, CURLOPT_URL, $url);

     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

  // curl_setopt($ch, CURLOPT_POSTFIELDS)


  $result = curl_exec($ch);


  $decode = json_decode($result,true);

  curl_close($ch);

  print_r($decode);



?>
