// 2. Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/,
// click vào “Bài học 2: Product page”,
// hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau: a. Sản phẩm 1: 2 sản phẩm
// b. Sản phẩm 2: 3 sản phẩm
// c. Sản phẩm 3: 1 sản phẩm

import { test } from "@playwright/test";

test("Bài học 2: Product page", async ({ page }) => {
  await test.step("Navigate to Material Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click on Product page", async () => {
    await page.locator("//a[href = '02-xpath-product-page.html']").click();
  });

  await test.step("Add product 1: 2 items", async () => {
    await page.locator("//button[@data-product-id='1']").click({ clickCount: 2 });
  });

  await test.step("Add product 2: 3 items", async () => {
    await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
  });

  await test.step("Add product 3: 1 items", async () => {
    await page.locator("//button[@data-product-id='3']").click();
  });
});
