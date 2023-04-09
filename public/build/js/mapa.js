const mapa = () =>{

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
        console.log(resultado);
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