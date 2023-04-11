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
    public $foto;
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
        $this->foto = $arg['foto'] ?? '';
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
        $querys .= " (rol,email,pass,nombre,apellido,cedula,fechanacimiento,telefono,ciudad,region,foto) values ";
        $querys .= "('2','$this->email','$pass','$this->nombre','$this->apellido','$this->cedula','$this->fechanacimiento','$this->telefono','$this->ciudad','$this->region','$this->foto')";
        //  $resultado = mysqli_query($bd,$querys);
        $result = self::$db->query($querys);
        return $result;
        
    }
    public function foto(){
        $querys = "select foto from usuarios where email ='$this->email'";
        //  $resultado = mysqli_query($bd,$querys);
        $result = self::$db->query($querys);
        $fotos = $result->fetch_assoc();
        $ft = $fotos['foto'];
        return $ft;
    }
    public function usuario_activo(){
        $querys = "select * from usuarios where email ='$this->email'";
        $result = self::$db->query($querys);
        $usuario = $result->fetch_assoc();
        return $usuario;
    }
    public function update(){
        $querys = "update  usuarios set email = '$this->email', pass = '$this->password', nombre = '$this->nombre',";
        $querys .= "apellido = '$this->apellido', cedula = '$this->cedula',fechanacimiento = '$this->fechanacimiento',";
        $querys .= "telefono = '$this->telefono',ciudad= '$this->ciudad',region='$this->region',foto='$this->foto' where id = '$this->id' LIMIT 1;";
        $result = self::$db->query($querys);
        // $usuario = $result->fetch_assoc();
        return $result;
    }
}