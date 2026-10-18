import cls from './Forecast.module.scss';

const Forecast = ({ forecast }) => (
  <ul className={cls.forecast}>
    {forecast.map(({ day, temp, icon }) => (
      <li key={day} className={cls.forecast__item}>
        <span>{day}</span>
        <span>{icon}</span>
        <span>{temp}°</span>
      </li>
    ))}
  </ul>
);

export default Forecast;
