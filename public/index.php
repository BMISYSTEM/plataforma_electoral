<?php 
require_once __DIR__ . '/../includes/app.php';
use router\Router;
use controllers\login;
use controllers\principal;

$router = new Router();
//se define las rutas de aceso y su funcion propiedades
$router->get('/',[login::class,'login']);
$router->post('/',[login::class,'logaut']);
$router->get('/principal',[principal::class,'principal']);
$router->post('/principal',[principal::class,'insert']);
$router->get('/formularios',[principal::class,'formulario']);


$router->comprobar_rutas(); 