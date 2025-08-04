import React from 'react';

const Weather = ({ data }) => {
  const { name, main, weather } = data;
  return (
    <div className="weather">
      <h2>{name}</h2>
      <p><strong>Temperature:</strong> {main.temp}°C</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Condition:</strong> {weather[0].main}</p>
    </div>
  );
};

export default Weather;
