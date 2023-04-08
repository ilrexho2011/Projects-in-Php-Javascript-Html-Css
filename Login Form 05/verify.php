<?php 
/* Verifikon adresen email te perdoruesve te regjistruar, linku
   qe çon drejt kesaj faqe perfshihet ne mesazhin email gjeneruar ne  register.php 
*/
require 'db.php';
session_start();

// Sigurohemi qe variblat email dhe hash nuk jane bosh
if(isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['hash']) && !empty($_GET['hash']))
{
    $email = $mysqli->escape_string($_GET['email']); 
    $hash = $mysqli->escape_string($_GET['hash']); 
    
    // Selektojme perdoruesin permes perputhjes se email dhe hash, perdorues te cilet nuk kane bere verifikimin e llogarise (active = 0)
    $result = $mysqli->query("SELECT * FROM users WHERE email='$email' AND hash='$hash' AND active='0'");

    if ( $result->num_rows == 0 )
    { 
        $_SESSION['message'] = "Llogaria eshte aktivizuar me pare ose adresa URL eshte e pavlefshme!";

        header("location: error.php");
    }
    else {
        $_SESSION['message'] = "Llogaria juaj u aktivizua!";
        
        // Ndryshojme statusin e perdoruesit ne aktiv (active = 1)
        $mysqli->query("UPDATE users SET active='1' WHERE email='$email'") or die($mysqli->error);
        $_SESSION['active'] = 1;
        
        header("location: success.php");
    }
}
else {
    $_SESSION['message'] = "Jane ofruar parametra te manget per verifikimin e llogarise!";
    header("location: error.php");
}     
?>