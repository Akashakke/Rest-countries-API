const countriesElem=document.querySelector(".row");

async function getCountry(){
    const url=await fetch("https://restcountries.com/v3.1/all");
    const res=await url.json();
    console.log(res);
    res.forEach(element=>{
        showCountry(element)
    });
}
getCountry()
function showCountry(data){
    const country=document.createElement("div")
    country.classList.add("country")
    country.innerHTML=
    
    `<div class="col">
    
    
    <div class="card h-100">
    <div class="card-header">
    <h5>${data.name.common}<h5>
      </div> 
    <img class="card-img-top" src="${data.flags.png}" alt="" width='100px' height='200px'>
    <div class="card-body">
    
    
    <p><strong>Country Code:</strong> ${data.cca3}</p>
    <p><strong>Region:</strong> ${data.region}</p>
    <p><strong>Capital:<strong> ${data.capital}</p>
    <button type="button" class="btn btn-primary">Check for Weather</button>
    </div> </div> </div>   `;
    countriesElem.appendChild(country)
}
