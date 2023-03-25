<?php 
namespace model;

class logins extends ActiveRecord{
    protected static $tabla = 'usuarios';
    protected static $columbnasdb = ['id','email','pasword'];

    public $id;
    public $email;
    public $pasword;
    public function __construct($arg = []){
        $this->id = $arg['id'] ?? null;
        $this->email = $arg['email'] ?? '';
        $this->pasword = $arg['pasword'] ?? '';
    }
    public function validar(){
        if(!$this->email){
            self::$errores[] = "debes ingresar un email";
        }
        if(!$this->pasword){
            self::$errores[] = "debes colocar una contrase;a ";
        }
       
        return self::$errores;
    }

    public function exits(){
        $query = "select * from ".self::$tabla ." where email = '" . $this->email . "' LIMIT 1;";
        $result = self::$db->query($query);
        
        if(!$result->num_rows){
            self::$errores = 'el usuario no existe';   
            return;
        }
        return $result;
    }
    public function password($result){
        $usuario = $result->fetch_object();
        $autenticado = password_verify($this->pasword,$usuario->pass);
        if(!$autenticado){
            self::$errores = 'el paswor no es correcto';
        }
        return  $autenticado;
    }
    public function autenticado(){
        session_start();
        $_SESSION['usuario'] = $this->email;
        $_SESSION['login'] = true;

        header('location: /principal');
    }
}
    
?>