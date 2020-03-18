fetch("https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

      card.appendChild(h2);

      let dateofbirth = document.createElement('p');
      dateofbirth.textContent = "Date of Birth: "+ prophets[i].birthdate;
        card.appendChild(dateofbirth);

        let placeofbirth = document.createElement('p');
        placeofbirth.textContent = "Place of Birth: "+ prophets[i].birthplace;
        card.appendChild(placeofbirth);

        let counter = i + 1;
        let image = document.createElement('img');
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + " - " + counter );
        
        card.appendChild(image);
document.querySelector('div.cards').appendChild(card);
    }
    
});



  