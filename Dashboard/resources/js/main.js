function onWindowClose() {
    Neutralino.app.exit();
};
Neutralino.init();


const apikey = "fc76db83538a9e83ddb491c82ae0ab92";
const lat = "-37.90943570810887";
const long = "145.04147315069252";
const htemp = document.getElementById("temp");

function displayResults (response) {
    console.log(response)
    let temp = parseInt(response.main.temp);
    let feels_like = parseInt(response.main.feels_like);
    let icon = response.weather[0].icon;
    let description = response.weather[0].description;
    console.log(temp);
    console.log(feels_like);
    console.log(icon);
    console.log(description);
    document.getElementById("feels-like").innerHTML = `Feels like ${feels_like}°C`;
    htemp.innerHTML = `It is ${temp}°C`;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}.png`
    document.getElementById("description").innerText = description;

}
getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`)
    .then(response => {
        return response.json();

    }).then(displayResults)
}




getWeather();
displayResults();


