import {test, expect} from '@playwright/test';

test('测试', async ({page}) => {
    await page.goto('http://139.155.244.85:81/login');
    await page.getByPlaceholder('Username').fill('Evegarden');
    await page.getByPlaceholder('Password').fill('Evegarden');
    await page.getByRole('button', {name: 'Log in'}).click();
    await page.getByPlaceholder('What do you want to do next?').fill('123');
    await page.getByRole('button', {name: 'plus-circle Add Todo'}).click();
    await page.getByRole('button', {name: 'edit'}).nth(0).click();
    await page.getByPlaceholder('123').fill('1233');
    await page.getByRole('button', {name: 'check'}).click();
    await page.getByRole('button', {name: 'delete'}).nth(0).click();
    await page.getByRole('button', {name: 'Cancel'}).click();
    await page.getByRole('button', {name: 'delete'}).nth(0).click();
    await page.getByRole('button', {name: 'OK'}).click();
    await page.getByRole('button', {name: 'poweroff'}).click();
});
