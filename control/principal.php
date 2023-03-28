<?php
namespace controllers;
use Router\Router;
class principal{
    public static function principal(Router $router){
        $router->render('paginas/principal',[

        ]);
    } 
    public static function formulario(Router $router){
        $router->render('templates/lideres',[

        ]);
    } 
    public static function insert(){
        if($_SERVER['REQUEST_METHOD'] === 'POST'){
          
        echo json_encode($_POST);
       }
    } 
}
?>