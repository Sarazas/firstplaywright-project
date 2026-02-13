import { test, expect } from '@playwright/test';
test.beforeEach(async({page})=>{
  await  page.goto('https://staging.skyltmax.io/')
  await page.locator('#accept-cookies').click(); 
  await page.getByRole('button', { name: 'Consumer' }).click();
})

test('Navigate to the login page', async ({page})=>{
await page.locator('a[data-gtm="sign-in-link"]:visible').click();
//await page.locator('form').getByLabel('E-mail address').first().fill('test@example.com');
await page.locator('#login').getByLabel('E-mail address').fill('test@example.com');
await page.locator('#login').getByLabel('Password').fill('password123');

})