import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect root to have page website page title.
  await expect(page).toHaveTitle(/Stein unLimited/);
})
test('style selector and navigation', async ({ page }) => {
  await page.goto('/');
  // Check the default theme is light.
  const el = await page.$('.light');
  
  const computedStyle = await el?.evaluate(el => {
    const style = window.getComputedStyle(el);
    return style.backgroundColor;
  });
  console.log(computedStyle)
  expect(computedStyle).toBe('rgb(250, 240, 240)')

  // change the theme to dark purple
  await page.getByTestId('dark-purple').click();
  const computedStyle2 = await el?.evaluate(el => {
    const style = window.getComputedStyle(el);
    return style.backgroundColor;
  });
  expect(computedStyle2).toBe('rgb(0, 0, 0)');

  // Use the home-changer to click through pages of Home view
  await page.locator('[aria-label="prev"]').click();
  await expect(page.locator('h1#landing-title')).toHaveText('Technomancy')
  await page.locator('[aria-label="next"]').click();
  // await expect(page.locator('h1#landing-title')).toHaveText('Namaste')

  // Pull open the dropdown menu for site features.
  await page.locator('span.collapse-icon > i').click();
  await expect(page.locator('div.sidebar.topnav')).toHaveText(/Home/);
  await expect(page.locator('div.sidebar.topnav')).toHaveText(/Music/);

  await page.goto('/Time');
  await expect(page.locator('div.title-logo > h1')).toHaveText(/unLimitedTime/);

  await page.goto('/Admin');
  await expect(page).toHaveURL('/');

  await page.goto('/pants');
  await expect(page).toHaveTitle('Uh Oh Oh No');
  await expect(page.locator('div.fourohfour')).toHaveText(/pants is in another castle/);
});
// test('style selector', async ({ page }) => {
  // page.getByTestId('app-wrapper')

// })

// test('get started link', async ({ page }) => {
  // await page.goto('https://playwright.dev/');

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
