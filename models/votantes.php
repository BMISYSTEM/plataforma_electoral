<?php 
namespace model;

use GuzzleHttp\Psr7\Query;

class votantes extends ActiveRecord{
    protected static $tabla = 'votantes';

    public $id;
    public $nombre;
    public $telefono;
    public $correo;
    public $genero;
    public $cedula;
    public $puesto_id;
    public $mesa;
    public function __construct($arg = []){
       $this->id = $arg['id'] ?? null ;
       $this->nombre = $arg['nombre'] ?? '';
       $this->telefono = $arg['telefono'] ?? '';
       $this->correo = $arg['correo'] ?? '';
       $this->genero = $arg['genero'] ?? '';
       $this->cedula = $arg['cedula'] ?? '';
       $this->puesto_id = $arg['puesto_id'] ?? '';
       $this->mesa = $arg['mesa'] ?? '';
    }
    public function insertar_votante(){
        $id_usuario = $this->id_email();
        $iduser = $id_usuario['id'];
        $Querys = "insert into votantes (nombre,telefono,correo,genero,cedula,puesto_id,mesa,usuario_id)";
        $Querys .= " values ('$this->nombre','$this->telefono','$this->correo','$this->genero','$this->cedula',$this->puesto_id,'$this->mesa',$iduser);";
        $result = self::$db->query($Querys);
        return $result;
    }
    public function id_email(){
        session_start();
        $email = $_SESSION['usuario'];
        $Querys = "select id from usuarios where email = '$email';";
        $result = self::$db->query($Querys);
        return $result->fetch_assoc();
    }
    public function mesas(){
        $Query = "select mesas from puestosv where id = '$this->puesto_id';";
        $result = self::$db->query($Query);
        $mesa = $result->fetch_assoc();
        $numesa = $mesa['mesas'];
        return $numesa;
    }


}