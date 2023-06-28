export default async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=33254ebb9692453c8e6182945231406&q=${location}`
  );
  const data = await response.json();
  console.log(data);
}
