import { useEffect, useMemo, useState } from 'react';
import { Input } from 'antd';

import WeatherShow from '../WeatherShow/WeatherShow';
import { debounce } from '../../utils/debounce';
import { findCity } from '../../utils/findCity';
import cls from './WeatherSearch.module.scss';

const WeatherSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');

  const search = useMemo(() => debounce(setQuery, 500), []);

  useEffect(() => () => search.cancel(), [search]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    search(event.target.value);
  };

  return (
    <div className={cls.weather}>
      <Input
        size="large"
        allowClear
        placeholder="Введите город"
        value={inputValue}
        onChange={handleChange}
      />
      <WeatherShow weather={findCity(query)} query={query} />
    </div>
  );
};

export default WeatherSearch;
