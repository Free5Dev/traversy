<?php 
    $host = "localhost";
    $user = 'root';
    $password = "";
    $dbname = "sdz";
    //set dsn
    $dsn = 'mysql:host='.$host.';dbname='.$dbname;
    //create a pdo instance
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

    //pdo query
    // $stmt = $pdo->query("SELECT * FROM posts");

    // while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    //     echo $row['title']."<br/>";
    // }
    $author = "Said";
    //positionnal Params
    $sql= 'SELECT * FROM posts WHERE author = ?';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$author]);
    $posts = $stmt->fetchAll();

    foreach($posts as $post){
        echo $post->title."<br/>";
    }