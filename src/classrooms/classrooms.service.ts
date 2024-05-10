import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { teachers } from 'src/teachers/schemas/teachers.model';
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
        number: createClassroomDto.number,
        name: createClassroomDto.name,
        grade_level: createClassroomDto.grade_level,
        school_year: createClassroomDto.school_year,
        teacher_id: createClassroomDto.teacher_id,
      });
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findAll(): Promise<classrooms[]> {
    return await this.classroomsModel.findAll({
      where: {
        isActive: true,
      },
      include: [
        {
          model: teachers,
          as: 'teachers',
        },
      ],
    });
  }

  async findOne(id: number): Promise<classrooms> {
    const data = await this.classroomsModel.findOne({
      where: {
        classroom_id: id,
        isActive: true,
      },
      include: [
        {
          model: teachers,
          as: 'teachers',
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
          number: updateClassroomDto.number,
          name: updateClassroomDto.name,
          grade_level: updateClassroomDto.grade_level,
          school_year: updateClassroomDto.school_year,
          teacher_id: updateClassroomDto.teacher_id,
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
