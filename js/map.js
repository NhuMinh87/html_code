let map;
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    map = new Map(document.getElementById("map"), {
        center: { lat: 21.0404891, lng: 105.7361726 },
        zoom: 18,
        mapId: '4504f8b37365c3d0', //id tuy chinh, ko qtrong
    });
    const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 21.0404891, lng: 105.7361726 },
        title: "FPT Aptech",
    });
}
initMap();