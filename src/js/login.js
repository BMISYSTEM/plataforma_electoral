// envio de datoslogi
const urllogin = '/';
async function logi() {
    const datos = new FormData();
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    datos.append('email',user);
    datos.append('pasword',password);
    datos.append('tipo','ingresar');
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
                                <label for="">Se enviara un codigo al correo registrado para realizar el cambio de password</label>
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
    datos.append('tipo','recuperar')
    datos.append('email',email);
    try {
        const url ='/';
        const respuesta = await fetch(url,{
            method: 'POST',
            body: datos 
        });
        const resultado = await respuesta.json();
        if(resultado == 1){
            alert("el correo digitado no pertenece a una cuenta registrada");
        }else{
            alert(resultado);
        }
    } catch (error) {
        console.log(error);
    }

}
