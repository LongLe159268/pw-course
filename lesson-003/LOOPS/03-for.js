// For
// Thêm vào file 03-for.js và thêm vào lời giải cho các bài sau:
// 1. Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 2. In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(''); // Dòng trống để phân cách giữa các bảng cửu chương
}

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
const oddNumbers = [];

for (let i = 1; i <= 99; i += 2) {
    oddNumbers.push(i);
}

console.log(oddNumbers);

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user-1@example.com, user2@example.com, ..., user10@example.com).
for (let i = 1; i <= 10; i++) {
    console.log(`user-${i}@example.com`);
}

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
let doanhThu = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 300 },
    { month: 4, total: 400 },
    { month: 5, total: 500 },
    { month: 6, total: 600 },
    { month: 7, total: 700 },
    { month: 8, total: 800 },
    { month: 9, total: 900 },
    { month: 10, total: 1000 },
    { month: 11, total: 1100 },
    { month: 12, total: 1200 }
];
let tongDoanhthu = 0
for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhthu += doanhThu[i].total;
}
console.log("Tổng doanh thu 12 tháng là:", tongDoanhthu);

//---------------------------------------------------------------------------------------
// 3. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
// ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
// “y”, “a”, “l”, “P”] => dua vao bai tap for
let str1 = "Playwright"
let newStr = [];
for(let i = str1.length-1; i >=0;i--){
    newStr.push(str1[i]);
}
console.log(newStr);
