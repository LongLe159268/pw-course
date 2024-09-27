# DOM (Document Object Model)
## 1 Element: (<op_tion> United States <</op_tion>>)
- Thẻ mở, thẻ đóng
- Thẻ tự đóng
### Ví dụ
<op_tion value = "usa"> USA </op_tion>
# CÁC THẺ DOM THƯỜNG GẶP
- div
- h1 -> h6
- form
- input: text, email, radio, checkbox, file, color, range, date
- textarea
- radio button
- checkbox
- list and dropdown
- table:  thead = table heading , tr = table row = 1 dòng , th: table heading: text in đậm , tbody , tr -> td = table data
- date (time) picker
- iframe
# SELECTOR: Là cách chọn phần tử trên trang
- Nhiều loại Selector: Xpath, CSS, Playwright
1. XPath selector = XML Path
- Tuyệt đối: Đi dọc cây DOM và bắt đầu bởi 1 /. VD: / head/div[1]/div[2]/input/...
- Tương đối: Tìm dựa vào thuộc tính và bắt đầu bởi 2 // và  dùng "and và or". VD: //input[@id="email"]
//input[@type="range" and @id="rating"]
# PLAYWRIGHT BASIC SYNTAX
- Steps to open a basic playwright tets:
- New file -> open git bash -> gõ "npm init playwright@latest" -> enter -> open vscode
1. Test: Đơn vị cơ bản để khai báo một test
- import { test } from '@playwright/test';

- test('<tên test>', async ({ page }) => {
- // Code của test
- await test.step('Tên step', async () => {
- // Code here
- });
- });

**Lưu ý: Step nên được map 1-1 với test case để dễ dàng maintain**

2. **BASIC ACTION**
- Navigate: await page.goto('https://pw-practice.playwrightvn.com/');
- Click: **Single click**
await page.locator("//button").click();
**Double click**
await page.locator("//button").dblclick();

- **Click chuột phải**
page.locator("//button").click({
button: 'right'
})
- **Click chuột kèm bấm phím khác**
page.locator("").click({
modifiers: ['Shift'],
})
- Fill: Giông việc bạn paste content vào một ô input
- page.locator("//input").fill('Playwright Viet Nam');
- **pressSequentially:Giống việc bạn gõ từng chữ cái vào ô input**
- page.locator("//input").pressSequentially ('Playwright Viet Nam', { delay: 100, });
- **Radio/checkbox**: 
- Lấy giá trị hiện tại đang là check hay không:
const isChecked = page.locator("//input").isChecked();
- Check/ uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);

# Kiến thức bổ sung
1. Kiến thức bổ sung để làm bài: hover
- Để hover vào phần tử, ta dùng hàm hover:
await page.locator("<xpath here>").hover();
2. Kiến thức bổ sung để làm bài: text()
Hàm text()dùng để tìm ra phần tử có giá trị tương ứng. Ví dụ với DOM sau:
- <d_iv @class=”playwright”>This is a text</d_iv>

- Thì để chọn phần tử này, ta dùng cú pháp như sau:
//div[text()=’This is a text’]"
- Kiến thức bổ sung để làm bài: contains()
Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định
trong text. Ví dụ
- <d_iv> Tôi là Alex </d_iv> // Text này có 1 ký tự space ở đầu và ở đuôi
- <d_iv> Bây giờ là: 08:07 </d_iv> // Thời gian sẽ tuỳ vào thời điểm truy cập trang web
Để chọn các phần tử này, ta cùng hàm contains(<giá trị>, <giá trị contains>). Ví
dụ
//div[contains(text(), ‘Tôi là Alex’)] //div[contains(text(), ‘Bây giờ là:’)]