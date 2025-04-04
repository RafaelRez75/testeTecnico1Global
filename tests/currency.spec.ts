import { test, expect } from '@playwright/test';

test('Open Better Roaming', async ({ page }) => {
    await page.goto('https://www.betterroaming.com/');
    await page.getByTestId('uc-accept-all-button').click();
    await page.waitForTimeout(1000);
    await page.getByText('en', { exact: true }).nth(1).click();
    await page.getByText('Currency').click();
    await page.getByText('Euro - €').click();
    await page.getByText('Thailand').click();
    //await expect().toHaveText('5 GB')
    const countries = await page.locator('xpath=//html/body/main/div[3]/div/astro-island/div/section/div/div[3]/div[3]/div[2]/div/div/div[1]/p').innerText();    
    console.log(countries); 
   
    const data =  await page.locator('xpath=/html/body/main/div[3]/div/astro-island/div/section/div/div[3]/div[3]/div[2]/div/div/div[2]/p').innerText();   
    // await expect(page.getByText('5 GB')).toBeVisible();
    console.log(data); 

    const valid = await page.locator('xpath=/html/body/main/div[3]/div/astro-island/div/section/div/div[3]/div[3]/div[2]/div/div/div[3]/p').innerText();
    console.log(valid); 

   
  });

  //body/main/div:nth-child(4)/div/astro-island/div/section/div/div.grid.grid-cols-1.tablet\:grid-cols-3.gap-4/div:nth-child(3)/div.bg-white.w-full.z-20.pt-0/div/div/div:nth-child(2)/p
  //body/main/div:nth-child(4)/div/astro-island/div/section/div/div.grid.grid-cols-1.tablet\:grid-cols-3.gap-4/div:nth-child(3)/div.bg-white.w-full.z-20.pt-0/div/div/div.flex.flex-row.items-center.gap-2.text-\[14px\].justify-between.border-\[\#E6E6E6\].border-b-\[1px\].pb-2.mb-2.mt-4/p
  //body/main/div:nth-child(4)/div/astro-island/div/section/div/div.grid.grid-cols-1.tablet\:grid-cols-3.gap-4/div:nth-child(3)/div.bg-white.w-full.z-20.pt-0/div/div/div:nth-child(3)/p
