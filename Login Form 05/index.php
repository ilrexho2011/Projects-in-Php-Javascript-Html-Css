<?php
/* Faqja kryesore me dy nenforma: regjistrimi dhe logimi */
require 'db.php';
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <title>Regjistrimi/Logimi</title>
  <?php include 'css/css.html'; ?>
</head>

<?php 
if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{
    if (isset($_POST['login'])) { // logimi i perdoruesit

        require 'login.php';
        
    }
    
    elseif (isset($_POST['register'])) { // regjistrimi i perdoruesit
        
        require 'register.php';
        
    }
}
?>
<body>
  <div class="form">
      <center><img src="img/logo.png" alt="logo elite" width="100px" /></center>
      <br />
      <ul class="tab-group">
        <li class="tab"><a href="#signup">Regjistrimi</a></li>
        <li class="tab active"><a href="#login">Logimi</a></li>
      </ul>
      
      <div class="tab-content">

         <div id="login">   
          <h1>Miresevini serish!</h1>
          
          <form action="index.php" method="post" autocomplete="off">
          
            <div class="field-wrap">
            <label>
              Adresa Email<span class="req">*</span>
            </label>
            <input type="email" required autocomplete="off" name="email"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Passwordi<span class="req">*</span>
            </label>
            <input type="password" required autocomplete="off" name="password"/>
          </div>
          
          <p class="forgot"><a href="forgot.php">Harruat Passwordin?</a></p>
          
          <button class="button button-block" name="login" />Logohu</button>
          
          </form>

        </div>
          
        <div id="signup">   
          <h1>Regjistrohuni</h1>
          
          <form action="index.php" method="post" autocomplete="off">
          
          <div class="top-row">
            <div class="field-wrap">
              <label>
                Emri<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" name='firstname' />
            </div>
        
            <div class="field-wrap">
              <label>
                Mbiemri<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off" name='lastname' />
            </div>
          </div>

          <div class="field-wrap">
            <label>
              Adresa Email<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off" name='email' />
          </div>
          
          <div class="field-wrap">
            <label>
              Vendos nje Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off" name='password'/>
          </div>
          
          <button type="submit" class="button button-block" name="register" />Regjistrohu</button>
          
          </form>

        </div>  
        
      </div><!-- fundi i tab-content -->
      
</div> <!-- fundi i formes -->
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    <script src="js/index.js"></script>

</body>
</html>
