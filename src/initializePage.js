import getWeatherData from './fetchData';
import createDataDivs from './createDataDivs';
import image from './icons8-search-50.png';

export default function initialisePage() {
  const submitImage = document.querySelector('.inputImage');
  submitImage.src = image;
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
