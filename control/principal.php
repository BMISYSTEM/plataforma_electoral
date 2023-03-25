<?php
namespace controllers;
use Router\Router;
class principal{
    public static function principal(Router $router){
        $router->render('paginas/principal',[

        ]);
    } 
}
?>