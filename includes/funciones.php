<?php
define('TEMPLATE_URL',__DIR__ .'/template');
define('FUNCIONES_URL',__DIR__.'funciones.php');
define('CARPETA_IMAGENES', $_SERVER['DOCUMENT_ROOT'] . "/imagenes/");
function incluirtemplate(string $template,bool $inicio = false){
    include TEMPLATE_URL . "/${template}.php";
}

function debugear($variable){
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}
//sanitisar o escapar el html
function s($html): string{
    $s = htmlspecialchars($html);
    return $s;
}
//validar tipo de contenido
function validar_contenido($tipo){
    $tipos = ['vendedor','propiedad'];
    return in_array($tipo,$tipos);
}
//muestra los mensajes
function mostrar_notificacion($codigo){
    $mensaje = '';
    switch($codigo){
        case 1:
            $mensaje = 'se creo correctamente';
            break; 
        case 2:
            $mensaje = 'se actualizo correctamente';
            break;
        case 3:
            $mensaje = 'se elimino correctamente';
            break;
        default:
            $mensaje = false;
            break;
    }
    return $mensaje;
}

//validar url

 function urlcomprobation(string $url){
    $id = $_GET['id'];
    $id = filter_var($id,FILTER_VALIDATE_INT);
    if(!$id){
        header("location: ${url}");
    }
    return $id;
}