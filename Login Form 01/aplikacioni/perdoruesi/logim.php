<?php
//  perfshirja e databazes dhe skedareve objekt
include_once '../konfigurimi/databaza.php';
include_once '../objekte/perdoruesit.php';
 
// lidhja me databazen
$database = new Database();
$db = $database->getConnection();
 
// pergatitja e objektit user
$user = new User($db);

// vendosja e ID-se se user-it qe do te editohet
$user->username = isset($_GET['username']) ? $_GET['username'] : die();
$user->password = base64_encode(isset($_GET['password']) ? $_GET['password'] : die());

// leximi i detajeve te user-it qe do te editohet
$stmt = $user->login();
if($stmt->rowCount() > 0){
    // terheqja e rreshtit
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    // krijimi i vargut (array)
    $user_arr=array(
        "status" => true,
        "message" => "Ju u loguat me sukses!",
        "id" => $row['id'],
        "username" => $row['username']
    );
}
else{
    $user_arr=array(
        "status" => false,
        "message" => "Username ose Password i gabuar!",
    );
}
// kthimi ne formatin json
print_r(json_encode($user_arr));
?>