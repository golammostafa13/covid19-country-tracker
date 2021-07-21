import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountryNames} from '../../api/fetchData';
import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [names, setNames] = useState([]);
    useEffect(() => {
        const loadName = async () =>{
            setNames(await fetchCountryNames());
        }
        loadName();                                                      
    }, []);
    return (
        <div className={styles.container}>
            <FormControl className={styles.FormControl}>
                <NativeSelect className={styles.NativeSelect} onChange={(e) => handleCountryChange(e.target.value)}>
                    <option className={styles.option} value="">Global</option>
                    {
                        names.length && names.map((name, i) => <option className={styles.option} key={i} value={name}>{name}</option>)
                    }
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default CountryPicker;