<?php
 
// sigurohet lidhja me databazen
include_once '../konfigurimi/databaza.php';
 
// krijimi i instances se objektit perdorues
include_once '../objekte/perdoruesit.php';
 
$database = new Database();
$db = $database->getConnection();

//Krijojme objekt te ri te klases User 
$user = new User($db);
 
// vendosen vlerat e cilesive te perdoruesit
$user->username = $_POST['username'];
$user->password = base64_encode($_POST['password']);
$user->created = date('Y-m-d H:i:s');
 
// krijohet perdoruesi
if($user->signup()){
    $user_arr=array(
        "status" => true,
        "message" => "Regjistrimi u be me sukses!",
        "id" => $user->id,
        "username" => $user->username
    );
}
else{
    $user_arr=array(
        "status" => false,
        "message" => "Ky perdorues ekziston!"
    );
}
print_r(json_encode($user_arr));
?>