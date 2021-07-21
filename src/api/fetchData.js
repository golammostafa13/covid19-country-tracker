import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetch = async (country) => {
    let updateURL = url;
    if(country)updateURL = `${url}/countries/${country}`;
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(updateURL);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
	        lastUpdate,
        }
        return modifiedData;
    } catch (error) {
        console.log(error);
        return;
    }    
}

export const fetchDailyData = async () =>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map(dt => {
            return {
                confirmed: dt.confirmed.total, deaths: dt.deaths.total, date: dt.reportDate,
                }
            }
        );
        return modifiedData;
    } catch (error) {
        console.log(error);
    }	
}

export const fetchCountryNames = async () =>{
    try {
        const {data} = await axios.get(`${url}/countries`);
        const names = data.countries.map(country => country.name);
        return names;
    } catch (error) {
        console.log(error);
    }
}
