<?php

$lat = $_REQUEST['lat'];
$lng = $_REQUEST['lng'];


  ini_set('display_errors' , 'On');
  error_reporting(E_ALL);


  $url = "http://api.geonames.org/findNearbyPlaceNameJSON?formatted=true&lat=7.3&lng=9&username=sherazzi403&style=full";

  $ch = curl_init();

  curl_setopt($ch, CURLOPT_POST, 1  );
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

  // curl_setopt($ch, CURLOPT_POSTFIELDS)


  $result = curl_exec($ch);
  curl_close($ch);


  $decode = json_decode($result,true);


  $output['data'] = $decode['geonames'];

  header('Content-Type: application/json; charset=UTF-8');


  print_r($output);



?>
