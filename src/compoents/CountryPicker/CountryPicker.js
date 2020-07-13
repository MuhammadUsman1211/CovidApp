import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchcountries } from '../../api'

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
    const [country, setCountry] = useState([])

    useEffect(() => {
        const fetchCountries = async () => {
            const lstCountries = await fetchcountries();
            setCountry(lstCountries);
        }
        fetchCountries();
    }, [setCountry]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {country.map((cnt, i) => <option key={i} value={cnt}>{cnt}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;