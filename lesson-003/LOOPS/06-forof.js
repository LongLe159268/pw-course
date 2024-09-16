// Thêm vào file 06-forof.js và thêm vào lời giải cho các bài sau:
// Kiến thức bổ sung để làm bài: một string cũng là một mảng
// Bản chất một chuỗi cũng là một mảng. Ví dụ chuỗi "Playwright" bản chất là một mảng
// gồm các kí tự ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]
// Để lặp trong mảng này, bạn sử dụng string.length để lấy độ dài của chuỗi và lấy ra
// từng phần tử một theo index
// Ví dụ:
// const str = "K6 2024";
// for (let i = 0; i < str.length; i++){

// console.log(str[i]);
// }
// // Kết quả in ra
// K
// 6
// 2
// 0
// 2
// 4

// 1. In ra tất cả các ký tự của một chuỗi. Ví dụ chuỗi Playwright thì sẽ in ra
// P
// l
// a
// y
// w
// r
// i
// g
// h
// t
const str = "Playwright"
for (let key of str) {
    console.log(key);
};
// 2. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
// cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là 3
// thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.
let arr = [1, 2, 3, 4, 3, 55, 23, 4];
let firstIndex = -1;
let lastIndex = -1;

function FindIndex(value) {
    // Duyệt qua mảng bằng vòng lặp for
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            if (firstIndex === -1) {
                firstIndex = i; // Gán vị trí đầu tiên
            }
            lastIndex = i;      // Cập nhật vị trí cuối cùng
        };
    };
    console.log(`Vị trí phần tử đầu tiên của giá trị ${value} là:`, firstIndex);
    console.log(`Vị trí phần tử cuối cùng của giá trị ${value} là:`, lastIndex);

};
FindIndex(3);
FindIndex(4);

// 4. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
// 1, 2, 4,5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
