import { test, expect } from '@playwright/test';

test('displays hello world', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/project starter/i);

  // Expect the hello world heading to be visible
  await expect(page.getByRole('heading', { name: /hello world/i })).toBeVisible();

  // Expect the welcome text to be visible
  await expect(page.getByText(/welcome to your react 18 project starter!/i)).toBeVisible();
});