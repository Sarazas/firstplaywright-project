import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
  await page.goto('https://staging.skyltmax.io/')
  await page.locator('#accept-cookies').click(); 
  await page.getByRole('button', { name: 'Consumer' }).click();
  
})
test ('customer registration', async ({page}) =>{
  await page.locator('a[data-gtm="sign-in-link"]:visible').click();
  await page.getByText('New customer').click();
  await page.getByRole('radio', { name: 'Consumer' }).check();
  await page.getByLabel('* First name').fill('John');
  await page.getByLabel('* Surname').fill('Doe');
  await page.getByPlaceholder('Required for notification').fill('0747894743');
  await page.getByPlaceholder('Used for receipts and order information').fill('john.doe@example.com');
  await page.getByLabel('* Enter new password').fill('Skyltmax2024%&');
  await page.getByLabel('* Address').fill('123 Main Street');
  await page.getByLabel('* Eircode').fill('3030');
  await page.getByLabel('* City').fill('Dublin');
  await page.locator('select[name="country"]').selectOption({ label: 'Ireland' });
  await page.getByRole('button', { name: 'Register' }).click();
})