<?php 
/* Zerimi i paswordit te harruar dergimi i linkut te zerimit te passwordit me ane te reset.php */
require 'db.php';
session_start();

// Kontrollohet nese forma i dergon te dhenat me metoden method="post"
if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) 
{   
    $email = $mysqli->escape_string($_POST['email']);
    $result = $mysqli->query("SELECT * FROM users WHERE email='$email'");

    if ( $result->num_rows == 0 ) // Perdoruesi nuk ekziston
    { 
        $_SESSION['message'] = "Perdoruesi me kete email nuk ekziston!";
        header("location: error.php");
    }
    else { // Perdoruesi ekziston (num_rows != 0)

        $user = $result->fetch_assoc(); // $user kompletohet me te dhenat e perdoruesit ne trajten array
        
        $email = $user['email'];
        $hash = $user['hash'];
        $first_name = $user['first_name'];

        // Sesioni mesazhit qe do te shfaqet ne rast suksesi success.php
        $_SESSION['message'] = "<p>Ju lutemi kontrolloni emailin tuaj <span>$email</span>"
        . " per nje link konfirmimi te kompletimit te yerimit te paswordit!</p>";

        // Dergimi i linkut te konfirmimit te zerimit te paswordit (reset.php)
        $to      = $email;
        $subject = 'Linku i Zerimit te Paswordit ( clevertechie.com )';
        $message_body = '
        Njatjeta '.$first_name.',

        Ju keni kerkuar te zeroni paswordin!

        Ju lutemi klikoni kete link per ta zeruar password-in:

        http://localhost/login-system/reset.php?email='.$email.'&hash='.$hash;  

        mail($to, $subject, $message_body);

        header("location: success.php");
  }
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Zerimi i Passwordit</title>
  <?php include 'css/css.html'; ?>
</head>

<body>
    
  <div class="form">

    <h1>Zeroni Passwordin</h1>

    <form action="forgot.php" method="post">
     <div class="field-wrap">
      <label>
        Adresa Email<span class="req">*</span>
      </label>
      <input type="email"required autocomplete="off" name="email"/>
    </div>
    <button class="button button-block"/>Zeroje</button>
    </form>
  </div>
          
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src="js/index.js"></script>
</body>

</html>
