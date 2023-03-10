var gMaps;    // Mapa Google Maps
var zoom;

// Crear mapa Google Maps
function crearMapa() {
    gMaps = new google.maps.Map(
        document.getElementById('mapa'),    // Element on dibuixar el mapa
        {
            center: {lat: 52.519325, lng: 13.392709},    // Latitut i longitut del centre del mapa
            zoom: 4                                      // Ampliació
        });
    gMaps.addListener("zoom_change", (e)=>{

        console.log(gMaps.getZoom());
    });
}

window.crearMapa = crearMapa;   // Necessari si s'utilitzen mòduls
