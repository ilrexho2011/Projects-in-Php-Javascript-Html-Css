<?php

//variablat e koneksionit
$host = 'localhost';
$user = 'ilrexho';
$password = '#pass123';

//krijimi i koneksionit me databazen mysql
$mysqli = new mysqli($host,$user,$password);
if ($mysqli->connect_errno) {
    printf("Connection failed: %s\n", $mysqli->connect_error);
    die();
}

//krijimi i databazes
if ( !$mysqli->query('CREATE DATABASE logimi1') ) {
    printf("Errormessage: %s\n", $mysqli->error);
}

//krijimi i tabeles se perdoruesve me te gjitha fushat
$mysqli->query('
CREATE TABLE `logimi1`.`users` 
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
     `last_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `hash` VARCHAR(32) NOT NULL,
    `active` BOOL NOT NULL DEFAULT 0,
PRIMARY KEY (`id`) 
);') or die($mysqli->error);

?>