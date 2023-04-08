<?php
/* Forma e zerimit te passwordit, perfshihet linku per kete faqe
   nga skedari forgot.php nepermjet mesazhit email te zerimit
*/
require 'db.php';
session_start();

// Sigurohemi qe variablat email dhe hash nuk jane bosh
if( isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['hash']) && !empty($_GET['hash']) )
{
    $email = $mysqli->escape_string($_GET['email']); 
    $hash = $mysqli->escape_string($_GET['hash']); 

    // Sigurohemi qe emaili i perdoruesit korrespondues me kodin hash ekziston
    $result = $mysqli->query("SELECT * FROM users WHERE email='$email' AND hash='$hash'");

    if ( $result->num_rows == 0 )
    { 
        $_SESSION['message'] = "Keni futur nje adrese URL te pavlefshme per zerimin e paswordit!";
        header("location: error.php");
    }
}
else {
    $_SESSION['message'] = "Per fat te keq, verifikimi deshtoi, provoni serish!";
    header("location: error.php");  
}
?>
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Zeroni Passwordin tuaj</title>
  <?php include 'css/css.html'; ?>
</head>

<body>
    <div class="form">

          <h1>Zgjidhni Passwordin tuaj te ri</h1>
          
          <form action="reset_password.php" method="post">
              
          <div class="field-wrap">
            <label>
              Passwordi i ri<span class="req">*</span>
            </label>
            <input type="password"required name="newpassword" autocomplete="off"/>
          </div>
              
          <div class="field-wrap">
            <label>
              Konfirmoni Passwordin e ri<span class="req">*</span>
            </label>
            <input type="password" required name="confirmpassword" autocomplete="off"/>
          </div>
          
          <!-- Kjo fushe hyrese nevojitet, per terheqjen e emailit te perdoruesit -->
          <input type="hidden" name="email" value="<?= $email ?>">    
          <input type="hidden" name="hash" value="<?= $hash ?>">    
              
          <button class="button button-block"/>Apliko</button>
          
          </form>

    </div>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src="js/index.js"></script>

</body>
</html>
