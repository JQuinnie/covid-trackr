import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFecthedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFecthedCountries(await fetchCountries());
    }

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        <option value=''>Global</option>
        {fetchedCountries.map((country, idx) => <option key={idx} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
};

export default CountryPicker;
