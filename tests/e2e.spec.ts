import { test, expect } from '@playwright/test';

test('buy apple', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('.mt-4 > .px-4').first().click();
  await expect(page.getByRole('heading', { name: '購入成功' })).toBeVisible();
});

test('check login', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByPlaceholder('ユーザー名を入力').click();
  await page.getByPlaceholder('ユーザー名を入力').fill('test');
  await page.getByPlaceholder('パスワードを入力').click();
  await page.getByPlaceholder('パスワードを入力').fill('hogehoge');
  await page.locator('form').getByRole('button', { name: 'ログイン' }).click();
  await expect(page.getByRole('heading', { name: 'ログイン成功' })).toBeVisible();
});

test('check signup', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: '新規登録' }).click();
  await page.getByPlaceholder('ユーザー名を入力').click();
  await page.getByPlaceholder('ユーザー名を入力').fill('hoge');
  await page.getByPlaceholder('メールアドレスを入力').click();
  await page.getByPlaceholder('メールアドレスを入力').fill('hoge@hoge.com');
  await page.getByPlaceholder('パスワードを入力').click();
  await page.getByPlaceholder('パスワードを入力').fill('hogehoge');
  await page.getByRole('button', { name: 'サインアップ' }).click();
  await expect(page.getByRole('heading', { name: 'サインアップ成功' })).toBeVisible();
});
