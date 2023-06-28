export default async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=33254ebb9692453c8e6182945231406&q=${location}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred while fetching weather data:', error);
  }
}
