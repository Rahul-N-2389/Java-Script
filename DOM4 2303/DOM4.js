/** WEATHER APP CREATION 
 * ---------------------
 * get data by using RAPID API website
 */


function showdata(){
    // console.log("fun called");
    let input  = document.getElementById("input")
    // console.log(input.value);
getdata(input.value)
    
    
}
async function getdata(city){

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
	// console.log(result.main.temp);
    show(result.main.temp)
    // const temp = result.main.temp;
    //     const humidity = result.main.humidity;
    //     const wind = result.wind.speed;
    //     const desc = result.weather[0].description;
    //     const icon = result.weather[0].icon;

        // showdata(city, temp, humidity, wind, desc, icon);
} catch (error) {
	console.error(error);
}


}
function show(temp){
    let container = document.getElementById("container")
    container.innerHTML=`
    <h3> current weather : ${temp}</h3>`



}