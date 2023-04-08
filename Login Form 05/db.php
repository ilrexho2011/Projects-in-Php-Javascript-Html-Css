<?php
/* Rregullimi i koneksionit me databazen */
$host = 'localhost';
$user = 'ilrexho';
$pass = '#pass123';
$db = 'logimi1';
$mysqli = new mysqli($host,$user,$pass,$db) or die($mysqli->error);
