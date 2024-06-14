// HTML ELEMENT USE IN JAVASCRIPT
let input = document.querySelector('#input')
let checkBtn = document.querySelector('#checkBtn')
let form = document.querySelector('form')
let div = document.querySelector('#main-div')

// SUBMIT BUTTON
form.addEventListener('submit', (event) => {
    event.preventDefault()
    // API CALLING
    axios(`http://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${input.value}&aqi=no`)
        .then(responce => {
            let data = responce.data
            // RENDER CARD
            div.innerHTML += `
        <div class="card mx-auto" style="width: 18rem;">
        <div class="card-body text-center">
          <h5 class="card-title" id="location">${data.location.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted" id="date">${data.location.localtime}</h6>
          <img src="${data.current.condition.icon}" alt="Weather Icon" class="mb-2 Weather-Icon" id="weather-icon">
          <h2 class="card-text" id="temperature">${data.current.temp_c}</h2>
          <p class="card-text" id="description">${data.current.condition.text}</p>
        </div>`
        })
        .catch(error => {
            console.log(error);
        })
})


