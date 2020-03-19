fetch("https://byui-cit230.github.io/weather/data/towndata.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const weatherinfo = jsonObject['towns'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
{
      let card = document.createElement('section');
    
      let event1  = document.createElement('p');
      let event2  = document.createElement('p');
      let event3  = document.createElement('p');
      let event4  = document.createElement('p');


      event1.textContent =  weatherinfo[5].events[0];
      event2.textContent =  weatherinfo[5].events[1];
      event3.textContent =  weatherinfo[5].events[2];
   

      card.appendChild(event1);
      card.appendChild(event2);
      card.appendChild(event3);
      card.appendChild(event4);
document.querySelector('div.events').appendChild(card);
    }
  });