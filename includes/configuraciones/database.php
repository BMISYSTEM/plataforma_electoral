<?php

function conectardb() : mysqli{
    $db = new mysqli('localhost','root','Atenea.99','plataforma_electoral');
    if(!$db){
        echo "error de conexion";
        exit;
    }
    return $db;
}