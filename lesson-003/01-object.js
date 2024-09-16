
//Tạo file 01-object.js , thêm bài giải lần lượt cho các bài sau:
//1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và
//year=2021. Sau đó in ra năm sản xuất của xe.
let Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(Car.year);
//2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc
//tính street, city, country). In ra tên đường của người này.
let Person = {
    name: "long",
    address: {
        street: "Vuong Thua Vu",
        city: "Ha noi",
        country: "Viet Nam"
    }
};
console.log(Person.address.street);
// 3. Tạo một object student và truy cập đến điểm môn toán(math) sử dụng ngoặc vuông.
// Biết object student bao gồm 2 thuộc tính: name và grades.Trong đó grades là một
// object với 2 thuộc tính kiểu number: math và english
let Student = {
    name: "long",
    grade: {
        math: 10,
        english: 11
    }
};
console.log(Student["grade"]["math"]);
// 4. Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá
// của chúng.Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
let Products = {
    'Candy': '10',
    'Milk': '20',
    'Jelly': '50'
};

for (let property in Product) {
    console.log(property + ": " + Product[property]);
};
// 5. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như
// volume, brightness.Thay đổi volume và in ra object mới.
let Settings = {
    volume: 100,
    brightness: 90
};
console.log("Old", Settings)
Settings.volume = 90;
console.log("New", Settings)
// 6. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
let Bike = {
    make: 'Yamaha',
    model: 'YZF-R3'
};
Bike.color = "Blue";
console.log(Bike);
// 7. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi
// object này
let Employee = {
    name: "long",
    age: 22
}
delete Employee.age;
console.log(Employee);
// 8. Một trường học có các lớp học và học sinh như sau:
// ○ classA: An, Bình, Châu
// ○ classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh
// Vd:
// const school = { classA: ["Giang"]...}

const school = { classA: ["An", "Bình", "Châu"], classB: ["Đào", "Hương", "Giang"] }

// for (let className in school) {
//     console.log(`Lớp: ${className}`);
//     school[className].forEach(student => {
//         console.log(`- Học sinh: ${student}`);
//     });
// }


