import getWeatherData from './fetchData';
import createDataDivs from './createDataDivs';
import handleError from './handleError';
import createLoadingInd from './createLoadingInd';

const container = document.querySelector('.container');

export default function handleFormSubmit() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const inputElement = document.getElementById('location');
    const inputValue = inputElement.value;

    try {
      createLoadingInd();
      const weatherData = await getWeatherData(inputValue);
      const loadingIndicator = document.querySelector('.loadingIndicator');
      if (loadingIndicator) {
        container.removeChild(loadingIndicator);
      }

      if (weatherData && Object.keys(weatherData).length > 0) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        createDataDivs(weatherData);
      }
    } catch (error) {
      const loadingIndicator = document.querySelector('.loadingIndicator');
      if (loadingIndicator) {
        container.removeChild(loadingIndicator);
      }

      if (!document.querySelector('.errorMsg')) {
        handleError(error);
      }
    }
  });
}
