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
    public $masculino;
    public $femenino;
    public $otros;
    public function __construct($arg = []){
        $this->id = $arg['id'] ?? null;
        $this->latitude = $arg['latitude'] ?? '';
        $this->longitude = $arg['longitude'] ?? '';
        $this->nombre = $arg['nombre'] ?? '';
        $this->mesas = $arg['mesas'] ?? '';
        $this->zona_id = $arg['zona_id'] ?? '';
        $this->puesto_id = $arg['puesto_id'] ?? '';
        $this->amplitud = $arg['amplitud'] ?? '';
        $this->masculino = $arg['masculino'] ?? '';
        $this->femenino = $arg['femenino'] ?? '';
        $this->otros = $arg['otros'] ?? '';
  
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
        $querys = "SELECT p.latitude,p.longitude,p.nombre,v.puesto_id, count(v.puesto_id) as amplitud, count(if(v.genero = 'm',1,null) ) as masculino,count(if(v.genero = 'o',1,null) ) as otros, count(if(v.genero = 'f',1,null) ) as femenino from votantes as v inner join puestosv as p on p.id = v.puesto_id GROUP BY v.puesto_id";
        $resultado = self::consultaSql($querys);
        return $resultado;
    }
    public  function lider_mapa(){
        $querys = "SELECT p.latitude,p.longitude,p.nombre,v.puesto_id, count(v.puesto_id) as amplitud, count(if(v.genero = 'm',1,null) ) as masculino,count(if(v.genero = 'o',1,null) ) as otros, count(if(v.genero = 'f',1,null) ) as femenino from votantes as v inner join puestosv as p on p.id = v.puesto_id where v.usuario_id = $this->id GROUP BY v.puesto_id";
        $resultado = self::consultaSql($querys);
        return $resultado;
    }
    public  function filtro_genero(){
        $querys = "SELECT count(if(v.genero = 'm',1,null) ) as masculino,count(if(v.genero = 'o',1,null) ) as otros, count(if(v.genero = 'f',1,null) ) as femenino from votantes as v  where v.usuario_id = $this->id";
        $resultado = self::consultaSql($querys);
        return $resultado;
    }
    public  function filtro_puestos(){
        $querys = "select p.nombre,COUNT(v.puesto_id) as votos from votantes as v inner join puestosv as p on p.id = v.puesto_id  where v.usuario_id = $this->id GROUP by v.puesto_id";
        $resultado = self::$db->query($querys);
        return $resultado->fetch_all();
    }
    public static function allgenero(){
        $querys = "SELECT  count(if(v.genero = 'm',1,null) ) as masculino, count(if(v.genero = 'f',1,null) ) as femenino , count(if(v.genero = 'o',1,null) ) as otros from votantes as v ";
        $resultado = self::consultaSql($querys);
        return $resultado;
    }
    public static function lideres_tabla(){
        $querys = "select u.nombre, COUNT(v.usuario_id) as votos, COUNT(if(v.genero = 'm',1,null)) as masculino, COUNT(if(v.genero = 'f',1,null)) as femenino , COUNT(if(v.genero = 'o',1,null)) as otros from votantes as v inner join usuarios as u on u.id = v.usuario_id GROUP by u.nombre";
        $resultado = self::$db->query($querys);
        return $resultado->fetch_all();
    }
    public static function allpuestos_estadistica(){
        $querys = "select p.nombre,COUNT(v.puesto_id) as votos from votantes as v inner join puestosv as p on p.id = v.puesto_id GROUP by v.puesto_id";
        $resultado = self::$db->query($querys);
        return $resultado->fetch_all();
    }
}