<?php
/* Procesi i zerimit te Passwordit, perditeson databazen me passwordin e ri te perdoruesit */
require 'db.php';
session_start();

// Sigurohemi qe forma dergon te dhenat me metoden post method="post"
if ($_SERVER['REQUEST_METHOD'] == 'POST') { 

    // Sigurohemi qe dy paswordet korrespondojne
    if ( $_POST['newpassword'] == $_POST['confirmpassword'] ) { 

        $new_password = password_hash($_POST['newpassword'], PASSWORD_BCRYPT);
        
        // Marrim vlerat e $_POST['email'] dhe $_POST['hash'] nga fushat hyrese te fshehura te formes reset.php
        $email = $mysqli->escape_string($_POST['email']);
        $hash = $mysqli->escape_string($_POST['hash']);
        
        $sql = "UPDATE users SET password='$new_password', hash='$hash' WHERE email='$email'";

        if ( $mysqli->query($sql) ) {

        $_SESSION['message'] = "Passwordi juaj u zerua me sukses!";
        header("location: success.php");    

        }

    }
    else {
        $_SESSION['message'] = "Paswordi i ri me kofirmimin, nuk jane te njejtet, provoni serish!";
        header("location: error.php");    
    }

}
?>