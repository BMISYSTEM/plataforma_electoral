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
            let ingrese_codiogo = ` <!-- ingrese codigo -->
            <span class="titulo">Ingrese el codigo</span>
            <div class="sessioncodigo">
                <div class="input_codigo">
                    <input type="text" id="uno">                
                </div>
                <div class="input_codigo">
                    <input type="text" id="dos">                
                </div>
                <div class="input_codigo">
                    <input type="text" id="tres">                
                </div>
                <div class="input_codigo">
                    <input type="text" id="cuatro">                
                </div>
            </div>
            <div class="boton_enviar">
                <div class="btn" onclick="codigo_gmail()"><span>Enviar</span></div>
            </div>
            <span class="footer_pass">Ingrese el codigo de 4 digitos que se envio al correo electronico... espere un minuto</span>`;
            
            
            
            
            $("#formulario_contrase").html(ingrese_codiogo);
            $("#cambio_contrase").css('display','grid');
        }
    } catch (error) {
        console.log(error);
    }

}

async function codigo_gmail(){

    const datos = new FormData();
    let uno  = document.getElementById("uno").value;
    let dos = document.getElementById("dos").value;
    let tres = document.getElementById("tres").value;
    let cuatro = document.getElementById("cuatro").value;
    let codigo = ""+ uno + ""+ dos +""+ tres +""+ cuatro;
    datos.append('tipo','comprovar_codigo')
    datos.append('codigo',codigo);

    try {
        const url ='/';
        const respuesta = await fetch(url,{
            method: 'POST',
            body: datos 
        });
        const resultado = await respuesta.json();
        if(!resultado){
            alert("el codigo que ingreso no es correcto");
        }else{

            nuevo_pass= `<div class="contenedor_contra">
            <div class="header_nuevaC">
                <span>Cambio de contraseña</span>
                <span id="email">${resultado['email']}</span>
            </div>
            <div class="NuevaContra">
                <span>Ingrese nueva contraseña</span>
                <input type="text" id="contraseuno">
                <span>Repita su contraseña</span>
                <input type="text" id="contrasedos">
                <div id="error" class="error_contra">
                    
                </div>
            </div>
            <div class="enviar_contraC">
                <div class="btn" onclick="realizar_cambio('${resultado['email']}')"><span>Guardar</span></div>
            </div>
        </div>`;
            $("#formulario_contrase").html(nuevo_pass);
            // console.log(resultado);
        }
    
    } catch (error) {
        console.log(error);
    }

}
async function realizar_cambio($email){
    const datos = new FormData();
    let inicial  = document.getElementById("contraseuno").value;
    let segunda = document.getElementById("contrasedos").value;

    if(inicial == segunda){
        datos.append('password',inicial)
        datos.append('tipo','guardar_pass');
        datos.append('email',$email);

        try {
            const url ='/';
            const respuesta = await fetch(url,{
                method: 'POST',
                body: datos 
            });
            const resultado = await respuesta.json();
            if(resultado){
                alert('el cambio de clave se realizo de forma correcta');
                $('#cambio_contrase').css('display','none');
            }
            } catch (error) {
        console.log(error);
        }
    }else{
        alert('las claves no coinciden');
    }


}