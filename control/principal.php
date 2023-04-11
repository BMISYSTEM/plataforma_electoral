<?php
namespace controllers;

use Error;
use Intervention\Image\Gd\Commands\BrightnessCommand;
use LDAP\Result;
use Router\Router;
use model\lideres;
use model\logins;
use model\puestos;
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
                    // echo json_encode($_FILES['foto']);
                    $nomarchivo = md5(uniqid(rand(),true)) . '.jpg';
                    $ruta = '../public/build/img/';
                    $img = $ruta. $nomarchivo;
                    $result = @move_uploaded_file($_FILES['foto']['tmp_name'],$img);
                    echo json_encode('se guardo de forma correcta');
                    $arr = [
                        'nombre' => $_POST['nombre'],
                        'apellido' => $_POST['apellido'],
                        'cedula' => $_POST['cedula'],
                        'fechanacimiento' => $_POST['fechanacimiento'],
                        'email' => $_POST['email'],
                        'telefono' => $_POST['telefono'],
                        'ciudad' => $_POST['ciudad'],
                        'region' => $_POST['region'],
                        'password' => $_POST['password'],
                        'foto' => $nomarchivo
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
                    $result = puestos::puestos_votacion();
                    echo json_encode($result);
                    break;
                case 'puestosmapa':
                    $result = puestos::puestos_votacion_mapa();
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
                case 'fotosession':
                    session_start();
                    $arr= [
                        'email' => $_SESSION['usuario']
                    ];
                    $foto = new lideres($arr);
                    $resul = $foto->foto();
                    echo json_encode($resul);
                    break;
                case 'insertarvotantes':
                    $votante = new votantes($_POST);
                    $result = $votante->insertar_votante();
                    echo json_encode($result);
                    break;
                case 'mesas':
                    $mesas = new votantes($_POST);
                    $result = $mesas->mesas();
                    echo json_encode($result);
                    break;
                case 'actualizar':
                    session_start();
                    $arg = [
                        'email' => $_SESSION['usuario']
                    ];
                    $usuario = new lideres($arg);
                    $result = $usuario->usuario_activo();
                    echo json_encode($result);
                    break;
                case 'update_lideres':
                    $pass = password_hash($_POST['password'],PASSWORD_BCRYPT);
                    $nomarchivo = md5(uniqid(rand(),true)) . '.jpg';
                    $ruta = '../public/build/img/';
                    $img = $ruta. $nomarchivo;
                    $result = @move_uploaded_file($_FILES['foto']['tmp_name'],$img);
                    $arg = [
                        'id' => $_POST['id'],
                        'email' => $_POST['email'],
                        'password' => $pass,
                        'nombre' => $_POST['nombre'],
                        'apellido' => $_POST['apellido'],
                        'apellido' => $_POST['apellido'],
                        'cedula' => $_POST['cedula'],
                        'fechanacimiento' => $_POST['fechanacimiento'],
                        'telefono' => $_POST['telefono'],
                        'ciudad' => $_POST['ciudad'],
                        'region' => $_POST['region'],
                        'foto' => $nomarchivo,
                    ];
                    $update = new lideres($arg);
                    $result = $update->update();
                    echo json_encode($result);
                    break;
                case 'cerrar':
                    session_start();
                    $_SESSION = [];
                    $result = true;
                    echo  json_decode($result) ;
                    break;
                case 'allcalor':
                    $result = puestos::allcalor();
                    echo json_encode($result);
                    break;
                }
       }
    } 
}
?>