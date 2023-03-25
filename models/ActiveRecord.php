<?php

namespace model;

class ActiveRecord {
//base de datos 
protected static $db;
protected static $columnasdb = [];
//errores
protected static $errores = [];
protected static $tablas = '';


public function guardar(){
    if(!is_null($this->id)){
        $this->update();
    }else{
        $this->create();
    }
}
//se encargara de guardar datos ya sanitizados 
public function create()
{
    $zanitizar = $this->zanitizar();
    //convierte el arreglo en texto y se le coloca un separador para formar la cadena
    $querys = "INSERT INTO " . static::$tablas;
    $querys .= " (";
    $querys .= join(', ', array_keys($zanitizar));
    $querys .= ") values ('";
    $querys .= join("','",array_values($zanitizar));
    $querys .= "');";
    //  $resultado = mysqli_query($bd,$querys);
    $result = self::$db->query($querys); 
    if($result){
        header('location: /admin?resultado=1');
    }   
}
//update a la base de datos 
public function update(){
    $zanitizar = $this->zanitizar();
    $valores = [];
    foreach($zanitizar as $key => $value){
        $valores[] = "{$key} = '{$value}'";
    }
    $query = "Update ". static::$tablas ." set ";
    $query .= (join(', ', $valores ));
    $query .= " where id = '" . self::$db->escape_string($this->id)."'";
    $query .= " LIMIT 1";
    $result = self::$db->query($query);
    if($result){
        header('location: /admin?resultado=2');
    }
}
//delete elimina un registro seleccionado
public function delete(){
    $query = "delete from ". static::$tablas ." where id = '" . self::$db->escape_string($this->id) . "' LIMIT 1;";
    $result = self::$db->query($query);
    if ($result) {
        $this->eliminar_imagen();
        header('Location: /admin?resultado=3');
    }
    
}
//definicion de la base de datos
public static function setdb($database){
    self::$db = $database;
    // debugear($database);
}
//subida de imagenes
public function SetImagen($imagen){
    //eliminacion de archivos ya creados
    if(!is_null($this->id)){
        $this->eliminar_imagen();
    }
    //asigna el nombre que padsemos por parametro de la funcion 
    if($imagen){
        $this->imagen = $imagen;
    }
}
public function eliminar_imagen(){
    $existe_imagen = file_exists(CARPETA_IMAGENES . $this->imagen . ".jpg");
    if($existe_imagen){
            unlink(CARPETA_IMAGENES . $this->imagen . ".jpg");
        }
}
//recorre las columas mediante un arreglo que se definio en el la clase como protected
public function atributos(){
    $atributos = [];
    foreach(static::$columnasdb as $columas){
        if($columas === 'id') continue;
        $atributos[$columas] = $this->$columas; 
    }
    return $atributos;
}
//sanitiza recorriendo el arreglo que se definio en la funcion de atributos 
public function zanitizar(){
    $atributos = $this->atributos();
    $sanitizado = [];
    //key hace referencia a las llaves del atrreglo y value al valor
    foreach($atributos as $key=>$value){
        $sanitizado[$key] = self::$db->escape_string($value);
    }
     return $sanitizado;
}
//Validaciones
public static function getErrores(){
    return static::$errores; 
}
public function validar(){
    self::$errores = [];
    return self::$errores;
}
//lista todas las propiedades
public static function all(){
    $query = "select * from " . static::$tablas;
    $resultado = self::consultaSql($query);
    // debugear($resultado);
    return $resultado;
}
public static function get($cantidad){
    $query = "select * from " . static::$tablas . " LIMIT " . $cantidad;
    $resultado = self::consultaSql($query);
    // debugear($resultado);
    return $resultado;
}

//busqueda de una sola propiedad
public static function find($id){
    $query_update = "SELECT * FROM " . static::$tablas ." WHERE ID = '${id}'";
    $result = self::consultaSql($query_update);
    return array_shift($result);
}
public static function consultaSql($query){
     //consulta base de datos 
    $result = self::$db->query($query);
     //iterar base de datos 
    // debugear($result->fetch_assoc());
    $array = [];
    while($registro = $result->fetch_assoc()){
        $array[] = static::crearObjectos($registro);
    }
     //liberar memoria 
        $result->free();
     //devolver los resultados 
        return $array;
}
protected static function crearObjectos($registro){
    $objecto = new static;
   
    foreach($registro as $key=> $value ){
        if(property_exists($objecto,$key)){
            $objecto->$key = $value;
        }    
    }
    return $objecto;
}   
//sincronizar el objecto con los cambios realizados en memoria
public function sincronizar($arg = []){
 
    foreach($arg as $key => $value){
        if(property_exists($this,$key) && !is_null($value)){
            $this->$key = $value;
        }
    }
}
}