<?php 

include "bdd.inc.php";

if(isset($_POST['name'])){
    if(!empty($_POST['name'])){
        $stmt = $bdd->prepare("INSERT INTO ad (name) VALUES (:name)");
        $stmt->bindParam(':name', $_POST['name']);
        $stmt->execute();
        echo" name add".$_POST['name'];
    }
    
}
