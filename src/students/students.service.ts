import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { students } from './schemas/students.model';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(students) private studentsModel: typeof students) {}

  async create(createStudentDto: CreateStudentDto): Promise<students> {
    try {
      const result = await this.studentsModel.create({
        student_code: createStudentDto.student_code,
        title: createStudentDto.title,
        fname: createStudentDto.fname,
        lname: createStudentDto.lname,
        gender: createStudentDto.gender,
        birthdate: createStudentDto.birthdate,
        grade_level: createStudentDto.grade_level,
      });
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findAll(): Promise<students[]> {
    return this.studentsModel.findAll({
      where: {
        isActive: true,
      },
    });
  }

  async findOne(id: number): Promise<students> {
    const data = await this.studentsModel.findOne({
      where: {
        student_id: id,
        isActive: true,
      },
    });
    if (!data) {
      throw new NotFoundException('Student not found');
    }
    return data;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    try {
      await this.studentsModel.update(
        {
          student_code: updateStudentDto.student_code,
          title: updateStudentDto.title,
          fname: updateStudentDto.fname,
          lname: updateStudentDto.lname,
          gender: updateStudentDto.gender,
          birthdate: updateStudentDto.birthdate,
          grade_level: updateStudentDto.grade_level,
        },
        {
          where: {
            student_id: id,
            isActive: true,
          },
        },
      );
      return 'successfully updated';
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async remove(id: number) {
    try {
      await this.studentsModel.update(
        {
          isActive: false,
        },
        {
          where: {
            student_id: id,
          },
        },
      );
      return 'successfully deleted';
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
