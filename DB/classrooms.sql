CREATE TABLE classrooms (
    classroom_id INT AUTO_INCREMENT PRIMARY KEY,
    room_number VARCHAR(3),
    room_name VARCHAR(255),
    grade_level VARCHAR(3),
    academic_year INT,
    teacher_name VARCHAR(255),
    isActive TINYINT(1) NOT NULL DEFAULT 1,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO classrooms (room_number, room_name, grade_level, academic_year, teacher_name, isActive, createdAt, updatedAt)
VALUES 
('121', 'ห้องวิทยาศาสตร์', '1', 2567, 'ครูวิทย์', 1, NOW(), NOW()),
('122', 'ห้องภาษาอังกฤษ', '1', 2567, 'ครูenglish', 1, NOW(), NOW()),
('123', 'ห้องสังคมศึกษา', '1', 2567, 'ครูสังคม', 1, NOW(), NOW()),
('124', 'ห้องคอมพิวเตอร์', '1', 2567, 'ครูIT', 1, NOW(), NOW()),
('221', 'ห้องศิลปะ', '2', 2567, 'ครูศิลป์', 1, NOW(), NOW()),
('222', 'ห้องเทคโนโลยี', '2', 2567, 'ครูเทค', 1, NOW(), NOW()),
('223', 'ห้องดนตรี', '2', 2567, 'ครูดนตรี', 1, NOW(), NOW()),
('224', 'ห้องกีฬา', '2', 2567, 'ครูกีฬา', 1, NOW(), NOW()),
('321', 'ห้องคณิตศาสตร์', '3', 2567, 'ครูคณิต', 1, NOW(), NOW()),
('322', 'ห้องสุขศึกษา', '3', 2567, 'ครูสุข', 1, NOW(), NOW()),
('323', 'ห้องวรรณคดี', '3', 2567, 'ครูวรรณ', 1, NOW(), NOW()),
('324', 'ห้องภูมิปัญญาท้องถิ่น', '3', 2567, 'ครูปัญญา', 1, NOW(), NOW());
