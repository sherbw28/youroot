var marker = null;
var lat = 33.589941976622946;
var lng = 130.42068448215028;

function init() {
    //初期化
    var map = new google.maps.Map(document.getElementById('searchMap'), {
        zoom: 12, center: { lat: lat, lng: lng }
    });

    document.getElementById('lat').value = lat;
    document.getElementById('lng').value = lng;
    document.getElementById('ido1').value = lat;
    document.getElementById('keido1').value = lng;

    //初期マーカー
    marker = new google.maps.Marker({
        map: map, position: new google.maps.LatLng(lat, lng),
    });

    //クリックイベント
    map.addListener('click', function (e) {
        clickMap(e.latLng, map);
    });
}

function nameSearch() {
    //初期化

    var where = document.getElementById("where").value;
    document.getElementById('subsName1').value = where;

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode(
        {
            'address': where,
            'region': 'jp'
        },
        function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //処理
                var ido1 = results[0].geometry.location.lat();
                var keido1 = results[0].geometry.location.lng();
                var address = results[0].formatted_address;
                console.log(address.substring(13))

                var map = new google.maps.Map(document.getElementById('searchMap'), {
                    zoom: 15, center: { lat: ido1, lng: keido1 }
                });

                document.getElementById('lat').value = ido1;
                document.getElementById('lng').value = keido1;
                document.getElementById('ido1').value = ido1;
                document.getElementById('keido1').value = keido1;
                document.getElementById('address1').value = address.substring(13);

                //初期マーカー
                marker = new google.maps.Marker({
                    map: map, position: new google.maps.LatLng(ido1, keido1),
                });

                //クリックイベント
                map.addListener('click', function (e) {
                    clickMap(e.latLng, map);
                });


            }
        }
    );

}



function clickMap(geo, map) {
    lat = geo.lat();
    lng = geo.lng();

    //小数点以下6桁に丸める場合
    //lat = Math.floor(lat * 1000000) / 1000000);
    //lng = Math.floor(lng * 1000000) / 1000000);

    document.getElementById('lat').value = lat;
    document.getElementById('lng').value = lng;
    document.getElementById('ido1').value = lat;
    document.getElementById('keido1').value = lng;

    //中心にスクロール
    map.panTo(geo);

    //マーカーの更新
    marker.setMap(null);
    marker = null;
    marker = new google.maps.Marker({
        map: map, position: geo
    });

}