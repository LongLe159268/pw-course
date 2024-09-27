// 4. Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”. 
// a. Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc, 
// b. Thực hiện search theo tiêu đề bài báo bất kì. 

import {test} from '@playwright/test';

test ("Bài học 4: Personal notes", async ({page}) => {
    const notes = [
        {title: "Viên ruby đầu tiên trên thế giới được 'trồng' ngay trên nhẫn", content: "Lần đầu tiên một 'hạt giống' ruby phát triển thành viên ruby kích thước đầy đủ ngay trên một chiếc nhẫn bạch kim nhờ phương pháp hóa học."},
        {title: "Siêu turbine gió công suất 20 MW", content: "Mẫu turbine gió của Tập đoàn đường sắt Trung Quốc có thể sản xuất 40 kWh điện chỉ với một vòng quay, giúp tối đa hóa mức năng lượng sản xuất."},
        {title: "Hiện tượng dị thường bí ẩn ảnh hưởng tới tàu vũ trụ", content: "Cho tới nay, giới khoa học vẫn chưa thể lý giải hiện tượng gây ra sự khác biệt giữa chuyển động dự kiến và chuyển động ghi lại được khi một tàu vũ trụ bay ngang hành tinh."},
        {title: "Việt Nam dẫn đầu thế giới về chỉ số xuất khẩu hàng hóa sáng tạo", content: "Năm 2024, Việt Nam thăng hai bậc trong bảng xếp hạng Đổi mới sáng tạo toàn cầu, đặc biệt dẫn đầu thế giới về xuất khẩu hàng hóa sáng tạo."},
        {title: "Cầu đá 400 tuổi lộ diện khi nước cạn", content: "'Cầu nghìn mắt' bắc qua hồ Bà Dương, hồ nước ngọt lớn nhất Trung Quốc, nổi lên trong thời tiết khô nóng khiến mực nước xuống dưới 10,5 m."},
        {title: "Viên ruby đầu tiên trên thế giới được 'trồng' ngay trên nhẫn", content: "Lần đầu tiên một 'hạt giống' ruby phát triển thành viên ruby kích thước đầy đủ ngay trên một chiếc nhẫn bạch kim nhờ phương pháp hóa học."},
        {title: "Siêu turbine gió công suất 20 MW", content: "Mẫu turbine gió của Tập đoàn đường sắt Trung Quốc có thể sản xuất 40 kWh điện chỉ với một vòng quay, giúp tối đa hóa mức năng lượng sản xuất."},
        {title: "Hiện tượng dị thường bí ẩn ảnh hưởng tới tàu vũ trụ", content: "Cho tới nay, giới khoa học vẫn chưa thể lý giải hiện tượng gây ra sự khác biệt giữa chuyển động dự kiến và chuyển động ghi lại được khi một tàu vũ trụ bay ngang hành tinh."},
        {title: "Việt Nam dẫn đầu thế giới về chỉ số xuất khẩu hàng hóa sáng tạo", content: "Năm 2024, Việt Nam thăng hai bậc trong bảng xếp hạng Đổi mới sáng tạo toàn cầu, đặc biệt dẫn đầu thế giới về xuất khẩu hàng hóa sáng tạo."},
        {title: "Cầu đá 400 tuổi lộ diện khi nước cạn", content: "'Cầu nghìn mắt' bắc qua hồ Bà Dương, hồ nước ngọt lớn nhất Trung Quốc, nổi lên trong thời tiết khô nóng khiến mực nước xuống dưới 10,5 m."}
    ];

    await test.step("Vào playwrightvn > Lesson 4", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('//a[@href = "04-xpath-personal-notes.html"]').click();
    });
    
    await test.step("Thêm mới 10 note có nội dung là tiêu đề bất kỳ và một phần ngắn(khoảng 3 dòng) tại báo vnexpress", async () => {
        for( const note of notes){
            await page.locator('//input[@type = "text" and @id = "note-title"]').fill(note.title);
            await page.locator('//textarea[@id = "note-content"]').fill(note.content);
            await page.locator('//button[@id = "add-note"]').click();
        };
    });

    await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
        await page.locator('//input[@type = "text" and @id = "search"]').fill("Việt");
    });
});