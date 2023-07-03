import getWeatherData from './fetchData';

const currentConditionDiv = document.querySelector('.testDiv');

export default function handleFormSubmit() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const inputElement = document.getElementById('location');
    const inputValue = inputElement.value;

    try {
      const weatherData = await getWeatherData(inputValue);
      const currentCondition = weatherData.current;
      currentConditionDiv.innerHTML = `Current condition: ${currentCondition}`;
    } catch (error) {
      console.error(error);
    }
  });
}
