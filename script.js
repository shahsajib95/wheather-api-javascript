function demo(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=77d42df78ce2d7a3ee1db9d1e53bb2b2')
    .then(res=> res.json())
    .then(data=>{
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('temp').innerHTML = data.main.temp;
        document.querySelector('.lead').innerHTML = data.weather[0].main;
        const icon = data.weather[0].icon;
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    })
}
demo();

function getWeather(){
    let city = ['dhaka','sylhet', 'chittagong', 'mymensingh', 'barisal', 'rajshahi', 'tongi', 'comilla', 'feni', 'narshingdi', 'mirzapur', 'tangail', 'dohar', 'pabna', 'jessore', 'kaliganj', 'khulna', 'jamalpur', 'sherpur'];
    const find = city.filter(city => city == document.getElementById('cityName').value);
    let api = '77d42df78ce2d7a3ee1db9d1e53bb2b2';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${find}&appid=${api}`)
    .then(res => res.json())
    .then( data=>{
            document.getElementById('city').innerHTML = data.name;
            document.getElementById('temp').innerHTML = data.main.temp;
            document.querySelector('.lead').innerHTML = data.weather[0].main;
            const icon = data.weather[0].icon;
            document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        
    })
    .catch(err => alert("Sorry, we are unable to show this city"), demo())
}
