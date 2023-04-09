const urlprincipal = "/principal";

const seccion_menu = ($resultado) =>{
    let div = "";
    if($resultado === '1'){
        div = `
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
                    </div>`;
    }else{
        div = `
                    <div class="boton-transparente" id="opfor" onclick="Formulario_votantes()">
                        <img src="imagenes/voto2.png" alt="registro-botantes" class="icono-menu-opciones">
                        <span>Votantes</span>
                    </div>`;
    }
    $('#seccion-botones').html(div);
}


async function session() {
    const datos = new FormData();
    datos.append('tipo','session');
    try {
        const url =urlprincipal;
        const respuesta = await fetch(url,{
            method: 'POST',
            body: datos 
        });
        const resultado = await respuesta.json();
        seccion_menu(resultado);
    } catch (error) {
        console.log(error);
    }

}

















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
    $('#contenido').html(``);
    let div = ` <div class="over" id="overdiv">
                 <div class="modalaccion">
                 <div class="formularios_acciones">
    <div class="acciones">
        <div class="boton-acciones-verde" id="opfor" onclick="actualizardatos()">
            <span>Actualizar datos</span>
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
//actualizacion de datos personales
const actualizardatos = ()  => {
    let titulo = `<p>Actualizacion de datos</p>`;
    $("#titulos").html(titulo);
    let div = `<div class="actualizacion-data">
    <div class="formularios">
        <form action="" >
            <div class="formulario secciones">
                <div class="photo">
                    <input type="file" id="photos" name="photos" class="photobtn">
                    <embed id="preview" src="" type="image/png" class="preview" width="100%" height="100%" 
                    background-color="white" text="cargar foto">
                </div>
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
    </div>
</div>

    `;
    overdiv.remove();
    $('#contenido').html(div);
    cargarfoto();
}
const cargarfoto = () =>{
    document.querySelector("#photos").addEventListener('change',() =>{
        // console.log("click");
        let pdf = document.querySelector('#photos').files[0];
        console.log(pdf)
        let url = URL.createObjectURL(pdf) ;
        $('#preview').attr('src',url);
    });
}

const exit = () =>{
    overdiv.remove();
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
    let titulo = `<p>Dashboard</p>
                    <select name="lideres" id="lideres_seleccion">
                    <option select>--Seleccione un lider--</option>
                    </select> `;
    $("#titulos").html(titulo);
    select_lideres();
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
async function select_lideres(){
    const datosf = new FormData();
    datosf.append('tabla','user');
    datosf.append('tipo','lideres_select');
    try {
        const url = urlprincipal;
        const localizacion = await fetch(url,{
            method: 'POST',
            body: datosf
        });
        const puntos = await localizacion.json();
        console.log(puntos);
        let options = `<option select>--seleccione--</opction>`;
        if(length.puntos != 0){
            puntos.forEach(resultp =>{
                options += `<option  value="${resultp['id']}">${resultp['nombre']}</option>`;
            });

            $("#lideres_seleccion").html(options);
        } 
    } catch (error) {
        console.log(error);
    }
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
    formulario = `<div class="actualizacion-data">
    <div class="formularios">
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
                <div class="photo">
                <input type="file" id="photos" name="photos" class="photobtn">
                <embed id="preview" src="" type="image/png" class="preview" width="100%" height="100%" 
                background-color="white">
            </div>
            </div>
            <button type="button" class="boton-linea" onclick="lideres()">Registrar</button>
            </form>    
    </div>
</div>`;
    $("#contenido").html(formulario);
    cargarfoto();
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
                <p>Votante</p>
                    <section >
                        <label for="">Nombre</label>
                        <input type="text" id="nombre" name="nombre">
                        <label for="">Apellido</label>
                        <input type="text" id="apellido" name="apellido">
                        <label for="">Telefono</label>
                        <input type="text" id="telefono" name="telefono">
                        <label for="">Correo</label>
                        <input type="email" id="Correo" name="Correo">
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
                        <select name="puestos" id="puestos">
                        </select>
                        <label for="">Numero de mesa</label>
                        <input type="number" id="puesto" name="puesto">
                    </section >
            </div>    
        </div>
        <button type="button" class="boton-linea" onclick="Puestos()">Registrar</button>
        </form>    
</div>`;

    $("#contenido").html(formulario);
    puestosid();
}
const darkmodedash = () =>{
    if(document.querySelector("#valida.modoclaro")){
        $("#barra-lateral").get(0).style.setProperty("background-color", "black");
        $("#contenido").get(0).style.setProperty("background-color", "transparent");
        $("#body").get(0).style.setProperty("background-color", "gray");
        $('#claro').attr('class','fa-solid fa-toggle-on dark');
        $('#valida').attr('class','modoscuro');
    }else if(document.querySelector("#valida.modoscuro")){
        $("#barra-lateral").get(0).style.setProperty("background-color", "rgba(70, 67, 67, 0.568)");
        $("#contenido").get(0).style.setProperty("background-color", "transparent");
        $("#body").get(0).style.setProperty("background-color", "white");
        $('#claro').attr('class','fa-solid fa-toggle-off dark');
        $('#valida').attr('class','modoclaro');
    }
}

//consultas
async function puestosid() {
    const datosf = new FormData();
    datosf.append('tabla','puestosv');
    datosf.append('tipo','puestosv');
    try {
        const url =urlprincipal;
        const localizacion = await fetch(url,{
            method: 'POST',
            body: datosf
        });
        const puntos = await localizacion.json();
        console.log(puntos);
        let options = `<option select>--seleccione--</opction>`;
        if(length.puntos != 0){
            puntos.forEach(resultp =>{
                options += `<option  value="${resultp['id']}">${resultp['nombre']}</option>`;
            });

            $("#puestos").html(options);
        } 
    } catch (error) {
        console.log(error);
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

    datos.append('tipo',"lideres");
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
        const url = urlprincipal;
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
        const url =urlprincipal;
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

session();