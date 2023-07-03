import getWeatherData from './fetchData';
import createDataDivs from './createDataDivs';

const currentConditionDiv = document.querySelector('.current');
const container = document.querySelector('.container');

export default function handleFormSubmit() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    // Clear existing divs
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const inputElement = document.getElementById('location');
    const inputValue = inputElement.value;

    try {
      const weatherData = await getWeatherData(inputValue);
      createDataDivs(weatherData);
      const currentCondition = weatherData.current;
      currentConditionDiv.innerHTML = currentCondition;
    } catch (error) {
      console.error(error);
    }
  });
}
