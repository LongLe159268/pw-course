// Thêm vào file 03-foreach.js và thêm vào lời giải cho các bài sau:
// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
// 1
// 2
// 3
const numbers = [1, 2, 3];

numbers.forEach(number => {
    console.log("In ra các số: ", number);
});

// 2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2,
// 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3
let total = 0;
let max = numbers[0];
let min = numbers[0];

numbers.forEach(number => {
    total += number;
    if (number > max) max = number;
    if (number < min) min = number;
});

console.log("Tổng:", total);
console.log("Giá trị lớn nhất:", max);
console.log("Giá trị nhỏ nhất:", min);

// 3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví
// dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]

let mang = [1, 2, 3];
let mangmoi = [];
mang.forEach(number => {
    mangmoi.push(number * 2);
});
console.log(mangmoi);