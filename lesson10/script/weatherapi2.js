window.onload = function showAnnouncement() {
  var announcement = document.getElementById("announcementDiv");
  var today = new Date();
  var day = today.getDay();

  if (day == 5) {
      announcement.style.display = "block";
  } else {
      announcement.style.display = "none";

  }
}



const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bd6b3bab46ebccce68bbac0b5f96af70';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('temperature').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed;

    
  });

