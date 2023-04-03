<?php session_start()?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="build/css/app.css">
    <script src="build/js/jquery.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
     integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
     crossorigin=""/>
     <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
     integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
     crossorigin=""></script>
    <title>Dashboard</title>
</head>
<body id="body" class="body">
    <div id="modalzoom"></div>
    <div class="dashboard" id="dash">
        <div class="menu-dash" id="barra-lateral">
            <!-- expandir menu -->
            <div class="boton-transparente-menu boton-en" id="menu" onclick="menu()">
            <img src="imagenes/menu.png" alt="menu hamburguesa" class="icono-menu">
            </div>
            <div class="barra-separador"></div>
            <!-- menu -->
            <div class="boton-transparente" id="opone" onclick="dahss()">
            <img src="imagenes/estadistica.png" alt="dashboard" class="icono-menu-opciones">
                <span>Estadistica</span>
            </div>
            <div class="boton-transparente" id="opthu" onclick="Formulario_lideres()">
                <img src="imagenes/usuarios.png" alt="usuarios-lideres" class="icono-menu-opciones">
                 <span>Usuarios Lideres</span>
            </div>
            <!-- <div class="boton-transparente" id="optree" onclick="Formulario_puestos()">
                <i class="fa-solid fa-check-to-slot icono"></i>
                <span>Puestos de votacion</span>
            </div> -->
            <div class="boton-transparente" id="opfor" onclick="Formulario_votantes()">
                <img src="imagenes/voto2.png" alt="registro-botantes" class="icono-menu-opciones">
                <span>Votantes</span>
            </div>
            <div class="opciondark" id="opfor">
            <i class="fa-solid fa-toggle-off dark"  id="claro" onclick="darkmodedash()"></i>
                <span id="valida"    class="modoclaro">Modo noche</span>
            </div>   
            <div class="logo-footer" id="logonav">
                <img class="icono-menu-footer" id="logmenu" src="imagenes/logo_sebastian1.png" alt="logo de la empresa">
            </div>  
        </div>
        <div class="seccion-dashboard">
            <div class="header-dashboard">
                <div class="titulos" id="titulos">
                    <!--aca van los titulos de las paginas-->
                </div>
                <div class="opciones">
                    <span class="session">
                        
                        <?php echo $_SESSION['usuario']?>
                    </span>
                    <div id="foto" class="foto-redonda" onclick="abrirModal()">
                        <img src="" alt="" >
                    </div>
                </div>
                    
                <!-- aca se remplaza por los titulos y la seccion -->
            </div>
            <div class="content-dashboard" id="contenido">
                <!-- aca se remplaza por las pantallas que se necesitan -->
            </div>
            <div class="footer-dashboard">
                <p>Todos los derechos reservados @</p>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="build/js/mapa.js"></script>
    <script src="build/js/graficas.js"></script>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   		integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   		crossorigin=""></script> 
    <script src="build/js/bundle.min.js"></script>
</body>
</html>
