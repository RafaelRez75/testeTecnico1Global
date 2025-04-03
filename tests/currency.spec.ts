import { test, expect } from '@playwright/test';

test('Open Better Roaming', async ({ page }) => {
    await page.goto('https://www.betterroaming.com/');
  });