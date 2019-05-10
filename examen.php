<?php
session_start();
$valors_defecte=["2","juan","65","123",["primer valor","segon valor","tercer valor","quart valor"]];
if (!isset($_SESSION["valors_defecte"])) {
    $_SESSION["valors_defecte"] =$valors_defecte;
} else{
     $valors_defecte=$_SESSION["valors_defecte"];
}


$params = ["pos","nom","edat","pas","valores"];



if (isset($_GET["op"])) {
    /** Indica que la operacio es genera_nom */
    if($_GET["op"]=="genera_pos"){
        $valors_defecte[0]= rand(1, 4);
        $_SESSION["pos"] =  $valors_defecte[0];
     }
    if($_GET["op"]=="genera_nom"){
        $valors_defecte[1]= "Nom".rand(0, 3)."N".rand(7, 10)."O".rand(2, 8)."M";
        $_SESSION["nom"] =  $valors_defecte[0];
     }
     if($_GET["op"]=="genera_edat"){
        $valors_defecte[2]= rand(16, 99);
        $_SESSION["edat"] =  $valors_defecte[0];
     }
     if($_GET["op"]=="genera_pas"){
        $valors_defecte[1]= "PA".rand(7, 10)."A".rand(2, 8)."S";
        $_SESSION["pas"] =  $valors_defecte[0];
       
     }


    /** Indica que la operacio es "guarda_nom" i adjunta el nom a guardar */
    if($_GET["op"]=="guarda_nom"){
        $valors_defecte[4][rand(0, 3)]=$_GET["nom"];
    }
    if($_GET["op"]=="guarda_edat"){
        $valors_defecte[4][rand(0, 3)]= $_GET["edat"];
    }
    if($_GET["op"]=="guarda_pass"){
        $valors_defecte[4][rand(0, 3)]= $_GET["pass"];
    }
    $_SESSION["valores"]=$valors_defecte[4];
    
   
}

for($k=0;$k<count($params);$k++){
    $param=$params[$k];
    if (!isset($_SESSION[$param])) {
        $_SESSION[$param] = $valors_defecte[$k];
    } 
    if (isset($_GET[$param])) {
        $_SESSION[$param] = $_GET[$param];

    }
}


$resp = '{';
for($k=0;$k<count($params);$k++){
    $param=$params[$k];
    $resp.='"'.$param.'":'.json_encode($_SESSION[$param]).',';
   
}
$resp.='"":""}';

echo $resp;

$_SESSION["valors_defecte"]=$valors_defecte;