let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "e907324c44f9a34",
    center: { lat: 49.285758, lng: -123.127310 },
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: { lat: 49.28564945550343, lng: -123.12723564970153 },
    map: map,
    title: "バンクーバー１のカフェです！",
    icon: "image/mapicon.png",
    animation: google.maps.Animation.DROP,
  });
}

window.initMap = initMap;