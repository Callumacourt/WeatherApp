export default function createDataDivs(weatherData) {
  const container = document.querySelector('.container');
  Object.entries(weatherData).forEach(([key, value]) => {
    const div = document.createElement('div');
    div.classList.add(key);
    div.innerHTML = `${key}: ${value}`;
    container.appendChild(div);
  });
}
