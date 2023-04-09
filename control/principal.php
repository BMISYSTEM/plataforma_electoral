<?php
namespace controllers;

use Error;
use Router\Router;
use model\lideres;
use model\logins;
use model\votantes;

class principal{
    public static function principal(Router $router){
        $router->render('paginas/principal',[

        ]);
    } 
    public static function formulario(Router $router){
        $router->render('templates/lideres',[

        ]);
    } 
    public static function insert(Router $router){
        if($_SERVER['REQUEST_METHOD'] === 'POST'){
            $tipo = $_POST['tipo'];

            switch ($tipo) {
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
                    break;
                case 'cambiopass':
                    $arr = [
                        'email' => $_POST['email']
                    ];
                    $cambio = new logins($arr);
                    $result = $cambio->comprobarCorreo();
                    if($result === '1'){
                        echo json_encode($result);
                    }else{
                        $para      = $_POST['email'];
                        $titulo    = 'El título';
                        $mensaje   = 'Hola';
                        $cabeceras = 'From: webmaster@example.com' . "\r\n" .
                                    'Reply-To: webmaster@example.com' . "\r\n" .
                                    'X-Mailer: PHP/' . phpversion();

                        $success = mail($para, $titulo, $mensaje, $cabeceras);
                        if (!$success) {
                            $errorMessage = error_get_last()['message'];
                            echo json_encode($errorMessage);
                        }

                    }
                    break;
                case 'puestosv':
                    $result = votantes::puestos_votacion();
                    echo json_encode($result);
                    break;
                case 'puestosmapa':
                    $result = votantes::puestos_votacion_mapa();
                    echo json_encode($result);
                    break;
                case 'lideres_select':
                    $result = logins::seleccion_lideres();
                    echo json_encode($result);
                    break;
                case 'session':
                    session_start();
                    echo json_encode($_SESSION['rol'][0]->rol);
                    break;
                }
       }
    } 
}
?>