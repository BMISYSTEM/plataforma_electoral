<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="build/css/app.css">
    <script src="build/js/jquery.js"></script>
    <title>Login</title>
</head>
<body>
<div id="modalzoom">
      
</div>
    
        <div class="publicidad">
            <img src="imagenes/campanas.jpg" alt="">
        
        </div>
        <div class="loginPage">
        <div class="login">
            <picture class="picture-logo">
                <img class="logo" src="imagenes/logo_sebastian.png" alt="logo de la empresa">
            </picture>
            <?php foreach($errores as $error){?>
                <div class="alerta error">
                    <?php echo $error;?>
                </div>
            <?php }?>
            <form method="POST" class="formulario" action="/">
                <label for="">Usuario</label>
                <input type="text" placeholder="Usuario" required name="email">
                <p  onclick="abrirModal()">Olvido su Contraseña?</p>
                <label for="">Constraseña</label>
                <input type="password" required name="pasword">
                <div class="ojos">
                    <img  src="imagenes/ojos-cerrados.png" alt="logo de la empresa" class="ojocerrado">
                </div>
                <p href="" onclick="abrirModal()">Olvido su Usuario?</p>
                <input type="submit" value="Ingresar" class="boton-inline" value="Password">
            </form>
        </div>
    </div>
    <script src="build/js/bundle.min.js"></script>
</body>
</html>