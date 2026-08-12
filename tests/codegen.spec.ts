import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page.locator('#navbarExample')).toContainText('Home (current)');
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page.locator('#exampleModalLabel')).toContainText('New message');
  await page.locator('#recipient-email').click();
  await page.locator('#recipient-email').fill('himanshu');
  await expect(page.locator('#recipient-email')).toHaveValue('himanshu');
});