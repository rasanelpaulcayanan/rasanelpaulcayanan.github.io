function toggleMenu() {

    document.getElementById("mainNav").classList.toggle("navigationLists");
}


var dateNow = document.dateNow;
document.getElementById("dateNow").innerHTML = new Date().toLocaleDateString(navigator.language, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});


var d = new Date();
var n = d.getDay();
var n2 = d.getDay() + 1;
var n3 = d.getDay() + 2;
var n4 = d.getDay() + 3;
var n5 = d.getDay() + 4;

if ( n2 > 6 ) n2 = n2 - 7;
if ( n3 > 6 ) n3 = n3 - 7;
if ( n4 > 6 ) n4 = n4 - 7;
if ( n5 > 6 ) n5 = n5 - 7;
    switch (n) {
        case 0:
          day = "Sun";
          break;
        case 1:
          day = "Mon";
          break;
        case 2:
           day = "Tue";
          break;
        case 3:
          day = "Wed";
          break;
        case 4:
          day = "Thu";
          break;
        case 5:
          day = "Fri";
          break;
        case 6:
          day = "Sat";        
      }

      switch (n2) {
        case 0:
          day2 = "Sun";
          break;
        case 1:
          day2 = "Mon";
          break;
        case 2:
           day2 = "Tue";
          break;
        case 3:
          day2 = "Wed";
          break;
        case 4:
          day2 = "Thu";
          break;
        case 5:
          day2 = "Fri";
          break;
        case 6:
          day2 = "Sat";        
      }

      switch (n3) {
        case 0:
          day3 = "Sun";
          break;
        case 1:
          day3 = "Mon";
          break;
        case 2:
           day3 = "Tue";
          break;
        case 3:
          day3 = "Wed";
          break;
        case 4:
          day3 = "Thu";
          break;
        case 5:
          day3 = "Fri";
          break;
        case 3:
          day3 = "Sat";        
      }

      switch (n4) {
        case 0:
          day4 = "Sun";
          break;
        case 1:
          day4 = "Mon";
          break;
        case 2:
           day4 = "Tue";
          break;
        case 3:
          day4 = "Wed";
          break;
        case 4:
          day4 = "Thu";
          break;
        case 5:
          day4 = "Fri";
          break;
        case 6:
          day4 = "Sat";        
      }


      switch (n5) {
        case 0:
          day5 = "Sun";
          break;
        case 1:
          day5 = "Mon";
          break;
        case 2:
           day5 = "Tue";
          break;
        case 3:
          day5 = "Wed";
          break;
        case 4:
          day5 = "Thu";
          break;
        case 5:
          day5 = "Fri";
          break;
        case 6:
          day5 = "Sat";        
      }



      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day2;
      document.getElementById("day3").innerHTML = day3;
      document.getElementById("day4").innerHTML = day4;
      document.getElementById("day5").innerHTML = day5;
     
     
