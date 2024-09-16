// Tạo file 02-function.js và thêm vào lời giải cho các bài sau:
// 1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
// nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì
function BodyMassIndex(chieucao, cannang) {
    BMI = cannang / (chieucao * chieucao);
    if (BMI < 18.5) {
        console.log("Bạn bị thiếu cân!");
    }
    else if (18.5 < BMI < 25) {
        console.log("Bạn bình thường!");
    }
    else if (25 < BMI < 30) {
        console.log("Bạn bị thừa cân!");
    }
    else {
        console.log("Bạn bị béo phì!");
    };
    console.log("Chỉ số BMI của bạn là: ", BMI);
};

BodyMassIndex(1.77, 65)
// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
// nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã
// chuyển đổi.
// Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;
function Temperature(celsius, fahrenheit) {
    F_C = (fahrenheit - 32) * 5 / 9;
    C_F = (celsius) * 9.5 + 32;
    console.log("Từ độ F -> C là: ", F_C)
    console.log("Từ độ C -> F là: ", C_F)
};
Temperature(30, 98.6);

// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong
// một mảng số.
const arr = [142, 12, 2512, 45];
function TinhTong() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;

};
const totalSum = TinhTong(arr);
console.log("Tổng các phần tử trong mảng là: ", totalSum)

// 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
const arr1 = [3, 11, 15, 337, 1151, 560, 7159, 7825, 1730, 1607];
function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

for (let i = 0; i < arr1.length; i++) {
    if (isPrime(arr1[i])) {
        console.log(arr1[i] + " là số nguyên tố.");
    } else {
        console.log(arr1[i] + " không phải là số nguyên tố.");
    }
}

// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên
// người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// // Khai báo mảng global các object có 2 thuộc tính: name, email
// // Khai báo hàm có 2 tham số: name, newEmail
// // Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
// trùng với tham số name, cập nhật giá trị email về newEmail

let users = [
    { name: "long", email: "long@gmail.com" },
    { name: "linh", email: "linh@gmail.com" },
    { name: "lan", email: "lan@gmail.com" }
];

function updateEmail(name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail;
            console.log(`Đã cập nhật email cho ${name}: ${newEmail}`);
            return;
        }
    }
    console.log(`Không tìm thấy người dùng có tên ${name}`);
};
updateEmail("long", "newlong@gmail.com")

// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
// mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
let students = [
    { "name": "Alex", score: 85 },
    { "name": "Bob", score: 90 },
    { "name": "Michael", score: 100 },
    { "name": "Jenny", score: 70 },
];
function calGrades() {
    let sumscore = 0;
    for (let i = 0; i < students.length; i++) {
        sumscore += students[i].score;
    }
    averageScore = sumscore / students.length;
    console.log("Điểm trung bình của cá sinh viên trong mảng là: ", averageScore);
};
calGrades();

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
// “product 1”, price: 100 }
let products = [
    { "name": "candy", price: 100 },
    { "name": "milk", price: 200 },
    { "name": "jelly", price: 50 },
    { "name": "bread", price: 70 },
    { "name": "honey", price: -20 }
];
function checkPrice() {
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 0) {
            console.log(`Sản phẩm có giá tiền lớn hơn 0 là ${products[i].name}`);
        }
        else {
            console.log(`Sản phẩm có giá tiền không lớn hơn 0 là ${products[i].name}`);
        }
    }
};
checkPrice();

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
// mở cửa từ 9 giờ sáng đến 9 giờ tối.
function checkAvailable(hour) {
    if (hour >= 9 && hour <= 21) {
        console.log("Cửa hàng vẫn còn mở!")
    }
    else {
        console.log("Cửa hàng vẫn/đã đóng!");
    }
};
checkAvailable(5);
checkAvailable(14);

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
// tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
function Price(age) {
    if (age <= 5 && age >= 1) {
        console.log("Miễn phí vé vào cửa");
    }
    else if (age >= 6 && age <= 17) {
        console.log("Phí vào cửa là 50.000VNĐ");
    }
    else {
        console.log("Phí vào cửa là 100.000VNĐ");
    }
};
Price(20);
Price(4);
Price(10);
// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
// switch...case để xử lý.
function Month(soThang) {
    switch (soThang) {
        case 1:
            console.log("Tháng 1 (January)");
            break;
        case 2:
            console.log("Tháng 2 (Febuary)");
            break;
        case 3:
            console.log("Tháng 3 (March)");
            break;
        case 4:
            console.log("Tháng 4 (April)");
            break;
        case 5:
            console.log("Tháng 5 (May)");
            break;
        case 6:
            console.log("Tháng 6 (June)");
            break;
        case 7:
            console.log("Tháng 7 (July)");
            break;
        case 8:
            console.log("Tháng 8 (August)");
            break;
        case 9:
            console.log("Tháng 9 (September)");
            break;
        case 10:
            console.log("Tháng 10 (October)");
            break;
        case 11:
            console.log("Tháng 11 (November)");
            break;
        case 12:
            console.log("Tháng 12 (December)");
            break;
    };
};
Month(1);
Month(3);
Month(9);
Month(12);
Month(5);

// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
// 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
function StudentGrade(diem) {
    if (diem >= 8) {
        console.log("Học sinh GIỎI");
    } else if (diem >= 6.5 && diem < 8) {
        console.log("Học sinh KHÁ");
    } else if (diem >= 5 && diem < 6.5) {
        console.log("Học sinh TRUNG BÌNH");
    } else if (diem < 5) {
        console.log("Học sinh YẾU");
    } else {
        console.log("Điểm không hợp lệ");
    }
}

StudentGrade(7.8);
StudentGrade(4);
StudentGrade(10);
StudentGrade(5.4);

// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
// (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
function Temperature(temp) {
    if (temp < 20) {
        console.log("Trang thái thời tiết: Lạnh");
    }
    else if (temp < 30 && temp >= 20) {
        console.log("Trạng thái thời tiết: Mát");
    }
    else {
        console.log("Trạng thái thời tiết: Nóng");
    }
};
Temperature(30);
Temperature(25);
Temperature(10);