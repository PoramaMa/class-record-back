CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_code VARCHAR(6) NOT NULL,
    title VARCHAR(4) NOT NULL,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    birthdate DATETIME NOT NULL,
    grade_level VARCHAR(3) NOT NULL,
    isActive TINYINT(1) NOT NULL DEFAULT 1,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO students
    (student_code, title, fname, lname, gender, birthdate, grade_level, isActive, createdAt, updatedAt)
VALUES
    ('S00001', 'ด.ช.', 'ณัฐพงษ์', 'ชินวัฒน์', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00002', 'ด.ญ.', 'วรากร', 'เกษมสุข', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00003', 'ด.ญ.', 'อรวรรณ', 'สุนทรพันธ์', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00004', 'ด.ญ.', 'ศิริพร', 'เจริญประเสริฐ', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00005', 'ด.ช.', 'กัญญาวีร์', 'พงษ์สุข', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00006', 'ด.ญ.', 'อมรรัตน์', 'สุวรรณพงศ์', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00007', 'ด.ช.', 'วีรวัฒน์', 'จันทร์ทอง', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00008', 'ด.ช.', 'ธนภัทร', 'วงศ์สุข', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00009', 'ด.ช.', 'รัชดา', 'ประสิทธิ์สุข', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00010', 'ด.ญ.', 'กนกพร', 'วงศ์พิพัฒน์', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00011', 'ด.ช.', 'พิชญา', 'มณีสวัสดิ์', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00012', 'ด.ช.', 'ธนวัฒน์', 'ชินวัตร', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00013', 'ด.ช.', 'กันตภณ', 'สมบูรณ์สุข', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00014', 'ด.ญ.', 'ธนบดินท์', 'สุขทอง', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00015', 'ด.ญ.', 'ประภาพร', 'ศรีสุข', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00016', 'ด.ญ.', 'พรรษา', 'วงศ์สุข', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00017', 'ด.ช.', 'ประวิทย์', 'ทองดี', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00018', 'ด.ช.', 'ธนดล', 'สุวรรณพงศ์', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00019', 'ด.ช.', 'วิชชุ', 'ชินวัตร', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00020', 'ด.ญ.', 'ศรีรัตน์', 'วงศ์สุข', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00021', 'ด.ญ.', 'ปภัสสร', 'สุขทอง', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00022', 'ด.ช.', 'ณภัทร', 'ชินวัตร', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00023', 'ด.ช.', 'วรเมธ', 'สมบูรณ์สุข', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00024', 'ด.ช.', 'รัชนันท์', 'วงศ์สุข', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00025', 'ด.ญ.', 'พิมพ์ลภัส', 'ชินวัตร', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00026', 'ด.ช.', 'สมชาย', 'สุขทอง', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00027', 'ด.ช.', 'ธนกฤต', 'วงศ์สุข', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00028', 'ด.ช.', 'ณภัทร์', 'ชินวัตร', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00029', 'ด.ช.', 'วีระวัฒน์', 'สมบูรณ์สุข', 'ชาย', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW()),
    ('S00030', 'ด.ญ.', 'ปภัสสรา', 'วงศ์สุข', 'หญิง', '2005-01-01', FLOOR(RAND() * 3) + 1, true, NOW(), NOW())
