function darkmode(){
    const preferencias = window.matchMedia('(prefers-color-scheme: dark)');
    //console.log(preferencias.matches); 
    if(preferencias.matches){
        document.body.classList.toggle('dark-mode');
    }
    preferencias.addEventListener('change',darkfuncion());
    const dark = document.querySelector('.darkmode');
    dark.addEventListener('click',darkfuncion);
}

function darkfuncion(){
    document.body.classList.toggle('dark-mode');
}

const abrirModal = ()  => {
    let div = ` <div class="over" id="overdiv">
                 <div class="modalaccion">
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
</div>
                 </div>
                 <p class="exit" onclick="exit()">X</p>
                </div>
    `;
    $('#modalzoom').html(div);
}
const exit = () =>{
    overdiv.remove();
}

const mostrarcontrase = () => {
    if(document.querySelector("#passwords.contrase")){
        $('#passwords').attr('type','text');
        $('#passwords').attr('class','texto');
        $('#cont').attr('class','fa-solid fa-eye ojocerrado');
    }else{
        $('#passwords').attr('type','password');
        $('#passwords').attr('class','contrase');
        $('#cont').attr('class','fa-solid fa-eye-slash ojocerrado');
    }
}

const menu = () =>{
    if(document.querySelector("#dash.dashboard")){
        $('#dash').attr('class','dash-en');
        $('#menu').attr('class','boton-transparente-menu-en');

    }else{
        $('#dash').attr('class','dashboard');
        $('#menu').attr('class','boton-transparente-menu');

    }
}
const dahss = () =>{
    let titulo = `<p>Dashboard</p>`;
    $("#titulos").html(titulo);
    let formulario = "";
    $("#dash").get(0).style.setProperty("background-image", "url(/imagenes/1.png)");
    $("#opone").removeClass("boton-transparente").addClass("boton-seleccion");
    $("#opthu").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#optree").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#opfor").removeClass("boton-seleccion").addClass("boton-transparente");
    formulario =`
    <div class="seccion-dashboard-grafic">
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
    `
    $("#contenido").html(formulario);
    mapa();
    cargar();
}
const Formulario_lideres = () =>{
    let titulo = `<p>Registro de lideres</p>`;
    $("#titulos").html(titulo);
    let formulario = "";
    $("#dash").get(0).style.setProperty("background-image", "url(/imagenes/2.png)");
    $("#opone").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#opthu").removeClass("boton-transparente").addClass("boton-seleccion");
    $("#optree").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#opfor").removeClass("boton-seleccion").addClass("boton-transparente");
    formulario = `<div class="formularios">
    <form action="" >
        <div class="formulario secciones">
            <div id="alertas">
            
            </div>
            <div class="tarjetas">
                <p>Datos personales</p>
                <section >
                    <label for=""> Nombre</label>
                    <input type="text" id="nombre" name="nombre">
                    <label for=""> Apellido</label>
                    <input type="text" id="apellido" name="apellido">
                    <label for=""> Cedula</label>
                    <input type="text" id="cedula" name="cedula">
                    <label for=""> Fecha de nacimiento</label>
                    <input type="date" id="data" name="data">
            </div>
            <div class="tarjetas">
                <p>Datos de contacto</p>
                <section>
                    <label for=""> Correo</label>
                    <input type="email" id="email" name="email">
                    <label for=""> Telefono</label>
                    <input type="" id="telefono" name="telefono">
                    <label for=""> ciudad</label>
                    <input type="text" id="ciudad" name="ciudad">
                    <label for=""> Region</label>
                    <input type="text" id="region" name="region">
                    <label for=""> Password</label>
                    <input type="password" id="password" name="password">
                </section>
            </div>
        </div>
        <button type="button" class="boton-linea" onclick="lideres()">Registrar</button>
        </form>    
</div>`;
    $("#contenido").html(formulario);
}
//crea el formulario de los puestos de votaciones
const Formulario_puestos = () =>{
    $("#dash").get(0).style.setProperty("background-image", "url(/imagenes/4.png)");
    $("#opone").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#opthu").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#optree").removeClass("boton-transparente").addClass("boton-seleccion");
    $("#opfor").removeClass("boton-seleccion").addClass("boton-transparente");
    let titulo = `<p id="tituloformulario">Registro de puestos</p>`;
    $("#titulos").html(titulo);
    formulario = `<div class="formularios">
    <form action="" >
        <div class="formulario secciones">
            <div class="tarjetas">
                <p>puesto</p>
                <section >
                    <label for="">Ciudad</label>
                    <input type="text" id="ciudad">
                    <label for="">Cuadrante</label>
                    <input type="text" id="cuadrante">
                    <label for="">Numero de puesto</label>
                    <input type="text" id="puesto">
            </div>
            
        </div>
        <button type="button" class="boton-linea" onclick="Puestos()">Registrar</button>
        </form>    
</div>`;

    $("#contenido").html(formulario);
}

