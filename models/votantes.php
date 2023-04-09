<?php 
namespace model;

use GuzzleHttp\Psr7\Query;

class votantes extends ActiveRecord{
    protected static $tabla = 'usuarios';

    public $id;
    public $nombre;
    public $apellido;
    public $genero;
    public $puesto;
    public $mesa;
    public $email;
    public $latitude;
    public $longitude;
    public function __construct($arg = []){
        $this->id = $arg['id'] ?? null;
        $this->nombre = $arg['nombre'] ?? '';
        $this->apellido = $arg['apellido'] ?? '';
        $this->genero = $arg['genero'] ?? '';
        $this->puesto = $arg['puesto'] ?? '';
        $this->mesa = $arg['mesa'] ?? '';
        $this->email = $arg['email'] ?? '';
        $this->latitude = $arg['latitude'] ?? '';
        $this->longitude = $arg['longitude'] ?? '';
    }

    public static function puestos_votacion(){
        $querys = "select id,nombre from puestosv";
        $resultpuesto = self::consultaSql($querys);
        return $resultpuesto;
    }
    public static function puestos_votacion_mapa(){
        $querys = "select latitude,longitude,nombre from puestosv";
        $resultado = self::consultaSql($querys);
        return $resultado;
    }
}