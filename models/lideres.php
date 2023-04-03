<?php 
namespace model;

class lideres extends ActiveRecord{

    protected static $tablas = 'usuarios';
    
    public $id;
    public $email;
    public $password;
    public $nombre;
    public $apellido;
    public $cedula;
    public $fechanacimiento;
    public $telefono;
    public $ciudad;
    public $region;
    public function __construct($arg = []){
        $this->id = $arg['id'] ?? null;
        $this->email = $arg['email'] ?? '';
        $this->password = $arg['password'] ?? '';
        $this->nombre = $arg['nombre'] ?? '';
        $this->apellido = $arg['apellido'] ?? '';
        $this->cedula = $arg['cedula'] ?? '';
        $this->fechanacimiento = $arg['fechanacimiento'] ?? '';
        $this->telefono = $arg['telefono'] ?? '';
        $this->ciudad = $arg['ciudad'] ?? '';
        $this->region = $arg['region'] ?? '';
    }
    public function validar(){
        if(!$this->email){
            self::$errores[] = "debes ingresar un email";
        }
        if(!$this->password){
            self::$errores[] = "ingresa un password ";
        }
        if(!$this->nombre){
            self::$errores[] = "ingresa un nombre ";
        }
        if(!$this->apellido){
            self::$errores[] = "ingresa un apellido ";
        }
        if(!$this->cedula){
            self::$errores[] = "ingresa una cedula";
        }
        if(!$this->region){
            self::$errores[] = "ingresa una region";
        }
        if(!$this->fechanacimiento){
            self::$errores[] = "ingresa una fecha de nacimiento";
        }
       
        return self::$errores;
    }

    public function create()
    {
        //convierte el arreglo en texto y se le coloca un separador para formar la cadena
        $querys = "INSERT INTO " . static::$tablas;
        $pass = password_hash($this->password,PASSWORD_BCRYPT);
        $querys .= " (rol,email,pass,nombre,apellido,cedula,fechanacimiento,telefono,ciudad,region) values ";
        $querys .= "('2','$this->email','$pass','$this->nombre','$this->apellido','$this->cedula','$this->fechanacimiento','$this->telefono','$this->ciudad','$this->region')";
        //  $resultado = mysqli_query($bd,$querys);
        $result = self::$db->query($querys);
        return $result;
        
    }
}