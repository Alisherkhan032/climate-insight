let form = document.querySelector('form');
let display = document.querySelector(".output-data");
let city = document.querySelector('#input-text');

async function getWeatherinfo(cityname, url){
    try{
        let responseObj = await fetch(url);
        if(responseObj.ok == true){
            let jsonObj = await responseObj.json();
            console.log(jsonObj);
            let temprature = (jsonObj.main.temp-273.15).toFixed(2);
            let humidity = jsonObj.main.humidity;
            let weather = jsonObj.weather[0].description;

            display.innerHTML = `The temprature of ${cityname} is ${temprature} °C <br><br>`;
            display.innerHTML += `The humidity of ${cityname} is ${humidity} % <br><br>`;
            display.innerHTML += `The weather of ${cityname} is ${weather} <br<br>`;
            
        }else{
            display.innerHTML = `No data found`
        }
    }catch(err){
        alert("some error occured")
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let cityName = city.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=628ad75921765df3b1ed5e86494a43eb`;

    if(cityName==""){
        alert("Enter a valid city name");
    }else{
        getWeatherinfo(cityName, url);
    }
    city.value = "";

})