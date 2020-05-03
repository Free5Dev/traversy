<?php 

include "bdd.inc.php";
$query =$bdd->query('SELECT * FROM ad');
$row = $query->fetchAll();

echo json_encode($row);

?>
