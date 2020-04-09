fetch("employees.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const employeeInfo = jsonObject['employee'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
{
      let guides = document.createElement('section');
    
      let names1  = document.createElement('h1');
      let age1  = document.createElement('p');
      let certification1  = document.createElement('p');
      let email1  = document.createElement('p');
      let experience1 = document.createElement('p');
      let motto1 = document.createElement('p');

      names1.textContent = employeeInfo[0].name;
      age1.textContent = "Age: " + employeeInfo[0].age;
      certification1.textContent = "Certification: " + employeeInfo[0].certification;
      email1.textContent = "Email Address: " + employeeInfo[0].email;
      experience1.textContent = "Years of Experience: " + employeeInfo[0].experience;
      motto1.textContent = "Bio: " + employeeInfo[0].bio;


      guides.appendChild(names1);
      guides.appendChild(age1);
      guides.appendChild(certification1);
      guides.appendChild(email1);
      guides.appendChild(experience1);
      guides.appendChild(motto1);
   
document.querySelector('section.riverGuide1Info').appendChild(guides);
    }

    {
      let guides2 = document.createElement('section');
    
      let names2  = document.createElement('h1');
      let age2  = document.createElement('p');
      let certification2  = document.createElement('p');
      let email2  = document.createElement('p');
      let experience2 = document.createElement('p');
      let motto2 = document.createElement('p');

      names2.textContent = employeeInfo[1].name;
      age2.textContent = "Age: " + employeeInfo[1].age;
      certification2.textContent = "Certification: " + employeeInfo[1].certification;
      email2.textContent = "Email Address: " + employeeInfo[1].email;
      experience2.textContent = "Years of Experience: " + employeeInfo[1].experience;
      motto2.textContent = "Bio: " + employeeInfo[1].bio;


      guides2.appendChild(names2);
      guides2.appendChild(age2);
      guides2.appendChild(certification2);
      guides2.appendChild(email2);
      guides2.appendChild(experience2);
      guides2.appendChild(motto2);
   
document.querySelector('section.riverGuide2Info').appendChild(guides2);
    }

    {
      let guides3 = document.createElement('section');
    
      let names3  = document.createElement('h1');
      let age3  = document.createElement('p');
      let certification3  = document.createElement('p');
      let email3  = document.createElement('p');
      let experience3 = document.createElement('p');
      let motto3 = document.createElement('p');

      names3.textContent = employeeInfo[2].name;
      age3.textContent = "Age: " + employeeInfo[2].age;
      certification3.textContent = "Certification: " + employeeInfo[2].certification;
      email3.textContent = "Email Address: " + employeeInfo[2].email;
      experience3.textContent = "Years of Experience: " + employeeInfo[2].experience;
      motto3.textContent = "Bio: " + employeeInfo[2].bio;


      guides3.appendChild(names3);
      guides3.appendChild(age3);
      guides3.appendChild(certification3);
      guides3.appendChild(email3);
      guides3.appendChild(experience3);
      guides3.appendChild(motto3);
   
document.querySelector('section.riverGuide3Info').appendChild(guides3);
    }
  });