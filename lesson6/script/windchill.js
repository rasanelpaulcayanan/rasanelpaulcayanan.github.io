window.onload = function windChill(windspeed, temperature) {
    
    var wind = parseInt(document.getElementById("windspeed").innerHTML);     //Wind Speed
    var temp =  parseInt(document.getElementById("temperature").innerHTML);   //Air Temparature
   
  
    // NWS Formulat https://www.weather.gov/media/epz/wxcalc/windChill.pdf
    var windChill = 35.74 + (0.6215 * temp) - (35.75 * wind**0.16) + (0.4275 * temp * wind**0.16);
  
    
    document.getElementById("windChill").innerHTML = Math.floor(windChill);
    
  }