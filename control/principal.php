<?php
namespace controllers;

use Error;
use Router\Router;
use model\lideres;
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
            $insert = $_POST['insert'];

            switch ($insert) {
                case 'lideres':
                    $arr = [
                        'nombre' => $_POST['nombre'],
                        'apellido' => $_POST['apellido'],
                        'cedula' => $_POST['cedula'],
                        'fechanacimiento' => $_POST['fechanacimiento'],
                        'email' => $_POST['email'],
                        'telefono' => $_POST['telefono'],
                        'ciudad' => $_POST['ciudad'],
                        'region' => $_POST['region'],
                        'password' => $_POST['password']
                    ];
                    $lideres = new lideres($arr);
                    $error = $lideres->validar();
                    if(empty($error)){
                        $result = $lideres->create();
                        if($result){
                            $error[] = "insertado";
                            echo json_encode($error);
                        }else{
                            echo json_encode("no se inserto");
                        }
                    }else{
                        echo json_encode($error);
                    }
            }
       }
    } 
}
?>