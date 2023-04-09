<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="build/css/app.css">
    <script src="build/js/jquery.js"></script>
    <title>Login</title>
</head>
<body>
<div id="modalzoom">
      
</div>
        <div class="loginPage">
        <div class="login">
            <picture class="picture-logo">
                <img class="logo" src="imagenes/logo_sebastian1.png" alt="logo de la empresa">
            </picture>
            <?php foreach($errores as $error){?>
                <div class="alerta error">
                    <?php echo $error;?>
                </div>
            <?php }?>
            <form method="POST" class="formulario" action="/">
                <label for="">Usuario</label>
                <input type="text" placeholder="Usuario" required name="email" id="user">
                <p  ></p>
                
                <label for="">Constraseña</label>
                <div class="ojos" onclick="mostrarcontrase()" id="ojos">
                <i class="fa-solid fa-eye-slash ojocerrado" id="cont"></i>
                </div>
                <input type="password" required name="pasword" id="password" class="contrase">
                    <p  onclick="olvidepass()">Olvido su Contraseña?</p>
                <button type="button" class="boton-inline" onclick="logi()">Registrar</button>
            </form>
        </div>
    </div>
    <script src="build/js/bundle.min.js"></script>
</body>
</html>