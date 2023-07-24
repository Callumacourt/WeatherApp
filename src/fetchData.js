const processData = data => {
  const date = new Date(data.location.localtime);
  const formattedTime = date.toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const weatherData = {
    country: data.location.country,
    region: data.location.region,
    localtime: formattedTime,
    current: data.current.condition.text,
    tempCelsius: data.current.temp_c,
    tempFahrenheit: data.current.temp_f,
  };

  return weatherData;
};

export default async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=33254ebb9692453c8e6182945231406&q=${location}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    console.log(data);
    return processData(data);
  } catch (error) {
    throw new Error('An error occurred while fetching weather data:', error);
  }
}
