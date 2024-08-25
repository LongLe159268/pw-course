# VCS(version control system)
**Là hệ thống quản lý các phiên bản**
- Local: lưu ở máy cá nhân
- Centralize: lưu ở một máy
chủ tập trung.
- Distributed: lưu ở nhiều
máy khác nhau (GitHub)
# GIT và GITHUB 
**1.GIT**
- Là một phần mềm
- Cài trên máy local
- Là công cụ quản lý phiên bản, đưa file vào Git repository

**2.GITHUB**
- Là một dịch vụ web
- Host trên website
- Là công cụ có giao diện
- Là nơi để upload Git repository

**GIT - there states**
- Working directory
- Staging Area
- Repository

**GIT - key takeaways**

**git init: Khởi tạo thư mục được quản lý bởi Git**

- Sau khi cài đặt xong, cần cấu hình git:
1. Cho 1 repo
- git config user.name “name”
- git config user.email “email”
2. Cho toàn bộ máy tính
- git config --global user.name“user”
- git config --global user.email“email”

**git add or git add .**
- Thêm file vào vùng staging area
**git status để kiểm tra**
- Kiểm tra xem file đã được chỉnh sửa hay như nào
**git commit -m"message"**
1. Đưa file lên repo kèm theo 1 thông điệp
- Thông điệp theo 1 quy tắc chung: feat,chore,fix

**git log**
- Kiểm tra lịch sử commit

**git push origin <nhánh của bạn>**

# JavaScript
**1. Tạo thư mục lesson-2/javascript**
- Mở bằng VS Code: code .
- Tạo file: 01-hello.js
- Ghi vào dòng: console.log(“Hello World!”);
- Chạy lệnh: node lesson-2/javascript/01-hello.js

**2. Variable(biến) dùng để lưu trữ giá trị, có thể thay đổi đc**
- Khai báo: var <ten_bien> = <gia_tri>;
- Khai báo: let <ten_bien> = <gia_tri>; (chỉ nên dùng let vì var rất dễ nhầm)

**3. Constant: Hằng số dùng để lưu trữ các giá trị không thể thay đổi**
- Khai báo: const <name> = <value>

**4. Data types**
- Có 8 kiểu dữ liệu nhưng chỉ chú ý đến String, Number, Boolean
- Khai báo: let or const <name> = <value>

**5. Comparison operator (toán tử so sánh)**
- Dùng để so sánh giữa 2 biến với nhau
- Các toán tử so sánh: <,>,==,===,!=,!==,>=,<=

**6.Unary operator (toán tử một ngôi)**
- Dùng để tăng hoặc giảm giá trị
- i++ bằng với i=i+1
- i-- bằng với i=i-1

**7. Conditional = điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không.**
- Cú pháp: if (<điều kiện>) { // code }. Nếu điều kiện đúng, sẽ chạy đoạn code

**8. Loop: Dùng để thực hiện một đoạn logic một số lần nhất định**
- Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) { // code }.