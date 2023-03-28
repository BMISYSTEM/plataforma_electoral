document.addEventListener("DOMContentLoaded",function(){
    funcion1();
    darkmode();
});
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
                 <h1>acciones</h1>
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
    $("#opone").removeClass("boton-transparente").addClass("boton-seleccion");
    $("#opthu").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#optree").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#opfor").removeClass("boton-seleccion").addClass("boton-transparente");
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

            <div class="tarjetas">
                <p>Datos personales</p>
                <section >
                    <label for=""> Nombre</label>
                    <input type="text">
                    <label for=""> Apellido</label>
                    <input type="text">
                    <label for=""> Cedula</label>
                    <input type="text">
                    <label for=""> Fecha de nacimiento</label>
                    <input type="data">
                    <label for=""> Fecha de nacimiento</label>
                    <input type="date">
            </div>
            <div class="tarjetas">
                <p>Datos de contacto</p>
                <section>
                    <label for=""> Correo</label>
                    <input type="text">
                    <label for=""> Telefono</label>
                    <input type="">
                    <label for=""> ciudad</label>
                    <input type="text">
                    <label for=""> Region</label>
                    <input type="text">
                </section>
            </div>
        </div>
        <button type="button" class="boton-linea" onclick="Puestos()">Registrar</button>
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
const Formulario_votantes = () =>{
    $("#opone").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#opthu").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#optree").removeClass("boton-seleccion").addClass("boton-transparente");
    $("#opfor").removeClass("boton-transparente").addClass("boton-seleccion");
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