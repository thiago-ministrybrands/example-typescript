let count = 0;

const countEl = document.querySelector('[data-testid="count"]');
const resetEl = document.querySelector('[data-testid="reset"]');
const buttonEl = document.querySelector('[data-testid="increment"]');

buttonEl.addEventListener('click', () => {
  count += 1;
  countEl.textContent = String(count);
});

resetEl.addEventListener('click', () => {
  count = 0;
  countEl.textContent = String(count);
});
