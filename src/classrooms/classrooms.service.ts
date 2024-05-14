import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { class_maps } from 'src/class_maps/schemas/class_maps.model';
import { students } from 'src/students/schemas/students.model';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { classrooms } from './schemas/classrooms.model';

@Injectable()
export class ClassroomsService {
  constructor(
    @InjectModel(classrooms) private classroomsModel: typeof classrooms,
  ) {}

  async create(createClassroomDto: CreateClassroomDto): Promise<classrooms> {
    try {
      const result = await this.classroomsModel.create({
        room_number: createClassroomDto.room_number,
        room_name: createClassroomDto.room_name,
        grade_level: createClassroomDto.grade_level,
        academic_year: createClassroomDto.academic_year,
        teacher_name: createClassroomDto.teacher_name,
      });
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findAll(query: any): Promise<classrooms[]> {
    console.log('query :: ', query.q);
    const whereCondition = {
      isActive: true,
    };
    if (query.q) {
      const searchCondition = {
        [Op.or]: [
          { room_number: { [Op.like]: `%${query.q}%` } },
          { room_name: { [Op.like]: `%${query.q}%` } },
          { teacher_name: { [Op.like]: `%${query.q}%` } },
        ],
      };
      Object.assign(whereCondition, searchCondition);
    }
    return await this.classroomsModel.findAll({
      where: whereCondition,
    });
  }

  async findOne(id: number): Promise<classrooms> {
    const data = await this.classroomsModel.findOne({
      where: {
        classroom_id: id,
        isActive: true,
      },
    });
    if (!data) {
      throw new NotFoundException('Student not found');
    }
    return data;
  }

  async findByStudentId(id: number): Promise<classrooms[]> {
    const data = await this.classroomsModel.findAll({
      where: {
        isActive: true,
      },
      include: [
        {
          model: class_maps,
          as: 'class_maps',
          where: {
            student_id: id,
            isActive: true,
          },
          include: [
            {
              model: students,
              as: 'students',
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

  async findByGradeLevel(level: number): Promise<classrooms[]> {
    const data = await this.classroomsModel.findAll({
      where: {
        grade_level: level,
        isActive: true,
      },
      include: [
        {
          model: class_maps,
          as: 'class_maps',
          required: false,
          where: {
            isActive: true,
          },
          include: [
            {
              model: students,
              as: 'students',
              where: {
                isActive: true,
              },
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

  async update(id: number, updateClassroomDto: UpdateClassroomDto) {
    try {
      await this.classroomsModel.update(
        {
          room_number: updateClassroomDto.room_number,
          room_name: updateClassroomDto.room_name,
          grade_level: updateClassroomDto.grade_level,
          academic_year: updateClassroomDto.academic_year,
          teacher_name: updateClassroomDto.teacher_name,
        },
        {
          where: {
            classroom_id: id,
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
      await this.classroomsModel.update(
        {
          isActive: false,
        },
        {
          where: {
            classroom_id: id,
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
