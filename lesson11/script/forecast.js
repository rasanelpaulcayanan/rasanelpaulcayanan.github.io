


const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=bd6b3bab46ebccce68bbac0b5f96af70';
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(fivedayforecast);

        document.getElementById('forecast1').textContent = fivedayforecast[0].main.temp;
        document.getElementById('forecast2').textContent = fivedayforecast[1].main.temp;
        document.getElementById('forecast3').textContent = fivedayforecast[2].main.temp;
        document.getElementById('forecast4').textContent = fivedayforecast[3].main.temp;
        document.getElementById('forecast5').textContent = fivedayforecast[4].main.temp;
    
        const imagesrc = 'https://openweathermap.org/img/w/' + fivedayforecast[0].weather[0].icon + '.png';  // note the concatenation
        const desc = fivedayforecast[0].weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);

        const imagesrc2 = 'https://openweathermap.org/img/w/' + fivedayforecast[1].weather[0].icon + '.png';  // note the concatenation
        const desc2 = fivedayforecast[1].weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc2').textContent = imagesrc;  // informational specification only
        document.getElementById('icon2').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon2').setAttribute('alt', desc);

        const imagesrc3 = 'https://openweathermap.org/img/w/' + fivedayforecast[2].weather[0].icon + '.png';  // note the concatenation
        const desc3 = fivedayforecast[1].weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc3').textContent = imagesrc;  // informational specification only
        document.getElementById('icon3').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon3').setAttribute('alt', desc);

        const imagesrc4 = 'https://openweathermap.org/img/w/' + fivedayforecast[3].weather[0].icon + '.png';  // note the concatenation
        const desc4 = fivedayforecast[1].weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc4').textContent = imagesrc;  // informational specification only
        document.getElementById('icon4').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon4').setAttribute('alt', desc);

        const imagesrc5 = 'https://openweathermap.org/img/w/' + fivedayforecast[4].weather[0].icon + '.png';  // note the concatenation
        const desc5 = fivedayforecast[1].weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc5').textContent = imagesrc;  // informational specification only
        document.getElementById('icon5').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon5').setAttribute('alt', desc);

  });