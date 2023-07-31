import getWeatherData from './fetchData';
import createDataDivs from './createDataDivs';
import handleError from './handleError';

const container = document.querySelector('.container');

export default function handleFormSubmit() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const inputElement = document.getElementById('location');
    const inputValue = inputElement.value;

    try {
      // Fetch weather data
      const weatherData = await getWeatherData(inputValue);

      // Check if weatherData is valid
      if (weatherData && Object.keys(weatherData).length > 0) {
        // Clear existing divs
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        // Create new divs with weather data
        createDataDivs(weatherData);
      } else {
        // Handle case where there is no weather data
      }
    } catch (error) {
      // Handle error
      if (!document.querySelector('.errorMsg')) {
        handleError(error);
      }
    }
  });
}
