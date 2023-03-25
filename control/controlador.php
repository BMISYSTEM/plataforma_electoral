<?php

// namespace controllers;
// use Router\Router;
// use model\propiedad;
// use model\vendedores;
// use Intervention\Image\ImageManagerStatic as Image;
// class controlador{
//     public static function index(router $router)
//     {   
//         $propiedades = propiedad::all();
//         $resultado = $_GET['resultado'] ?? null;
//         $vendedores = vendedores::all();
//         $router->render('propiedades/admin',[
//             'propiedades' => $propiedades, 
//             'resultado' => $resultado,
//             'vendedores' => $vendedores
//         ]);
//     }
    
//     public static function crear(router $router)
//     {   
//         $propiedad = new propiedad;
//         $vendedores = vendedores::all();
//         $errores = propiedad::getErrores();
//         if($_SERVER['REQUEST_METHOD'] === 'POST'){
//             //instanciamos el objecto propiedad
//             $propiedad = new propiedad($_POST['propiedad']);
          
//              //creacion de carpeta
//              if(!is_dir(CARPETA_IMAGENES)){
//                 mkdir(CARPETA_IMAGENES);                
//             }
//             //genera un nonbre unico a la imagen
//             $nombre_imagen = md5(uniqid(rand(),true));
//             //guardado de imagen en el servidor con la libreria intervention
//            if($_FILES['propiedad']['tmp_name']['imagenes']){
//                //asignar imagen en carpeta 
//                //realiza un carga con intervention intalado desde composter
//                $image = Image::make($_FILES['propiedad']['tmp_name']['imagenes'])->fit(800,600);
//                $propiedad->SetImagen($nombre_imagen);
//             }
//             //objecto de errores
//             $errores = $propiedad->validar();
//             //insertar en la base de datos
//             if(empty($errores)){
//                 //guardarla en el servidor 
//                 $image->save(CARPETA_IMAGENES.$nombre_imagen.".jpg");
//                 //objecto de guardado que guarda en la base de datos
//                 $propiedad->guardar();
//             }
          
//         }
//         $router->render('propiedades/crear',[
//             'propiedad' => $propiedad,
//             'vendedor' => $vendedores,
//             'errores' => $errores
//         ]);
//     }
//     public static function actualizar(router $router)
//     {   
//         $id = urlcomprobation('/admin');
//         $propiedades = propiedad::find($id);
//         $resultado = $_GET['resultado'] ?? null;
//         $vendedores = vendedores::all();
//         if($_SERVER['REQUEST_METHOD'] === 'POST'){
//             $propiedades->sincronizar($_POST['propiedad']);
//             //creacion de carpeta
//             if(!is_dir(CARPETA_IMAGENES)){
//                 mkdir(CARPETA_IMAGENES);                
//             }
//             //genera un nonbre unico a la imagen
//             $nombre_imagen = md5(uniqid(rand(),true));
//             //guardado de imagen en el servidor con la libreria intervention
//            if($_FILES['propiedad']['tmp_name']['imagenes']){
//                //asignar imagen en carpeta 
//                //realiza un carga con intervention intalado desde composter
//                $image = Image::make($_FILES['propiedad']['tmp_name']['imagenes'])->fit(800,600);
//                $propiedades->SetImagen($nombre_imagen);
//             }
//             $errores = $propiedades->validar();
//             if(empty($errores)){
//                 if($_FILES['propiedad']['tmp_name']['imagenes']){
//                     //guardar la imagen en el disco duro
//                     $image->save(CARPETA_IMAGENES . $nombre_imagen . ".jpg");
//                     }
//                 $propiedades->update();
//             }
//         }
//         $router->render('propiedades/actualizar',[
//             'propiedad' => $propiedades, 
//             'resultado' => $resultado,
//             'vendedor' => $vendedores,
//             'errores' => $errores
//         ]);
//     }
//     public static function delete(){
//         if($_SERVER['REQUEST_METHOD'] === 'POST'){
//             //elimina la propiedad
//             $id = $_POST['id'];
//             if (!is_null($id)) {
//                 $tipo = $_POST['tipo'];
//                 if(validar_contenido($tipo)){
//                     if($tipo === "propiedad"){
//                         $propiedad = propiedad::find($id);
//                         // debugear($propiedad);
//                         $result = $propiedad->delete();
//                         //eliminar imagen 
//                     }else {
//                         $vendedor = vendedores::find($id);
//                         $result = $vendedor->delete();
//                     }
//                     }
//                 }
//             }
//     }
// }
?>