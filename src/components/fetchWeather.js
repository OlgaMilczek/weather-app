async function fetchWeather(location) {
    let newWeather;
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5f4f5a74701b8b92bb9a6b67d5b9e6b4`, 
            {
                mode: 'cors'
            });
        newWeather = await response.json();
    } catch(error) {
        throw Error(error);
    }
    console.log(newWeather);
    return newWeather;
}

export default fetchWeather;