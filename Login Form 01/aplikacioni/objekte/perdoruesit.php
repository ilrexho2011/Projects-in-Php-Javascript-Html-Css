<?php
class User{
 
    // lidhja me databazen dhe emrat e tabelave
    private $conn;
    private $table_name = "users";
 
    // vetite e objekteve
    public $id;
    public $username;
    public $password;
    public $created;
 
    // ndertimi i koneksionit me variablin $db
    public function __construct($db){
        $this->conn = $db;
    }
    // regjistrimi i perdoruesit te ri
    function signup(){
    
        if($this->isAlreadyExist()){
            return false;
        }
        // query per insertimin e record
        $query = "INSERT INTO
                    " . $this->table_name . "
                SET
                    username=:username, password=:password, created=:created";
    
        // pergatitja e query-se
        $stmt = $this->conn->prepare($query);
    
        // pastrimi i mbetjeve
        $this->username=htmlspecialchars(strip_tags($this->username));
        $this->password=htmlspecialchars(strip_tags($this->password));
        $this->created=htmlspecialchars(strip_tags($this->created));
    
        // lidhja e vlerave
        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":created", $this->created);
    
        // ekzekutimi i query-se
        if($stmt->execute()){
            $this->id = $this->conn->lastInsertId();
            return true;
        }
    
        return false;
        
    }
    // logimi i perdoruesit
    function login(){
        // selektimi i query-se
        $query = "SELECT
                    `id`, `username`, `password`, `created`
                FROM
                    " . $this->table_name . " 
                WHERE
                    username='".$this->username."' AND password='".$this->password."'";

        // pergatitja e query-se
        $stmt = $this->conn->prepare($query);

        // ekzekutimi i query-se
        $stmt->execute();
        return $stmt;
    }
    function isAlreadyExist(){
        $query = "SELECT *
            FROM
                " . $this->table_name . " 
            WHERE
                username='".$this->username."'";

        // pergatitja e query-se
        $stmt = $this->conn->prepare($query);
        
        // ekzekutimi i query-se
        $stmt->execute();
        if($stmt->rowCount() > 0){
            return true;
        }
        else{
            return false;
        }
    }
}