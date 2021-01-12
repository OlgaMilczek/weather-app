import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            if (!e.target.checked) {
                props.setTempUnit('C');
            }
            else {
                props.setTempUnit('F');
            }

        } else {
            setInputValue(e.target.value);
        }
    };

    const onClick = (e) => {
        e.preventDefault();
        props.setNewLocation(inputValue);
        setInputValue('');
        e.target[0].value = '';
    };
    
    return (
        <nav>
            <div className='navbar'>
                <div className='logo'>
                    <h1>WEATHER APP</h1>
                </div>
                <div className='search'>
                    <form onSubmit={onClick}>
                        <input type='text' placeholder='Enter a city name' className='city-search' onChange={handleChange}/>
                        <button className='search-btn'><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                </div>
                <div className='temperature'>
                    <label className="switch">
                        <input type="checkbox" id="togBtn" onChange ={handleChange}/>
                        <div className="slider round">
                            <span className="celsius">&deg;F</span>
                            <span className="farenhite">&deg;C</span>
                        </div>
                    </label>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;