import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { classrooms } from 'src/classrooms/schemas/classrooms.model';
import { class_maps } from 'src/class_maps/schemas/class_maps.model';
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

  async findAll(query: any): Promise<students[]> {
    const whereCondition = {
      isActive: true,
    };
    if (query.q) {
      console.log('======================== query :: ', query.q);
      const searchCondition = {
        [Op.or]: [
          { student_code: { [Op.like]: `%${query.q}%` } },
          { title: { [Op.like]: `%${query.q}%` } },
          { fname: { [Op.like]: `%${query.q}%` } },
          { lname: { [Op.like]: `%${query.q}%` } },
        ],
      };
      Object.assign(whereCondition, searchCondition);
    }
    if (query.year) {
      console.log('======================== year :: ', query.year);
      Object.assign(whereCondition, {
        '$class_maps.classrooms.academic_year$': query.year,
      });
    }
    if (query.grade) {
      console.log('======================== grade :: ', query.grade);
      Object.assign(whereCondition, {
        grade_level: query.grade,
      });
    }

    if (query.class) {
      console.log('======================== class :: ', query.class);
      Object.assign(whereCondition, {
        '$class_maps.classrooms.classroom_id$': query.class,
      });
    }
    return this.studentsModel.findAll({
      where: whereCondition,
      include: [
        {
          model: class_maps,
          as: 'class_maps',
          include: [
            {
              model: classrooms,
              as: 'classrooms',
            },
          ],
        },
      ],
    });
  }

  async findOne(id: number): Promise<students> {
    const data = await this.studentsModel.findOne({
      where: {
        student_id: id,
        isActive: true,
      },
      include: [
        {
          model: class_maps,
          as: 'class_maps',
          include: [
            {
              model: classrooms,
              as: 'classrooms',
            },
          ],
        },
      ],
    });
    if (!data) {
      throw new NotFoundException('Student not found');
    }
    return data;
  }

  async findByRoomId(id: number): Promise<students[]> {
    const data = await this.studentsModel.findAll({
      where: {
        isActive: true,
      },
      include: [
        {
          model: class_maps,
          as: 'class_maps',
          where: {
            classroom_id: id,
            isActive: true,
          },
          include: [
            {
              model: classrooms,
              as: 'classrooms',
            },
          ],
        },
      ],
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
