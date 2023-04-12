//constante donde se envia las peticiones fech
const urlprincipal = "/principal";
//crea las opciones del menu
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
// consulta el rol con el que se inicio seccion
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
    fotosession();
}
//foto de seccion 
async function fotosession(){
    const datos = new FormData();
    datos.append('tipo','fotosession');
    try {
        const url =urlprincipal;
        const respuesta = await fetch(url,{
            method: 'POST',
            body: datos 
        });
        const resultado = await respuesta.json();
        $("#fotosession").attr("src","build/img/" + resultado);
    } catch (error) {
        console.log(error);
    }

}
//funcion de oscurecer la barra de tareas
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
//crear la modal para las opciones
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
        <div class="boton-acciones-rojo" id="opfor" onclick="cerrar_session()">
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
//cerrar seccion
async function cerrar_session(){
    const datosf = new FormData();
    datosf.append('tipo','cerrar');
    try {
        const url = urlprincipal;
        const localizacion = await fetch(url,{
            method: 'POST',
            body: datosf
        });
        const respuesta = await localizacion.json();
        if(respuesta == true){
            location.href = "/";
        }
    } catch (error) {
        console.log(error);
    }
}
//actualizacion de datos personales en el formulario 
async function actualizardatos(){
    const datosf = new FormData();
    datosf.append('tabla','user');
    datosf.append('tipo','actualizar');
    try {
        const url = urlprincipal;
        const localizacion = await fetch(url,{
            method: 'POST',
            body: datosf
        });
        const respuesta = await localizacion.json();
                // options += `<option  value="${resultp['id']}">${resultp['nombre']}</option>`;
                let titulo = `<p>Actualizacion de datos</p>`;
                $("#titulos").html(titulo);
                let div = `<div class="actualizacion-data">
                <div class="formularios">
                    <form action="" >
                        <div class="formulario secciones">
                            <div class="photo">
                                <input type="file" id="photos" name="photos" class="photobtn">
                                <embed id="preview" src="build/img/${respuesta['foto']}" type="image/png" class="preview" width="100%" height="100%" 
                                background-color="white" text="cargar foto">
                            </div>
                            <div id="alertas">
                            </div>
                            <div class="tarjetas">
                                <p>Datos personales</p>
                                <section >
                                    <input type="hidden" id="id" name="id" value ="${respuesta['id']}">

                                    <label for="">Nombre</label>
                                    <input type="text" id="nombre" name="nombre" value ="${respuesta['nombre']}">
                                    <label for=""> Apellido</label>
                                    <input type="text" id="apellido" name="apellido" value ="${respuesta['apellido']}">
                                    <label for=""> Cedula</label>
                                    <input type="text" id="cedula" name="cedula" value ="${respuesta['cedula']}">
                                    <label for=""> Fecha de nacimiento</label>
                                    <input type="date" id="data" name="data" value ="${respuesta['fechanacimiento']}">
                            </div>
                            <div class="tarjetas">
                                <p>Datos de contacto</p>
                                <section>
                                    <label for=""> Correo</label>
                                    <input type="email" id="email" name="email" value ="${respuesta['email']}">
                                    <label for=""> Telefono</label>
                                    <input type="" id="telefono" name="telefono" value ="${respuesta['telefono']}">
                                    <label for=""> ciudad</label>
                                    <input type="text" id="ciudad" name="ciudad" value ="${respuesta['ciudad']}"
                                    <label for=""> Region</label>
                                    <input type="text" id="region" name="region" value ="${respuesta['region']}">
                                    <label for=""> Password</label>
                                    <input type="password" id="password" name="password" placeolder="nuevo password">
                                </section>
                            </div>
                        </div>
                        <button type="button" class="boton-linea" onclick="actualizardatosperosnales()">Registrar</button>
                        </form>    
                </div>
            </div>
            
                `;
                overdiv.remove();
                $('#contenido').html(div);
                cargarfoto();
    } catch (error) {
        console.log(error);
    }
   
}
//envia los datos al servidor para la actualizacion de datos personales
async function actualizardatosperosnales(){
    const datos = new FormData();
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cedula = document.getElementById("cedula").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let ciudad = document.getElementById("ciudad").value;
    let region = document.getElementById("region").value;
    let password = document.getElementById("password").value;
    let foto = document.querySelector('#photos').files[0];
    
    datos.append('tabla','user');
    datos.append('id',id);
    datos.append('nombre',nombre);
    datos.append('apellido',apellido);
    datos.append('cedula',cedula);
    datos.append('fechanacimiento',data);
    datos.append('email',email);
    datos.append('telefono',telefono);
    datos.append('ciudad',ciudad);
    datos.append('region',region);
    datos.append('password',password);
    datos.append('foto',foto);
    datos.append('tipo','update_lideres');
    try {
        const url = urlprincipal;
        const localizacion = await fetch(url,{
            method: 'POST',
            body: datos
        });
        const respuesta = await localizacion.json();
        if(respuesta == true){
            alert("se realizo el cambio de forma correcta");
            location.href = "/principal";
        }else{
            alert("por algun motivo no se realizo el cambio");

        }
    } catch (error) {
        console.log(error);
    }
}
//permite visualizar el archivo cargado
const cargarfoto = () =>{
    document.querySelector("#photos").addEventListener('change',() =>{
        // console.log("click");
        let pdf = document.querySelector('#photos').files[0];
        console.log(pdf)
        let url = URL.createObjectURL(pdf) ;
        $('#preview').attr('src',url);
    });
}
//elimian la modal abiera
const exit = () =>{
    overdiv.remove();
}
//cambia el estilo de la barra lateral del menu para que se encoja o se expanda segun sea el dispositivo
const menu = () =>{
    if(document.querySelector("#dash.dashboard")){
        $('#dash').attr('class','dash-en');
        $('#menu').attr('class','boton-transparente-menu-en');

    }else{
        $('#dash').attr('class','dashboard');
        $('#menu').attr('class','boton-transparente-menu');

    }
}
//crea el dasboard
const dahss = () =>{
    let titulo = `<p>Dashboard</p>
                    <select name="lideres" id="lideres_seleccion" onchange="filtro_lider()">
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
    <div class="seccion-dashboard-grafic" id="seccion-dashboard-grafic">
    <div class="contenedor_mapa" id="mapas">
    <div class="opciones">
        <div class="opcion-mapa" id="opthu" onclick="mapa_sin()"><img src="build/img/marcador.png" class="icono-mapa"></div>
        <div class="opcion-mapa" id="opthu" onclick="calor()"><img src="build/img/hot.png" class="icono-mapa"></div>
    </div>
    
    <div id="map" class="map"></div>
    <div id="mapa_sin" class="mapacero"></div>
    </div>
    <div class="hombre-mujer">
        
    </div>
    <div class="votantes" id="votantes">
  
    </div>
    <div class="popularidad-mensual">
        <canvas id="myChart"></canvas>
        
    </div>
    <div id="lista_Lideres" class="lista_lideres">
    <table class="tabla_lideres">
    <thead>
            <th>Nombre</th>
            <th>Votos M</th>
            <th>Votos F</th>
            <th>Votos O</th>
            <th>Total</th>
            <th>Inavilitar</th>
        </thead>
        <tbody id="filas_lideres">
        <tr >
        </tr>
        </tbody>
    </div>
    </div>
    `
    $("#contenido").html(formulario);
    mapa();
    cargar();
    hombre_mujer_otro();
    table_lideres();
}
//consulta las estadisticas de todos los lideres
const table_lideres = () =>{
    table_lideres_();
    async function table_lideres_() {
        const datos = new FormData();
        datos.append('tipo','lideres_tabla');
        try {
            const url =urlprincipal;
            const respuesta = await fetch(url,{
                method: 'POST',
                body: datos 
            });
            const resultado = await respuesta.json();
            console.log(resultado);
            let html = '';
            resultado.forEach(lideres =>{
                console.log(lideres);
                html += `
                <tr>
                <td>${lideres['0']}</td>
                <td>${lideres['2']}</td>
                <td>${lideres['3']}</td>
                <td>${lideres['4']}</td>
                <td>${lideres['1']}</td>
                <tr>
                `;
            });
            $('#filas_lideres').html(html);
        } catch (error) {
            console.log(error);
        }
    }
}
//stadisticas hombre mujer otro
const hombre_mujer_otro = () =>{
    hombre_mujer_otro_consult();
    async function hombre_mujer_otro_consult() {
        const datos = new FormData();
        datos.append('tipo','hombre_mujer_otro');
        try {
            const url =urlprincipal;
            const respuesta = await fetch(url,{
                method: 'POST',
                body: datos 
            });
            const resultado = await respuesta.json();
            console.log(resultado);
            $('#votantes').html(`
            <p class="titulo">Votantes por genero</p>
            <div class="votos">
                <div class="hombre">
                <span>Masculino</span>
                <img src="build/img/hombre.png" class="icono-hombre">
                <span>${resultado[0]['masculino']}</span>
                </div>
                <div class="mujer">
                <span>Femenino</span>
                <img src="build/img/mujer.png" class="icono-hombre">
                <span>${resultado[0]['femenino']}</span>
                </div>
                <div class="otros">
                <span>Otros</span>
                <img src="build/img/otro.png" class="icono-hombre">
                <span>${resultado[0]['otros']}</span>
                </div>
            </div>
            `);
        } catch (error) {
            console.log(error);
        }
    
    }
}
//filtro del dashboard
const filtro_lider = () => {
    let valor = document.getElementById("lideres_seleccion").value;
    console.log(valor);
    if(valor != 0){
        $('#map').remove();
        $('#mapas').append('<div id="map" class="map"></div>');
        let map = L.map('map').setView([3.4137353508661232, -76.46891672594022],10)
        //Agregar tilelAyer mapa base desde openstreetmap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        filtro();
    
        async function filtro() {
            const datos = new FormData();
            let lider = document.getElementById("lideres_seleccion").value;
            datos.append('tipo','filtro_lider');
            datos.append('id',lider);
            try {
                const url =urlprincipal;
                const respuesta = await fetch(url,{
                    method: 'POST',
                    body: datos 
                });
                const resultado = await respuesta.json();
              //   console.log(resultado);
                if(length.resultado != 0){
                    var $COLORES = ['#0000FF','#002AFF','#0055FF','#0080FF','#00AAFF','#00D5FF','#00FFFF','#00FFD5','#00FFAA','#00FF80','#00FF55','#00FF2A','#00FF00',
                                    '#2BFF00','#55FF00','#80FF00','#AAFF00','#D4FF00','#FFFF00','#FFD500','#FFAA00','#FF8000','#FF5500','#FF2A00','#FF0000'];
                                    let j = 1;
                  for (var i = 0; i < 25; i++) {
                  resultado.forEach(result =>{
                        //secuencia
                        let amplitud = result['amplitud'] * 25
                        let factor = amplitud/25;
                          if(i <= amplitud){
                              L.circle([result['longitude'],result['latitude']],
                              {
                                fillColor:$COLORES[i],
                                fillOpacity:((i)/100),
                                stroke: false,
                                radius: amplitud - (factor * (i+1) ),
                                alt: result['nombre']}).addTo(map) 
                                .bindPopup(result['nombre'] + ' hombres =' + result['masculino'] + '/ mujeres = ' + result['femenino']+ '/ Otros = ' + result['otros']); 
                          }
                          }); 
                        }
                } 
            } catch (error) {
                console.log(error);
            }
        
        }
    
        //hombre mujer y otros
        hombre_mujer_otro_();
        $('#votantes').remove();
        $('#seccion-dashboard-grafic').append('<div class="votantes" id="votantes"></div>');
        async function hombre_mujer_otro_() {
            const datos = new FormData();
            let lider = document.getElementById("lideres_seleccion").value;
            datos.append('tipo','filtro_lider_genero');
            datos.append('id',lider);
            try {
                const url =urlprincipal;
                const respuesta = await fetch(url,{
                    method: 'POST',
                    body: datos 
                });
                const resultado = await respuesta.json();
                console.log(resultado);
                $('#votantes').html(`
                <p class="titulo">Votantes por genero</p>
                <div class="votos">
                    <div class="hombre">
                    <span>Masculino</span>
                    <img src="build/img/hombre.png" class="icono-hombre">
                    <span>${resultado[0]['masculino']}</span>
                    </div>
                    <div class="mujer">
                    <span>Femenino</span>
                    <img src="build/img/mujer.png" class="icono-hombre">
                    <span>${resultado[0]['femenino']}</span>
                    </div>
                    <div class="otros">
                    <span>Otros</span>
                    <img src="build/img/otro.png" class="icono-hombre">
                    <span>${resultado[0]['otros']}</span>
                    </div>
                </div>
                `);
            } catch (error) {
                console.log(error);
            }
        
        }
    
    
        //filtra las estadisticas de los puestos
        $('#myChart').remove();
        $('.popularidad-mensual').append('<canvas id="myChart"></canvas>');
        const ctx = document.getElementById('myChart');
        //consulta de todos los puestos
        estadistica_puestos();
        async function estadistica_puestos() {
          const datos = new FormData();
          let lider = document.getElementById("lideres_seleccion").value;
          datos.append('tipo','filtro_puestos');
          datos.append('id',lider);
          try {
              const url =urlprincipal;
              const respuesta = await fetch(url,{
                  method: 'POST',
                  body: datos 
              });
              const resultado = await respuesta.json();
              let nombresar = [];
              let votos = [];
              resultado.forEach(nombres => {
                nombresar.push(nombres[0]);
                votos.push(nombres[1]);
              });
              // console.log(nombresar);
              // console.log(votos);
              // console.log(votos);
              new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: nombresar,
                  datasets: [{
                    label: '# of Votes',
                    data: votos,
                    backgroundColor: [
                        'rgba(36, 27, 217, 0.2)',
                        'rgba(217, 27, 173, 0.2)',
                    ],
                    borderColor: [
                        'rgba(36, 27, 217, 1)',
                        'rgba(217, 27, 173, 1)',
                    ],
                    borderWidth: 1
                  }]
                },
                options: {
                  indexAxis: 'y',
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }
              });
            } catch (error) {
              console.log(error);
          }
      
      }  
    }else{
        calor();
        cargar();
        hombre_mujer_otro();
    }
}
//mapa de calor
const calor = () =>{
    $('#map').remove();
    $('#mapas').append('<div id="map" class="map"></div>');
    let map = L.map('map').setView([3.4137353508661232, -76.46891672594022],5)
    //Agregar tilelAyer mapa base desde openstreetmap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    puestosmapa();
    //consulta de los puestos
    async function puestosmapa() {
      const datos = new FormData();
      datos.append('tipo','allcalor');
      try {
          const url =urlprincipal;
          const respuesta = await fetch(url,{
              method: 'POST',
              body: datos 
          });
          const resultado = await respuesta.json();
        //   console.log(resultado);
          if(length.resultado != 0){
              var $COLORES = ['#0000FF','#002AFF','#0055FF','#0080FF','#00AAFF','#00D5FF','#00FFFF','#00FFD5','#00FFAA','#00FF80','#00FF55','#00FF2A','#00FF00',
                              '#2BFF00','#55FF00','#80FF00','#AAFF00','#D4FF00','#FFFF00','#FFD500','#FFAA00','#FF8000','#FF5500','#FF2A00','#FF0000'];
                              let j = 1;
            for (var i = 0; i < 25; i++) {
            resultado.forEach(result =>{
                  //secuencia
                  let amplitud = result['amplitud'] * 25
                  let factor = amplitud/25;
                    if(i <= amplitud){
                        L.circle([result['longitude'],result['latitude']],
                        {
                          fillColor:$COLORES[i],
                          fillOpacity:((i)/100),
                          stroke: false,
                          radius: amplitud - (factor * (i+1) ),
                          alt: result['nombre']}).addTo(map) 
                        .bindPopup(result['nombre'] + ' hombres =' + result['masculino'] + '/ mujeres = ' + result['femenino']+ '/ Otros = ' + result['otros']); 
                    }
                    }); 
                  }
          } 
      } catch (error) {
          console.log(error);
      }
  
  }
}
const mapa_sin = () =>{
    $('#map').remove();
    $('#mapas').append('<div id="map" class="map"></div>');
    let map = L.map('map').setView([3.4137353508661232, -76.46891672594022],5)
    //Agregar tilelAyer mapa base desde openstreetmap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    puestosmapa();
    //consulta de los puestos
    async function puestosmapa() {
      const datos = new FormData();
      datos.append('tipo','puestosmapa');
      try {
          const url =urlprincipal;
          const respuesta = await fetch(url,{
              method: 'POST',
              body: datos 
          });
          const resultado = await respuesta.json();
        //   console.log(resultado);
          if(length.resultado != 0){
              resultado.forEach(result =>{
                  //secuencia
                  L.marker([result['longitude'],result['latitude']],{alt: result['nombre']}).addTo(map) 
                  .bindPopup(result['nombre']);
              }); 
          } 
      } catch (error) {
          console.log(error);
      }
  
  }
}

