const mapa = () =>{

  let map = L.map('map').setView([3.4137353508661232, -76.46891672594022],5)
  //Agregar tilelAyer mapa base desde openstreetmap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
}
