const cargar = () =>{
  $('#myChart').remove();
  $('.popularidad-mensual').append('<canvas id="myChart"></canvas>');
  const ctx = document.getElementById('myChart');
  //consulta de todos los puestos
  estadistica_puestos();
  async function estadistica_puestos() {
    const datos = new FormData();
    datos.append('tipo','puestos_estadistica');
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

   
  
  
}
