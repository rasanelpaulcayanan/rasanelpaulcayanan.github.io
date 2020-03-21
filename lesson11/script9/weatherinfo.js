fetch("https://byui-cit230.github.io/weather/data/towndata.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const weatherinfo = jsonObject['towns'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
{
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let yearFounded  = document.createElement('p');
      let population  = document.createElement('p');
      let rainfall  = document.createElement('p');

      h2.textContent = weatherinfo[2].name;
      p.textContent = weatherinfo[2].motto;
      yearFounded.textContent = "Year founded: "+ weatherinfo[2].yearFounded;
      population.textContent = "Population: "+ weatherinfo[2].currentPopulation;
      rainfall.textContent = "Annual Rainfall: "+ weatherinfo[2].averageRainfall;

      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(yearFounded);
      card.appendChild(population);
      card.appendChild(rainfall);
document.querySelector('div.fishhaven').appendChild(card);
    }
    {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let yearFounded  = document.createElement('p');
        let population  = document.createElement('p');
        let rainfall  = document.createElement('p');

      h2.textContent = weatherinfo[0].name;
      p.textContent = weatherinfo[0].motto;
      yearFounded.textContent = "Year founded: "+ weatherinfo[0].yearFounded;
      population.textContent = "Population: "+ weatherinfo[0].currentPopulation;
      rainfall.textContent = "Annual Rainfall: "+ weatherinfo[0].averageRainfall;

      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(yearFounded);
      card.appendChild(population);
      card.appendChild(rainfall);
  document.querySelector('div.preston').appendChild(card);

    }
    {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let yearFounded  = document.createElement('p');
        let population  = document.createElement('p');
        let rainfall  = document.createElement('p');

      h2.textContent = weatherinfo[5].name;
      p.textContent = weatherinfo[5].motto;
      yearFounded.textContent = "Year founded: "+ weatherinfo[5].yearFounded;
      population.textContent = "Population: "+ weatherinfo[5].currentPopulation;
      rainfall.textContent = "Annual Rainfall: "+ weatherinfo[5].averageRainfall;

      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(yearFounded);
      card.appendChild(population);
      card.appendChild(rainfall);
  document.querySelector('div.sodaSprings').appendChild(card);



    }
    
});



  