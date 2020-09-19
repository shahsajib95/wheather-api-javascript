const apiKey = '77d42df78ce2d7a3ee1db9d1e53bb2b2';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = city =>{
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then( data=> updateData(data))
}

function search (){
    const cityName = document.getElementById('cityName').value;
    getWeather(cityName);
}

const updateData = data =>{
            document.getElementById('city').innerHTML = data.name || "Are You Sure This is a City?";
            document.getElementById('temp').innerHTML = data.main.temp;
            document.querySelector('.lead').innerHTML = data.weather[0].main;
            const icon = data.weather[0].icon;
            document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
getWeather("Dhaka")
