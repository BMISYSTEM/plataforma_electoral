<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="build/css/app.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
     integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
     crossorigin=""/>
     <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
     integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
     crossorigin=""></script>
    <title>Document</title>
</head>
<body>
<div class=".seccion-dashboard-grafic">
    <div id="map"></div>
    <div class="hombre-mujer">
        <canvas id="myChart"></canvas>
    </div>
    <div class="votantes">
    <canvas id="rodaja"></canvas>
    </div>
    <div class="popularidad-mensual">
        <canvas id="popularidad"></canvas>
    </div>
</div>



<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="build/js/mapa.js"></script>
<script src="build/js/graficas.js"></script>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   		integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   		crossorigin=""></script> 






           










    <!-- <h1>nombre</h1>
<div class="formularios_acciones">
    <div class="acciones">
        <div class="boton-acciones-verde" id="opfor" onclick="">
            <span>Cambiar contraseña</span>
            <i class="fa-solid fa-key"></i>
        </div>
        <div class="boton-acciones-rojo" id="opfor" onclick="Formulario_votantes()">
            <span>Cerrar seccion</span>
            <i class="fa-solid fa-right-from-bracket"></i>
        </div>
    </div>
</div> -->
    <!-- <form action="" >
        <div class="formulario secciones">

            <div class="tarjetas" id="uno">
                <p>Datos personales</p>
                <section >
                    <label for=""> Nombre</label>
                    <input type="text">
                    <label for=""> Apellido</label>
                    <input type="text">
                    <label for=""> Cedula</label>
                    <input type="text">
                    <label for=""> Fecha de nacimiento</label>
                    <input type="date">
            </div>
            <div class="tarjetas" id="dos">
                <p>Datos de contacto</p>
        
                <section>
                    <label for=""> Correo</label>
                    <input type="text">
                    <label for=""> Telefono</label>
                    <input type="">
                    <label for="">Numero de puesto devotacion</label>
                    <input type="text">
                </section>
            </div>
        </div>
        <input type="submit" class="boton-linea" value="Registrar">
        </form>     -->
</div>
</body>
</html>
