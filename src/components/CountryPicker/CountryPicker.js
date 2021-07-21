import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountryNames} from '../../api/fetchData';

const CountryPicker = ({handleCountryChange}) => {
    const [names, setNames] = useState([]);
    useEffect(() => {
        const loadName = async () =>{
            setNames(await fetchCountryNames());
        }
        loadName();                                                      
    }, []);
    return (
        <div>
            <FormControl>
                <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {
                        names.length && names.map(name => <option value={name}>{name}</option>)
                    }
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default CountryPicker;