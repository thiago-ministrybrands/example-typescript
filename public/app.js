let count = 0;

const countEl = document.querySelector('[data-testid="count"]');
const buttonEl = document.querySelector('[data-testid="increment"]');

buttonEl.addEventListener('click', () => {
  count += 1;
  countEl.textContent = String(count);
});
