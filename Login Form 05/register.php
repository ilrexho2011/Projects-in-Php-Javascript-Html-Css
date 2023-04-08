<?php
/* Procesi i Regjistrimit, shtohen infot e perdoruesit ne databaze 
   si dhe dergohet nje mesazh konfirmimi ne emailin e perdoruesit
 */

// Deklarohen variablat qe do perdoren ne faqen profile.php
$_SESSION['email'] = $_POST['email'];
$_SESSION['first_name'] = $_POST['firstname'];
$_SESSION['last_name'] = $_POST['lastname'];

// Realizohet escape per variablat e postimit $_POST per tu mbrojtur nga SQL injections
$first_name = $mysqli->escape_string($_POST['firstname']);
$last_name = $mysqli->escape_string($_POST['lastname']);
$email = $mysqli->escape_string($_POST['email']);
$password = $mysqli->escape_string(password_hash($_POST['password'], PASSWORD_BCRYPT));
$hash = $mysqli->escape_string( md5( rand(0,1000) ) );
      
// Kontrollohet nese perdoruesi me kete email ekziston ne databaze
$result = $mysqli->query("SELECT * FROM users WHERE email='$email'") or die($mysqli->error());

// Dihet adresa email ekziston nese nga pyetesori ne databazekthehet vlera me e madhe se 0 per rreshtin perkates
if ( $result->num_rows > 0 ) {
    
    $_SESSION['message'] = 'Kjo adrese email eshte perdorur nga perdorues tjeter!';
    header("location: error.php");
    
}
else { // Ky Email nuk ekziston ne databaze, shtoje...

    // active eshte 0 si DEFAULT (s'ka nevoje te ekzekutohet include)
    $sql = "INSERT INTO users (first_name, last_name, email, password, hash) " 
            . "VALUES ('$first_name','$last_name','$email','$password', '$hash')";

    // Shtohet perdoruesi ne databaze
    if ( $mysqli->query($sql) ){

        $_SESSION['active'] = 0; //0 derisa perdoruesi aktivizon llogarine me konfirmim ne skedarin verify.php
        $_SESSION['logged_in'] = true; // Ketu kontrollojme nese perdoruesi ka bere logged in
        $_SESSION['message'] =
                
                 "Nje link konfirmimi eshte derguar ne adresen $email, ju lutemi
                 konfirmoni llogarine duke klikuar mbi linkun e derguar ne mesazh!";

        // Dergohet mesazhi i konfirmimit me link nga skedari (verify.php)
        $to      = $email;
        $subject = 'Verifikim llogarie ( clevertechie.com )';
        $message_body = '
        Pershendetje '.$first_name.',

        Ju faleminderit per regjistrimin!

        Ju lutemi klikoni mbi linkun me poshte per aktivizimin e llogarise:

        http://localhost/login-system/verify.php?email='.$email.'&hash='.$hash;  

        mail( $to, $subject, $message_body );

        header("location: profile.php"); 

    }

    else {
        $_SESSION['message'] = 'Regjistrmi deshtoi!';
        header("location: error.php");
    }

}