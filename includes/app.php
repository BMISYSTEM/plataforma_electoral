<?php
//importaremos en este archivo todas las funciones y clases
require 'funciones.php';
// importaremos las conexiones a las bases de datos
require 'configuraciones/database.php';
//incluimos el autoload de composer
require __DIR__ . '/../vendor/autoload.php';
//conexion a la base de datos 

$db = conectardb();
use model\ActiveRecord;
ActiveRecord::setdb($db);
