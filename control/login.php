<?php
namespace controllers;
use Router\Router;
use model\logins;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require '../vendor/autoload.php';
class login{

    public static function login(Router $router){
      
        $router->render('paginas/login',[
          
            
        ]);
    }
    public static function logaut(){
         // $errores =[];
         if($_SERVER['REQUEST_METHOD'] === 'POST'){
            // echo json_encode($_POST);
            $tipo = $_POST['tipo'];

            switch ($tipo) {
                case 'ingresar':
                    $utentic = new logins($_POST);
                    $errores = $utentic->validar();
                    if($errores){
                        echo json_encode($errores);
                    }
                    if(empty($errores)){
                        //verificar si el usuario existe
                        $resultado = $utentic->exits();
                        // echo json_encode($resultado);
                        if (!$resultado) {
                            $errores[] = logins::getErrores();
                            echo json_encode("usuario no encontrado");
                        }else{
                            //verificar pass
                            $autenticado = $utentic->password($resultado);
                            //autenticar usuario
                            if($autenticado){
                                $rol = logins::roles($_POST['email']) ;
                                session_start();
                                $_SESSION['usuario'] = $_POST['email'];
                                $_SESSION['login'] = true;
                                $_SESSION['rol'] = $rol;
                                echo json_encode("true");
                                // $utentic->autenticado();
                            }else{
                                $errores[] = logins::getErrores();
                                echo json_encode('el password no es correcto');
                                // debugear($errores);
                            }
                        }
                    }
                    break;
                case 'recuperar':

                    $arr = [
                        'email' => $_POST['email'] 
                    ];
                    $instancia = new logins($arr);
                    $consultaemail = $instancia->comprobarCorreo();
                  
                    if($consultaemail !== "2"){ 
                        echo json_encode(1); 
                    }else{
                        //inserta un codigo unico en la base de datos en el correo que funciona 
                        $codigo = rand(1111,9999);
                        $insert_codigo = $instancia->insert_code($codigo);
                        if($insert_codigo){
                            //envio de correo
                            $mail = new PHPMailer(true);
                            try {
                                    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
                                    $mail->isSMTP();
                                    $mail->Host = 'smtp.gmail.com';
                                    $mail->SMTPAuth = true;
                                    $mail->Username = 'baironmenesesidarraga.990128@gmail.com';
                                    $mail->Password = 'mixugvhtozlonnzi';
                                    // $mail->Password = 'Atenea.99';
                            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                            $mail->Port = '587';
                            $mail->setFrom('baironmenesesidarraga.990128@gmail.com','Recuperar Clave');
                            $mail->addAddress($_POST['email']);
                            // $mail->addCC();//copia
                            $mail->isHTML(true);
                            $mail->Subject = 'Recuperacion de Clave ';
                            $mail->Body = 'Su codigo para la recuperacion de contraseña es: <h1>'. $codigo . '</h1> <br> Si usted no solicito cambio de contraseña omita este correo';
                            $mail->send();
                            echo json_encode('Codigo enviado, Verifique su bandeja de entrada o en spam');
                        } catch (Exception $e) {

                                echo json_encode($mail->ErrorInfo);
                        }
                    }
                    }
                    
                    break;
            }
        }
}
}
?>