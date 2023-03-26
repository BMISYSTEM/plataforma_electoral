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
    <title>Dashboard</title>
</head>
<body>
    <div class="dashboard" id="dash">
        <div class="menu-dash" id="barra-lateral">
            <!-- expandir menu -->
            <div class="boton-transparente-menu" id="menu" onclick="menu()">
            <i class="fa-sharp fa-solid fa-bars  fa-xs icono-menu"></i>
            </div>
            <!-- menu -->
            <div class="boton-transparente" id="opone">
            <i class="  fa-solid fa-chart-simple icono"></i>
                <span>Dashboard</span>
            </div>
            <div class="boton-transparente" id="opthu">
                <i class="fa-solid fa-users icono"></i>
                 <span>Usualios Lideres</span>
            </div>
            <div class="boton-transparente" id="optree">
                <i class="fa-solid fa-check-to-slot icono"></i>
                <span>Puestos de votacion</span>
            </div>
            <div class="boton-transparente" id="opfor">
                <i class="fa-solid fa-person-booth icono"></i>
                <span>Votantes</span>
            </div>
           
                
        </div>
        <div class="seccion-dashboard">
            <div class="header-dashboard">
                <div class="opciones">
                    <span class="session">
                        <?php echo $_SESSION['usuario']?>
                    </span>
                    <div id="foto" class="foto-redonda">
                        <img src="" alt="" >
                    </div>
                </div>
                    
                <!-- aca se remplaza por los titulos y la seccion -->
            </div>
            <div class="content-dashboard">
                <!-- aca se remplaza por las pantallas que se necesitan -->
            </div>
            <div class="footer-dashboard">

            </div>
        </div>
    </div>
    <script src="build/js/bundle.min.js"></script>
    
</body>
</html>