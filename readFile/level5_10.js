
//TemplateString:
//Đầu vào: một file template, và các params, nội dung file và tên các param không cố định
//Đầu ra: một file mới với nội dung là template và các params được truyền vào.


const fs = require('fs');
const path = require('path');

function TemplateString(templatePath, params, outputPath) {
    try {
        // Đọc nội dung file template
        let template = fs.readFileSync(templatePath, 'utf8');
        
        // Thay thế các params trong template
        for (const [key, value] of Object.entries(params)) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            template = template.replace(regex, value);
        }
        
        // Ghi nội dung mới vào file output
        fs.writeFileSync(outputPath, template, 'utf8');
        console.log(`File HTML mới đã được tạo: ${outputPath}`);
    } catch (error) {
        console.error("Lỗi xử lý template:", error);
    }
}

// Ví dụ sử dụng
const templatePath = path.join(__dirname, 'index.html');
const outputPath = path.join(__dirname, 'output.html');
const params = { 
    title: 'bai 5.10', 
    pageTitle: 'Home page', 
    content: 'Đầu ra: một file mới với nội dung là template và các params được truyền vào'
};

TemplateString(templatePath, params, outputPath);


