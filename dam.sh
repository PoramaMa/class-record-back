#!/bin/bash

# หยุด container
docker stop class-record-back

# ลบ container
docker rm class-record-back

# ลบ Docker image
docker rmi class-record-back

# สร้าง Docker image จาก Dockerfile ที่อยู่ในไดเรกทอรีปัจจุบัน
docker image build -t class-record-back ./

# รัน container จาก image ใหม่ที่สร้างขึ้น
docker run --name class-record-back -d -p 3002:3000 class-record-back

# สั่ง container รีสตาทอัตโนมัติทุกครั้ง
docker update --restart always class-record-back