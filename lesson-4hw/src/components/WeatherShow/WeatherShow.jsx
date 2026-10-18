import { Alert } from 'antd';

import Forecast from '../Forecast/Forecast';
import cls from './WeatherShow.module.scss';

const WeatherShow = ({ weather, query }) => {
  if (!query.trim()) {
    return <p className={cls.hint}>Введите название города</p>;
  }

  if (!weather) {
    return <Alert type="error" showIcon title="Такого города нет" />;
  }

  const { name, temp, description, icon, wind, humidity, forecast } = weather;

  return (
    <div className={cls.weather__card}>
      <div className={cls.weather__card__row}>
        <h2>{name}</h2>
        <p>{temp}°C</p>
      </div>
      <div className={cls.weather__card__row}>
        <p>{description}</p>
        <p>{icon}</p>
      </div>
      <div className={cls.weather__card__row}>
        <p>💨 Ветер: {wind} м/с</p>
        <p>💧 {humidity}%</p>
      </div>
      <Forecast forecast={forecast} />
    </div>
  );
};

export default WeatherShow;
