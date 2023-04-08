<?php
/* Procesi i logimit te perdoruesit, kontrollohet nese perdoruesi 
   ekziston dhe paswordi eshte i sakte */

// Escape email mbron databazen nga SQL injections
$email = $mysqli->escape_string($_POST['email']);
$result = $mysqli->query("SELECT * FROM users WHERE email='$email'");

if ( $result->num_rows == 0 ){ // Perdoruesi nuk ekziston
    $_SESSION['message'] = "Perdoruesi me kete email nuk ekziston!";
    header("location: error.php");
}
else { // Perdoruesi ekziston
    $user = $result->fetch_assoc();

    if ( password_verify($_POST['password'], $user['password']) ) {
        
        $_SESSION['email'] = $user['email'];
        $_SESSION['first_name'] = $user['first_name'];
        $_SESSION['last_name'] = $user['last_name'];
        $_SESSION['active'] = $user['active'];
        
        // Ketu kuptojme nese perdoruesi eshte i loguar
        $_SESSION['logged_in'] = true;

        header("location: profile.php");
    }
    else {
        $_SESSION['message'] = "Ju keni futur pasword jokorrekt, provojeni serisht!";
        header("location: error.php");
    }
}

