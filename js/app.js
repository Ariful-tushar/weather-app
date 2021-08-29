const tempField = document.getElementById('tamperature'); 
const cityField = document.getElementById('city'); 
const dateField = document.getElementById('date');
const timeField = document.getElementById('time');
const conditionField = document.getElementById('condition');
const section = document.getElementById('section');


const cityNameField = document.getElementById('city-name');

const searchButton = document.getElementById('search-button'); 


const imageObject = {
    rain: "../images/rain.jpg", 
    haze: "../images/haze.jpg", 
    clouds: "../images/clouds.jpg", 
    clear: "../images/sunny.jpg",
    mist : "../images/mist.jpg"
}


searchButton.addEventListener('click', () => {
    getData()
    
})

cityNameField.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        getData()
    }
    
})


const getData = ()=> {
    searchedValue = cityNameField.value;
    cityNameField.value = '';
    url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedValue}&appid=f241830c294b482e5d9b4a5b061ffa4d`
    fetch(url)
    .then(res => res.json())
    .then(data => loadData(data))

}


const cityList = ()=> {
    const res = async 
}


const loadData = data => {
    const temperatureKelvin = data.main.temp
    const cityName = data.name;
    const condition = data.weather[0].main

    console.log(section.style.backgroundImage)
    const backgroundImage = condition.toLowerCase();
    console.log([backgroundImage])
    console.log(imageObject[backgroundImage])

    section.style.backgroundImage = `url('${imageObject[backgroundImage]}')`

    const temperatureCelcius = Math.round(temperatureKelvin-272.15);


    tempField.innerText = temperatureCelcius;
    cityField.innerText = cityName; 
    conditionField.innerText = condition;

    const today = new Date(); 
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    timeField.innerText = time;
    dateField.innerText = date; 
}



