import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
  await  page.goto('https://staging.skyltmax.io/')
  await page.locator('#accept-cookies').click(); 
  await page.getByRole('button', { name: 'Consumer' }).click();

})

test('Navigate to the login page', async ({page})=>{
  await page.locator('a[data-gtm="sign-in-link"]:visible').click();
  await expect(page).toHaveURL('https://staging.skyltmax.io/customer/login')
})

/*test('Locator syntax rules', async ({page})=>{
    //by tag name 
   page.locator('input')
    //by ID
   page.locator('#')
    //by class name 
   page.locator('.')
    //by attribute
   page.locator('[attibute="value"')
    //by full class
   page.locator('[name of the class ]')
    //Combine different selectors
   page.locator('tagname[attribute="value"]')
   //exact text match 
   page.locator(':text-is("text here"')
   //partial text match 
   page.locator(':text("username"')
   //Combine different selectors second attributes
   page.locator('tagname[attribute="value"][attributes="value"]')
   })
*/
test('Valid credentials', async ({page})=>{
await page.locator('a[data-gtm="sign-in-link"]:visible').click();
//await page.locator('#login_login').fill('max.kellerth@gmail.com')
await page.getByLabel('E-mail address').first().fill('marlys@stokes-steuber.example');
//await page.locator('#login_password').fill('SKyltmax2024%&')
await page.getByLabel('Password').first().fill('SKyltmax2024%&');
await page.getByRole('button', {name: 'Sign in'}).click()
})


