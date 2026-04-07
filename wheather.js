function quickCity(city){
    let input = document.getElementById("input");
    showWeather(input.value);
}

async function showWeather(){
    const city = document.getElementById("input").value;

    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7e12947428mshfe977467551b3f8p173f56jsn3997b33fec35',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    const temp = result.main.temp;
        const humidity = result.main.humidity;
        const wind = result.wind.speed;
        const desc = result.weather[0].description;
        const icon = result.weather[0].icon;

        showdata(city, temp, humidity, wind, desc, icon);
} catch (error) {
	console.error(error);
}
    
}

function showdata(city, temp, humidity, wind, desc, icon){
   let container = document.getElementById("container")
    container.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">

        <h2>${city}</h2>
        <h1>${temp}°C</h1>
        <p>${desc}</p>

        <div class="extra">
            <p>💧 Humidity: ${humidity}%</p>
            <p>🌬 Wind Speed: ${wind} m/s</p>
        </div>
    `
}

quickCity()