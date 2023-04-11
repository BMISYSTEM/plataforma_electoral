<?php 
namespace model;

use GuzzleHttp\Psr7\Query;

class puestos extends ActiveRecord{
    protected static $tabla = 'puestosv';

    public $id;
    public $latitude;
    public $longitude;
    public $nombre;
    public $mesas;
    public $zona_id;
    public $puesto_id;
    public $amplitud;

 
    public function __construct($arg = []){
        $this->id = $arg['id'] ?? null;
        $this->latitude = $arg['latitude'] ?? '';
        $this->longitude = $arg['longitude'] ?? '';
        $this->nombre = $arg['nombre'] ?? '';
        $this->mesas = $arg['mesas'] ?? '';
        $this->zona_id = $arg['zona_id'] ?? '';
        $this->puesto_id = $arg['puesto_id'] ?? '';
        $this->amplitud = $arg['amplitud'] ?? '';
  
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
    public static function allcalor(){
        $querys = "SELECT p.latitude,p.longitude,p.nombre,v.puesto_id, count(v.puesto_id) as amplitud from votantes as v inner join puestosv as p on p.id = v.puesto_id GROUP BY v.puesto_id";
        $resultado = self::consultaSql($querys);
        return $resultado;
    }
}