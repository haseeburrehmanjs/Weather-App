let locat = document.querySelector('#location')
let date = document.querySelector('#date')
let temperature = document.querySelector('#temperature')
let description = document.querySelector('#description')
let img = document.querySelector('.Weather-Icon')
let input = document.querySelector('#input')
let checkBtn = document.querySelector('#checkBtn')
let form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    // API CALLING
    axios(`http://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${input.value}&aqi=no`)
        .then(responce => {
            if (input.value == '') {
                alert('Enter city Name')
            } else {
                let data = responce.data
                console.log(data);
                locat.innerHTML = data.location.name
                date.innerHTML = data.location.localtime
                temperature.innerHTML = data.current.
                    temp_c
                description.innerHTML = data.current.condition.text
                img.src = data.current.condition.icon
            }
        })
        .catch(error => {
            console.log(error);
        })
})


