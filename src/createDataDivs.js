import picGenerator from './picGenerator';

export default function createDataDivs(weatherData) {
  const container = document.querySelector('.container');
  Object.entries(weatherData).forEach(([key, value]) => {
    const div = document.createElement('div');
    div.classList.add(key);
    if (key === 'tempCelsius') {
      div.innerHTML = `${value}°C`;
    } else {
      div.innerHTML = `${value}`;
    }
    container.appendChild(div);
  });
  const weatherPicDiv = document.createElement('img');
  weatherPicDiv.classList.add('pic');
  container.appendChild(weatherPicDiv);
  const currentCondition = weatherData.current;
  weatherPicDiv.src = picGenerator(currentCondition);
}
