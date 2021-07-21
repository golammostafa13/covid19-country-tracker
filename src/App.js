import React, {useEffect, useState} from 'react';
import {Cards, Chart, CountryPicker, Header, Footer} from './components';
import {fetch} from './api/fetchData';
import styles from './App.module.css';
const App = () => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const loadGlobalData = async () => {
            const loadData = await fetch();
            // console.log(loadData);
            setData(loadData);
        }
        loadGlobalData();
    }, []);

    const handleCountryChange = async (country) => {
        setData(await fetch(country));
        setCountry(country);
    }
    return (
        <div className={styles.container}>
            <Header />
            <Cards data={data} country={country}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
            <Footer />
        </div>
    );
};

export default App;