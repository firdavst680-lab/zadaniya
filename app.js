function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Brauzeringiz joylashuvni qo‘llab-quvvatlamaydi");
    }
}


function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("lat").innerHTML = "Kenglik: " + lat;
    document.getElementById("lon").innerHTML = "Uzunlik: " + lon;

    fetch(`https://ipapi.co/json/`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("country").innerHTML = "Mamlakat: " + data.country_name;
        document.getElementById("city").innerHTML = "Shahar: " + data.city;
        document.getElementById("ip").innerHTML = "IP manzil: " + data.ip;
    });

    let map = document.createElement("iframe");
    map.width = "100%";
    map.height = "400";
    map.style.border = "0";
    map.src = `https://www.google.com/maps?q=${lat},${lon}&hl=uz&z=14&output=embed`;
    document.getElementById("map").innerHTML = "";
    document.getElementById("map").appendChild(map);
}