// Thêm vào file 05-for.js và thêm vào lời giải cho các bài sau:
// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student
// = {“name": “Alex", “age": 10} thì in ra
// name=Alex
// age=10
let Student = [{ "name": "Alex", age: 10 }, { "name": "Long", age: 22 }]
for (let i = 0; i < Student.length; i++) {
    for (let key in Student[i]) {
        console.log(key + "=" + Student[i][key]);
    };
};

// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
// student={“name": “Alex", “age": 10, “salary": 20} thì in ra tổng
// 30 (=10+20).
let student = { "name": "Alex", age: 10, salary: 20 }
let total = 0;
for (let key1 in student) {
    if (typeof student[key1] === 'number')
        total += student[key1]
};
console.log("Tổng giá trị số là:", total);

// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
// student={“name": “Alex", “age": 10} thì sẽ tạo ra một mảng
// [“name", “age"]
let student1 = { "name": "Alex", age: 10 }
let arr = [];
for (let key2 in student1) {
    arr.push(key2);
}
console.log(arr);