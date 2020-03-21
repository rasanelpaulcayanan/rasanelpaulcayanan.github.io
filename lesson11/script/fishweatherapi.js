

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585000&units=imperial&APPID=bd6b3bab46ebccce68bbac0b5f96af70';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('temperature').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed;

    
    let temp = parseFloat(document.getElementById('temperature').textContent);
    let speed = parseFloat(document.getElementById('windspeed').textContent);


    if (temp<=50 && speed>=3) {

        windchill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(speed, 0.16))) + (0.425 * temp * (Math.pow(speed, 0.16)));
    
        document.getElementById('windChill').textContent = (windchill).toFixed(2);
    }
    
    else {
    
        document.getElementById('windChill').textContent = ("N/A");
    }
    

  });

