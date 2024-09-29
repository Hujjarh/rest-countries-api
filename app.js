// let searchBar = document.querySelector('.search-bar')
// let countryCard = document.querySelector('.country-card')
// let card = document.querySelector('.card')
// let cardImage = document.querySelector('.cardImage')
// let population = document.querySelector('.population')
// let region = document.querySelector('.region')
// let capital = document.querySelector('.capital')

// fetch("data.json").then((response)=>response.json())
// .then((data)=>{
//     data.forEach((value) => {
//         let card = document.createElement('div')
//         card.classList.add('item')

//         card.innerHTML = `
//             <img src ="${value.flags.png}" width="300px"/>
//             <p class="name">${value.name}</p>
//             <p>Population: ${value.population}</p>
//             <p>Region: ${value.region}</p>
//             <p>Capital: ${value.capital}</p>
//         `
//         countryCard.appendChild(card)
//     });
    
// })

// function filterCountries(country){
//     const data = document.getElementById("countrySelect")
    
//

let countryCard = document.querySelector('.country-card')
let countrySelect = document.getElementById("countrySelect");
let searchInput = document.getElementById("searchInput");
let allCountriesData = []; // Store all fetched countries here

// Fetch and display all countries initially
fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        allCountriesData = data;
        displayCountries(allCountriesData); // Display all countries initially
    });

// Display countries based on provided data
function displayCountries(countries) {
    countryCard.innerHTML = ''; // Clear previous data
    countries.forEach((value) => {
        let card = document.createElement('div');
        card.classList.add('item');

        card.innerHTML = `
            <img src="${value.flags.png}" width="300px"/>
            <p class="name">${value.name.common}</p>
            <p>Population: ${value.population}</p>
            <p>Region: ${value.region}</p>
            <p>Capital: ${value.capital}</p>
        `;
        countryCard.appendChild(card);
    });
}

// Filter countries based on selected region
function filterCountries() {
    let selectedRegion = countrySelect.value;
    let filteredCountries = allCountriesData;

    if (selectedRegion !== "all") {
        filteredCountries = allCountriesData.filter(country => country.region === selectedRegion);
    }

    displayCountries(filteredCountries);
}

// Filter countries when region is changed
countrySelect.addEventListener("change", filterCountries);

// Search functionality
searchInput.addEventListener("input", () => {
    let searchQuery = searchInput.value.toLowerCase();
    let filteredCountries = allCountriesData.filter(country => 
        country.name.common.toLowerCase().includes(searchQuery)
    );
    displayCountries(filteredCountries);
});
