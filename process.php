<?php 

echo "Process....";
// check for post variable
if(isset($_POST['name'])){
    echo 'POST: Your name is '.$_POST['name'];
}
// check for get variable
if(isset($_GET['name'])){
    echo 'GET: Your name is '.$_GET['name'];
}