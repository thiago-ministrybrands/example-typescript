import { expect, test } from '@playwright/test';

test('increments the counter when clicked', async ({ page }) => {
  await page.goto('/');

  const count = page.getByTestId('count');
  await expect(count).toHaveText('0');

  await page.getByTestId('increment').click();
  await expect(count).toHaveText('1');

  await page.getByTestId('increment').click();
  await expect(count).toHaveText('2');
});

test('resets the counter to zero', async ({ page }) => {
  await page.goto('/');

  const count = page.getByTestId('count');
  await page.getByTestId('increment').click();
  await expect(count).toHaveText('1');

  await page.getByTestId('reset').click();
  await expect(count).toHaveText('0');
});
