import React, {useState, useEffect} from 'react';

import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import fetchWeather from './components/fetchWeather.js';
import WeatherDisplay from './components/WeatherDisplay.js';
import backgrounds from './components/backgrounds.js';

function App() {
    const [search, setSearch] = useState('');
    const [tempUnit, setTempUnit] = useState('C');
    const [weather, setWeather] = useState({});
    const [background, setBackground] = useState({ backgroundImage: `url(${backgrounds['default']})`});

    useEffect(() => {  
        if (search !== '') {
            fetchWeather(search).then(newWeather => setWeather(newWeather));
        }
    }, [search]);

    useEffect(() => {
        let newImage;
        if (weather.weather === undefined) {
            newImage = `url(${backgrounds['default']})`;
        } else {
            if (backgrounds[weather.weather[0]['main']] === undefined) {
                newImage = `url(${backgrounds['Mist']})`;
            } else {
                newImage = `url(${backgrounds[weather.weather[0]['main']]})`;
            }
        }
        newBackground(newImage);
    }, [weather]);

    const setNewLocation = (location) => {
        setSearch(location);
    };

    const newBackground = (newImage) => {
        setBackground(prevBackground => {
            if (prevBackground.backgroundImage !== newImage) {
                return {backgroundImage: newImage};
            }
            return prevBackground;
        });
    };

    return (
        <div className="main-container" style= {background}>
            <NavBar setNewLocation={setNewLocation} setTempUnit = {setTempUnit}/>
            <WeatherDisplay weather={weather} units= {tempUnit}/>
            <Footer />
        </div>
    );
}

export default App;
