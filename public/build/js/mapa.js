const mapa = () =>{

  let map = L.map('map').setView([3.4137353508661232, -76.46891672594022],18)
  //Agregar tilelAyer mapa base desde openstreetmap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  // let marker =L.marker([3.4137353508661232, -76.46891672594022]).addTo(map)
  
  var $longitude = [3.4137353508661232,3.415020525822385,3.4144850364691717,3.4149238997136595];
  var $latitude = [-76.46891672594022,-76.47003252476547,-76.46939952347293,-76.4689607283474];
  var $COLORES = ['#0000FF','#002AFF','#0055FF','#0080FF','#00AAFF','#00D5FF','#00FFFF','#00FFD5','#00FFAA','#00FF80','#00FF55','#00FF2A','#00FF00','#2BFF00','#55FF00','#80FF00','#AAFF00','#D4FF00','#FFFF00','#FFD500','#FFAA00','#FF8000','#FF5500','#FF2A00','#FF0000'];
  //crea los circulos
  var ciclos = $COLORES.length;
  var puntos = $longitude.length;
  var radio = 10 / ciclos;
  for (var i = 0; i < 25; i++) {
      tamano = 10 - radio
     for (var b = 0; b < (puntos -1); b++){
      var circle = L.circle([$longitude[b], $latitude[b]], {
        fillColor:$COLORES[i],
        color:$COLORES[i],
        fillOpacity:1,
        opacity:1,
        weight:5,
        radius: tamano
      }).addTo(map); 
     }
    }
    
    
}
