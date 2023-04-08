<?php
/* Shfaq informacionin e perdoruesit si dhe disa mesazhe me vlere */
session_start();

// Kontrollon nese perdoruesi eshte loguar duke perdorur variablin e sesionit
if ( $_SESSION['logged_in'] != 1 ) {
  $_SESSION['message'] = "Ju duhet te logoheni perpara se te shihni faqen e profilit tuaj!";
  header("location: error.php");    
}
else {
    // Lehtesohet leximi
    $first_name = $_SESSION['first_name'];
    $last_name = $_SESSION['last_name'];
    $email = $_SESSION['email'];
    $active = $_SESSION['active'];
}
?>
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Miresevini <?= $first_name.' '.$last_name ?></title>
  <?php include 'css/css.html'; ?>
</head>

<body>
  <div class="form">
        <center><img src="imazhe/logo.png" alt="logo perla" width="100px" height="83px" /></center>
          <h1>Mire se vini</h1>
          
          <p>
          <?php 
     
          // Shfaq vetem njehere mesazhin e linkut te konfirmimit te llogarise
          if ( isset($_SESSION['message']) )
          {
              echo $_SESSION['message'];
              
              // Qe te mos bezdiset perdoruesi nga mesazhet permes rifreskimit te faqes
              unset( $_SESSION['message'] );
          }
          
          ?>
          </p>
          
          <?php
          
          // Rikujtohet perdoruesi se llogaria nuk eshte aktive, derisa te aktivizohet
          if ( !$active ){
              echo
              '<div class="info">
              Llogaria eshte ende e paverifikuar, ju lutemi konfimoni email-in tuaj 
              duke klikuar mbi linkun e derguar adresen tuaj email!
              </div>';
          }
          
          ?>
          
          <h2><?php echo $first_name.' '.$last_name; ?></h2>
          <p><?= $email ?></p>
          
          <a href="logout.php"><button class="button button-block" name="logout"/>Dilni</button></a>

    </div>
    
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src="js/index.js"></script>

</body>
</html>
