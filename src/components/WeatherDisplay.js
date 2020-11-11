import React  from 'react';

import tempConverter from './tempConverter';

function WeatherDisplay(props) {
    let content;
    let lowContent; 

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    if (props.weather.weather === undefined ) {
        if (props.weather.cod !== 200 && props.weather.cod !== undefined) {
            content = <div className='forcast-container'>
                <h1>{props.weather.cod}</h1>
                <h3>{props.weather.message}</h3>
            </div>;
        } else {
            content = <div className='forcast-container'>
                <h3>Please enter a city name</h3>
            </div>;
        }   
    } else {
        content = <div className='forcast-container'>
            <img className='weather-icon' src={`http://openweathermap.org/img/wn/${props.weather.weather[0]['icon']}@2x.png`} alt='Weather icon'/>
            <h2>{props.weather.name}, {props.weather.sys.country}</h2>
            <p>{tempConverter(props.weather.main.temp, props.units)} &deg;{props.units}</p>
            <p>Humidity: {props.weather.main.humidity}%</p>
            <p>{capitalizeFirstLetter(props.weather.weather[0]['description'])}</p>
        </div>;
        lowContent = <div className='today-low-high'>
            <div className='todays'>
                <div className='today-high'>
                    <p>Today's High</p>
                    <p>{tempConverter(props.weather.main.temp_max, props.units)} &deg;{props.units}</p>
                </div>
                <div className='border'></div>
                <div className='today-low'>
                    <p>Today's Low</p>
                    <p>{tempConverter(props.weather.main.temp_min, props.units)} &deg;{props.units}</p>
                </div>
            </div>
        </div>;
    }


    return <div className='weather-container'>
        {content}
        {lowContent}
    </div>;
}

export default WeatherDisplay;