//permite cargar en un select la lista de lideres
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
        let options = `<option value="0" select>--seleccione--</opction>`;
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
// permite crear los lideres, todo lider que se crea por esta pantalla va a ser un usuario lider 
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
        <form action="" id="lideres_formulario">
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
//inserta los votantes en la base de datos
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
                        <input type="email" id="correo" name="correo">
                        
                    </section >
             </div>
            <div class="tarjetas">
                    <section >
                        <label for="">Genero</label>
                        <select name="genero" id="genero" >
                            <option selected value="">--seleccione--</option>
                            <option  value="m">Masculino</option>
                            <option  value="f">Femenino</option>
                            <option  value="o">Otro</option>
                        </select>
                        <label for="">Cedula</label>
                        <input type="number" id="cedula" name="cedula">
                        <label for="">Puesto de votaciones</label>
                        <select name="puestos" id="puestos" onchange="mesas_registro()" >
                        </select>
                        <label for="">Numero de mesa</label>
                        <select id="mesas">
                        </select>
                    </section >
            </div>
        </div>
        <button type="button" class="boton-linea" onclick="votantes()">Registrar</button>
        </form>    
</div>`;

    $("#contenido").html(formulario);
    puestosid();

}
//consulta las mesas y las crea como opciones
 async function mesas_registro(){
    const datos = new FormData();
    let puestos = document.getElementById("puestos").value;
    datos.append('puesto_id',puestos);
    datos.append('tipo','mesas');
    try {
        const url = urlprincipal;
        const respuesta = await fetch(url,{
            method: 'POST',
            body: datos 
        });
        const resultado = await respuesta.json();
        let opciones = "<option>--seleccione---</option>";
        for (let i = 1; i <= resultado; i++) {
            opciones    += `<option>${i}</option>`;
        }
        $("#mesas").html(opciones);
    } catch (error) {
        console.log(error);
    }
}
//oscurece el dhasboard
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

//consultas de los puestos de votaciones
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
//inserta los lideres
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
    let foto = document.querySelector('#photos').files[0];
    
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
    datos.append('foto',foto);

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
//insert de los votantes
async function votantes(){

    const datos = new FormData();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let genero = document.getElementById("genero").value;
    let cedula = document.getElementById("cedula").value;
    let puestos = document.getElementById("puestos").value;
    let mesa = document.getElementById("mesas").value;
    datos.append('nombre',nombre);
    datos.append('telefono',telefono);
    datos.append('correo',correo);
    datos.append('genero',genero);
    datos.append('cedula',cedula);
    datos.append('puesto_id',puestos);
    datos.append('mesa',mesa);
    datos.append('apellido',apellido);
    datos.append('tipo','insertarvotantes');
  
    try {
        const url = urlprincipal;
        const respuesta = await fetch(url,{
            method: 'POST',
            body: datos 
        });
        const resultado = await respuesta.json();
        if(resultado){
            alert("se inserto de forma correcta");
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
//selecciona que opciones se muestra en el menu dependiendo el rol asignado
session();