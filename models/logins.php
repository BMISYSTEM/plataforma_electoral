<?php 
namespace model;

use GuzzleHttp\Psr7\Query;

class logins extends ActiveRecord{
    protected static $tabla = 'usuarios';
    protected static $columbnasdb = ['id','email','pasword'];

    public $id;
    public $email;
    public $pasword;
    public $nombre;
    public $rol;
    public function __construct($arg = []){
        $this->id = $arg['id'] ?? null;
        $this->email = $arg['email'] ?? '';
        $this->pasword = $arg['pasword'] ?? '';
        $this->nombre = $arg['nombre'] ?? '';
        $this->rol = $arg['rol'] ?? '';
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
       
    }
    public function comprobarCorreo(){
        $email = $this->email;
        $query = "select email FROM usuarios where email = '". $email ."'";
        $result = self::$db->query($query);
        if(!$result->num_rows){
            return "1";
        }else{
            return "2";
        }
    }

    public static function seleccion_lideres(){
        $querys = "select id,nombre,rol from usuarios";
        $resultado = self::consultaSql($querys);
        return $resultado;
    }
    public static function roles($email){
        $querys = "select rol from usuarios where email ='". $email ."' LIMIT 1;";
        $resultado = self::consultaSql($querys);
        return $resultado;
    }
    public  function insert_code($code){
        $querys = "update usuarios set code = '$code' where email = '$this->email'";
        $resultado = self::$db->query($querys);
        return $resultado;
    }
}
    
?>