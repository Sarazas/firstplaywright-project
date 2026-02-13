import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
  await  page.goto('https://staging.skyltmax.io/seriematic?locale=en-IE')
  await page.locator('#accept-cookies').click(); 
  await page.getByRole('button', { name: 'Consumer' }).click();
})

test('Fill in form fields', async ({page})=>{
  const section = page.locator('div.flex.flex-col');

  await section.getByLabel('Prefix').fill('123');
  await section.getByLabel('Number format').selectOption({ value: 'n' });
  await section.getByLabel('Suffix').fill('ABC');
  await section.getByLabel('Start number').fill('10');
  await section.getByLabel('Stop number').fill('100');
  await section.getByLabel('Increment').fill('5');
  await expect(section.getByText('19 Total')).toBeVisible();
})

test('Check if apply button is visible ', async ({page})=>{
 const section = page.locator('div.flex.flex-col');
 await expect(section.getByRole('button', { name: 'Apply' })).toBeEnabled();
})

test('Check that clear button is visible', async ({page})=>{
 const section = page.locator('div.flex.flex-col');
  await section.getByRole('button', { name: 'Apply' }).click();
  await expect(section.getByRole('button', { name: 'Clear' })).toBeVisible();
  //await expect(section.getByRole('button', { name: 'Clear' })).toBeEnabled();
})

test('Check that Apply button is disabled', async ({page})=>{
  const section = page.locator('div.flex.flex-col');

  await section.getByLabel('Prefix').fill('123');
  await section.getByLabel('Start number').fill('10');
  await section.getByLabel('Stop number').fill('100');
  await section.getByLabel('Increment').fill('5');
  await section.getByRole('button', { name: 'Apply' }).click();
  await expect(section.getByRole('button', { name: 'Apply' })).toBeDisabled();
})
test('expect clear button to be hidden after clicking clear', async ({page})=>{
  const section = page.locator('div.flex.flex-col');
   await section.getByLabel('Prefix').fill('123');
  await section.getByLabel('Start number').fill('10');
  await section.getByLabel('Stop number').fill('100');
  await section.getByLabel('Increment').fill('5');
  await section.getByRole('button', { name: 'Apply' }).click();
  await section.getByRole('button', { name: 'Clear' }).click();
  await expect(section.getByRole('button', { name: 'Clear' })).toBeHidden();
})