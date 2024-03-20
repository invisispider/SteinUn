// tests/e2e/example.spec.ts
import { beforeAll, afterAll, beforeEach, afterEach, test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';

// test('Example E2E Test', () => {
let browser: Browser;
let page: Page;

beforeAll(async () => {
  // Launch a browser instance before running the tests
  browser = await chromium.launch();
});

afterAll(async () => {
  // Close the browser instance after all tests are completed
  await browser.close();
});

beforeEach(async () => {
  // Open a new browser page before each test
  page = await browser.newPage();
});

afterEach(async () => {
  // Close the browser page after each test
  await page.close();
});

test('should navigate to the homepage', async () => {
  // Navigate to the homepage of the Vue 3 application
  await page.goto('http://localhost:3000');

  // Assert that the page title is correct
  const title = await page.title();
  expect(title).toBe('Stein Unlimited');

  // You can add more assertions and interactions here
});

// });
