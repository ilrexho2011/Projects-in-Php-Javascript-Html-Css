<?php
/* Procesi i largimit, shkaterron dhe mbyll sesionin */
session_start();
session_unset();
session_destroy(); 
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Dalja</title>
  <?php include 'css/css.html'; ?>
</head>

<body>
    <div class="form">
    	<center><img src="imazhe/logo.png" alt="logo perla" width="100px" height="83px" /></center>
          <h1>Faleminderit qe ishit me ne</h1>
              
          <p><?= 'Ju keni dale tanime!'; ?></p>
          
          <a href="index.php"><button class="button button-block"/>Home</button></a>

    </div>
</body>
</html>
