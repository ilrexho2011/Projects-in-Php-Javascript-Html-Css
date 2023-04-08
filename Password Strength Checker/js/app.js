let state = false;
let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");

password.addEventListener("keyup", function() {
  let pass = document.getElementById("password").value;
  checkStrength(pass);
});

function toggle() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    state = true;
  }
}
function myFunction(show) {
  show.classList.toggle("fa-eye-slash");
}

function checkStrength(password) {
  let strength = 0;

  // Ne qofte se password-i permban njekohesisht gemra te vogla dhe te medha

  // atehere ne vijim keto jane bashkesi te lejuara per tu perdorur ose regular Expression = /([!,%,&,@,#,$,^,*,?,_,~])/ , /([0-9])/ ,/([a-z].*[A-Z])|([A-Z].*[a-z])/

  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    lowUpperCase.classList.remove("fa-circle");
    lowUpperCase.classList.add("fa-check");
  } else {
    lowUpperCase.classList.add("fa-circle");
    lowUpperCase.classList.remove("fa-check");
  }
  // Nese permban numra dhe karaktere

  if (password.match(/([0-9])/)) {
    strength += 1;
    number.classList.remove("fa-circle");
    number.classList.add("fa-check");
  } else {
    number.classList.add("fa-circle");
    number.classList.remove("fa-check");
  }

  // Nese e ka te pakten nje karakter special

  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    strength += 1;
    specialChar.classList.remove("fa-circle");
    specialChar.classList.add("fa-check");
  } else {
    specialChar.classList.add("fa-circle");
    specialChar.classList.remove("fa-check");
  }

  // Nese gjatesia e password-it eshte me e madhe se 7 shenja

  if (password.length > 7) {
    strength += 1;
    eightChar.classList.remove("fa-circle");
    eightChar.classList.add("fa-check");
  } else {
    eightChar.classList.add("fa-circle");
    eightChar.classList.remove("fa-check");
  }

  // Nese niveli i fortesise eshte poshte vleres 2

  if (strength < 2) {
    passwordStrength.classList.remove("progress-bar-warning");
    passwordStrength.classList.remove("progress-bar-success");
    passwordStrength.classList.add("progress-bar-danger");
    passwordStrength.style = "width: 30%";
  } else if (strength == 3) {
    passwordStrength.classList.remove("progress-bar-success");
    passwordStrength.classList.remove("progress-bar-danger");
    passwordStrength.classList.add("progress-bar-warning");
    passwordStrength.style = "width: 70%";
  } else if (strength == 4) {
    passwordStrength.classList.remove("progress-bar-warning");
    passwordStrength.classList.remove("progress-bar-danger");
    passwordStrength.classList.add("progress-bar-success");
    passwordStrength.style = "width: 100%";
  }
}
