export default function handleError(error) {
  console.log(error);
  const container = document.querySelector('.container');
  const errorDiv = document.createElement('div');
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('errorMsg');
  container.appendChild(errorDiv);
  errorDiv.appendChild(errorMessage);
  errorMessage.textContent =
    'Location not found. Search must be in the form of "City", "City, State" or "City, Country".';
}
