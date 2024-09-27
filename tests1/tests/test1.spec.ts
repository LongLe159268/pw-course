// 1. Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page”
// a. Nhập đầy đủ các thông tin, click button register

import { test } from "@playwright/test";

const date = "2024-09-25";
const username = "Playwright Viet Nam";
const email = "playwrightvietnam@gmail.com";
const description = "K9-class";
const country = "usa";
const interests = "Sports";

test("Bài học 1: Register Page (có đủ các element)", async ({ page }) => {
  // Go to Material PLaywright page
  await test.step("Navigate to Material Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click on User Registration", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });

  await test.step("Fill information to all fields", async () => {
    await page.locator('//input[@id = "username"]').fill(username);
    await page.locator('//input[@id = "email"]').fill(email);
    await page.locator('//input[@id ="male"]').check();
    await page.locator('//input[@id = "reading"]').check();
    await page.selectOption('//select[@id = "interests"]', interests);
    await page.selectOption('//select[@id = "country"]', country);
    await page.locator('//input[@id = "dob"]').fill(date);
    //await page.locator('//input[@id = "profile"]').setInputFiles('tests1\tests\playwright.png');
    //await page.locator('//input[@id = "rating"]'). ;
    //await page.locator('//input[@id = "favcolor"]'). ;
    await page.locator('//div[@class = "tooltip"]').hover();
    await page.locator('//input[@id = "newsletter"]').check();
    await page.locator('//textarea[@id = "bio"]').fill(description);
  });

  await test.step("Click Registration button", async () => {
    await page.locator('//button[@type = "submit"]').click();
    //await page.locator("//button[normalize-space()='Register']").click()
;  });
});
