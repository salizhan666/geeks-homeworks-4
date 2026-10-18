import weatherData from '../data/weather.json';

export function findCity(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return null;

  const name = Object.keys(weatherData).find(
    (city) => city.toLowerCase() === normalized
  );

  return name ? { name, ...weatherData[name] } : null;
}