const Formulario_votantes = () =>{
    $("#dash").get(0).style.setProperty("background-image", "url(/imagenes/3.png)");
    $("#opone").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#opthu").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#optree").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#opfor").removeClass("boton-transparente").addClass("boton-seleccion");
    let titulo = `<p id="tituloformulario">Registro de puestos</p>`;
    $("#titulos").html(titulo);
    formulario = `<div class="formularios">
    <form action="" >
        <div class="formulario secciones">
            <div class="tarjetas">
                <p>puesto</p>
                    <section >
                        <label for="">Ciudad</label>
                        <input type="text" id="ciudad" name="ciudad">
                        <label for="">Zona</label>
                        <input type="text" id="cuadrante" name="cuadrante">
                        <label for="">Nombre</label>
                        <input type="text" id="nombre" name="nombre">
                        <label for="">Apellido</label>
                        <input type="text" id="apellido" name="apellido">
                    </section >
             </div>
            <div class="tarjetas">
                    <section >
                        <label for="">Genero</label>
                        <select name="genero" id="vendedor">
                            <option selected value="">--seleccione--</option>
                            <option  value="m">Masculino</option>
                            <option  value="f">Femenino</option>
                            <option  value="o">Otro</option>
                        </select>
                        <label for="">Puesto de votacion</label>
                        <input type="text" id="puesto" name="puesto">
                    </section >
            </div>    
        </div>
        <button type="button" class="boton-linea" onclick="Puestos()">Registrar</button>
        </form>    
</div>`;

    $("#contenido").html(formulario);

}
const darkmodedash = () =>{
    if(document.querySelector("#valida.modoclaro")){
        $("#barra-lateral").get(0).style.setProperty("background-color", "black");
        $("#contenido").get(0).style.setProperty("background-color", "transparent");
        $("#body").get(0).style.setProperty("background-color", "gray");
        $('#claro').attr('class','fa-solid fa-toggle-on dark');
        $('#valida').attr('class','modoscuro');
    }else if(document.querySelector("#valida.modoscuro")){
        $("#barra-lateral").get(0).style.setProperty("background-color", "rgba(36, 111, 136, 0.797)");
        $("#contenido").get(0).style.setProperty("background-color", "transparent");
        $("#body").get(0).style.setProperty("background-color", "white");
        $('#claro').attr('class','fa-solid fa-toggle-off dark');
        $('#valida').attr('class','modoclaro');
    }
}


//inserts

async function lideres(){

    const datos = new FormData();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cedula = document.getElementById("cedula").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let ciudad = document.getElementById("ciudad").value;
    let region = document.getElementById("region").value;
    let password = document.getElementById("password").value;

    datos.append('insert',"lideres");
    datos.append('nombre',nombre);
    datos.append('apellido',apellido);
    datos.append('cedula',cedula);
    datos.append('fechanacimiento',data);
    datos.append('email',email);
    datos.append('telefono',telefono);
    datos.append('ciudad',ciudad);
    datos.append('region',region);
    datos.append('password',password);

    try {
        const url ='/principal';
        const respuesta = await fetch(url,{
            method: 'POST',
            body: datos 
        });
        const resultado = await respuesta.json();
        if(length.resultado !== 0){
            let errores = "";
            resultado.forEach(result => {
                if(result == "insertado"){
                        errores += `<p class="ok">registrado correctamente</p>`;
                }else{
                    errores += `<p class="error">${result}</p>`;
                }
            });
            let div = `<div class="over" id="overdiv">
                 <div class="modalaccion" >
                     <div class="formularios_acciones" width="20rem">
                        <div class="acciones" id="text">
                            
                        </div>
                    </div>
                 </div>
                 <p class="exit" onclick="exit()">X</p>
                </div>`;
        $('#modalzoom').html(div);
        $('#text').html(errores);
        }
    } catch (error) {
        console.log(error);
    }





}
//inserta en la base de datos los puestos
async function Puestos() {
    const datos = new FormData();
    let ciudad = document.getElementById("ciudad").value;
    let cuadrante = document.getElementById("cuadrante").value;
    let puesto = document.getElementById("puesto").value;
    datos.append('ciudad',ciudad);
    datos.append('cuadrante',cuadrante);
    datos.append('puesto',puesto);
    try {
        const url ='http://localhost:3000/principal';
        const respuesta = await fetch(url,{
            method: 'POST',
            body: datos 
        });
        const resultado = await respuesta.json();
        console.log(resultado); 
    } catch (error) {
        console.log(error);
    }

}

