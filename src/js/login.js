// envio de datos
const urllogin = '/';
async function logi() {
    const datos = new FormData();
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    datos.append('email',user);
    datos.append('pasword',password);
    try {
        const url =urllogin;
        const respuesta = await fetch(url,{
            method: 'POST',
            body: datos 
        });
        const resultado = await respuesta.json();
        if(resultado === "true"){
            location.href = "/principal";
        }else{
            alert(resultado);
        }
    } catch (error) {
        console.log(error);
    }

}



const mostrarcontrase = () => {
    if(document.querySelector("#password.contrase")){
        $('#password').attr('type','text');
        $('#password').attr('class','texto');
        $('#cont').attr('class','fa-solid fa-eye ojocerrado');
    }else{
        $('#password').attr('type','password');
        $('#password').attr('class','contrase');
        $('#cont').attr('class','fa-solid fa-eye-slash ojocerrado');
    }
}
const olvidepass = ()  => {
    let div = ` <div class="over" id="overdiv">
                    <div class="modalaccion">
                        <div class="formularios_acciones">
                            <div class="acciones">
                                <label for="">Correo</label>
                                <input type="email" id="emailcambio" name="email">
                                <div class="boton-acciones-verde" id="opfor" onclick="postpass()">
                                    <span>enviar correo</span>
                                </div>
                            </div>
                        </div>
                        <p class="exit" onclick="exit()">X</p>
                    </div>
                </div>
    `;
    $('#modalzoom').html(div);
}
async function postpass() {
    const datos = new FormData();
    let email = document.getElementById("emailcambio").value;
    datos.append('tipo','cambiopass')
    datos.append('email',email);
    try {
        const url ='http://localhost:3000/principal';
        const respuesta = await fetch(url,{
            method: 'POST',
            body: datos 
        });
        const resultado = await respuesta.json();
        if(resultado == '1'){
            alert("correo no registrado");
        }else{
            alert(resultado);
        }
    } catch (error) {
        console.log(error);
    }

}
