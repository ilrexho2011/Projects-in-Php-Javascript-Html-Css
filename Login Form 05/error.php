<?php
/* Paraqitja e te gjithe mesazheve te erroreve */
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <title>Gabim</title>
  <?php include 'css/css.html'; ?>
</head>
<body>
<div class="form">
    <h1>Gabim</h1>
    <p>
    <?php 
    if( isset($_SESSION['message']) AND !empty($_SESSION['message']) ): 
        echo $_SESSION['message'];    
    else:
        header( "location: index.php" );
    endif;
    ?>
    </p>     
    <a href="index.php"><button class="button button-block"/>Home</button></a>
</div>
</body>
</html>
