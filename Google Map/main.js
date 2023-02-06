function myMap() {
  const lat = 0;
  const long = 0;
  // const myCenter = new google.maps.LatLng(10.804572, 106.709811);
  const myCenter = new google.maps.LatLng(
    10.802802474987345,
    106.68830163220511
  );

  const mapProp = {
    center: myCenter,
    zoom: 20,
  };

  const map = new google.maps.Map(
    document.getElementById("googleMap"),
    mapProp
  );

  const marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE,
  });

  marker.setMap(map);
  map.setMapTypeId(google.maps.MapTypeId.HYBRID);
}
