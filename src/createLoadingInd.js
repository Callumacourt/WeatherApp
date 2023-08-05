const container = document.querySelector('.container');

export default function createLoadingInd() {
  const loadingIndicator = document.createElement('div');
  loadingIndicator.classList.add('loadingIndicator');
  loadingIndicator.textContent = 'Loading...';
  container.appendChild(loadingIndicator);
}
