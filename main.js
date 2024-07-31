async function getWeather(url, cityName){
    const responseObj = await fetch(url);
    const jsonObj = await responseObj.json();

    let mainObj = jsonObj.main;

    let div = document.querySelector("#empty");

    // printing everything about that city

    for(let key in mainObj){

        div.innerHTML += `
            the ${key} of ${cityName} is ${mainObj[key]} <br><br>
        `
    }

    
}

//fetching form elem
let form = document.querySelector("form");

form.addEventListener('submit', function(event){
    event.preventDefault();

    let input = document.querySelector("#city");
    let cityName = input.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=628ad75921765df3b1ed5e86494a43eb`;
    

    // taki jab doosri city print ho tab pichla sab ud jaye
    let div = document.querySelector("#empty");
    div.innerHTML = "";

    getWeather(url, cityName);


})


