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
function funcion1(){
  const mobilmenu = document.querySelector('.mobil');
  mobilmenu.addEventListener('click',navegacionresponsive);
}
function navegacionresponsive(){
    const navegacion = document.querySelector('.navegacion');
    navegacion.classList.toggle('mostrar');
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
        console.log("no la tiene");
        $('#menu').attr('class','boton-transparente-menu');

    }
}