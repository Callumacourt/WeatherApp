import getWeatherData from './fetchData';
import createDataDivs from './createDataDivs';

export default function initialisePage() {
  function getRandomCountry() {
    const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France'];
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  }

  // Populate divs with random country data on page load
  const randomCountry = getRandomCountry();
  getWeatherData(randomCountry).then(weatherData => {
    createDataDivs(weatherData);
  });
}
