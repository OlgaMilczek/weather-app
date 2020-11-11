function tempConverter (temp, units) {
    let newTemp;
    if (units === 'C') {
        //Konwersja z Kelwina na celcluisza
        newTemp = temp - 273.15;
    } else if (units === 'F') {
        // Konwersja z Kelwina na Farenhaity
        newTemp = temp * (9/5) - 459.67;
    }
    return newTemp.toFixed(1);
}

export default tempConverter;