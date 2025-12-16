let searchBtn = document.querySelector("#search-btn");
let result = document.querySelector("#result");
let API_KEY = "6999d574c42749268924d492e8cfba26";
const getWeatherData = async () => {
  try {
    let cityName = document.querySelector("#city-Name").value.trim();
    if (!cityName) {
      result.innerHTML = `<p class = "text-red-700 text-center mt-4 font-semibold">please enter a city name....</P>`;
      return;
    }

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    console.log(response);
    if (!response.ok) {
      result.innerHTML = `<p class ="text-red-700 text-center mt-4 font-semibold"> city not found</p>`;
      return;
    }
    let data = await response.json();
    console.log(data);

    result.innerHTML = `
    <h1 class ="text-xl font-bold mt-3 text-green-300">${data.name},${data.sys.country}</h>
    <p class ="text-green-600 font-semibold"> tempreture:${data.main.temp}°C</p>
    <p class ="text-green-600 font-semibold">wind speed:${data.wind.speed}m/s </p>  `;

  } catch (error) { 
    console.log(error, "error in fecthing weather details");
  }
};

searchBtn.addEventListener("click", getWeatherData);

// 6999d574c42749268924d492e8cfba26
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
