window.onload = function windChill(windspeed, temperature) {


    var wind = parseInt(document.getElementById("windspeed").innerHTML); //Wind Speed
    var temp = parseInt(document.getElementById("temperature").innerHTML); //Air Temparature
    var announcement = document.getElementById("announcementDiv");
    var today = new Date();
    var day = today.getDay();
  

    

  
   
    if (day == 5) {
        announcement.style.display = "block";
    } else {
        announcement.style.display = "none";
  
    }
    
    var windChill = 35.74 + (0.6215 * temp) - (35.75 * wind ** 0.16) + (0.4275 * temp * wind ** 0.16);
    document.getElementById("windChill").innerHTML = Math.floor(windChill);

}

