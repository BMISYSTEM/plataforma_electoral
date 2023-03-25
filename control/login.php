<?php
namespace controllers;
use Router\Router;
use model\logins;
class login{

    public static function login(Router $router){
        // $errores =[];
        $pass = password_hash('12345',PASSWORD_BCRYPT);
        if($_SERVER['REQUEST_METHOD'] === 'POST'){
            // debugear($_POST);
            $utentic = new logins($_POST);
            $errores = $utentic->validar();
            if(empty($errores)){
                //verificar si el usuario existe
                $resultado = $utentic->exits();
                if (!$resultado) {
                    $errores[] = logins::getErrores();
                }else{
                    //verificar pass
                    $autenticado = $utentic->password($resultado);
                    //autenticar usuario
                    if($autenticado){
                        $utentic->autenticado();
                    }else{
                        $errores[] = logins::getErrores();
                        // debugear($errores);
                    }
                }
            }
        }
        $router->render('paginas/login',[
            'errores' => $errores,
            'autenticado' => $utentic,
            'pass' => $pass
            
        ]);
    }
    public static function logaut(Router $router){
        $router->render('login/login',[

        ]);
    }



}
?>