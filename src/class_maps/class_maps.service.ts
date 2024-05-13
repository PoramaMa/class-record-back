import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { classrooms } from 'src/classrooms/schemas/classrooms.model';
import { students } from 'src/students/schemas/students.model';
import { CreateClassMapDto } from './dto/create-class_map.dto';
import { UpdateClassMapDto } from './dto/update-class_map.dto';
import { class_maps } from './schemas/class_maps.model';

@Injectable()
export class ClassMapsService {
  constructor(
    @InjectModel(class_maps) private class_mapsModel: typeof class_maps,
  ) {}

  async create(createClassMapDto: CreateClassMapDto): Promise<class_maps> {
    const data = await this.class_mapsModel.findOne({
      where: {
        student_id: createClassMapDto.student_id,
        classroom_id: createClassMapDto.classroom_id,
        isActive: true,
      },
    });
    if (data) {
      throw new NotFoundException('Student in classroom already exists');
    } else {
      const result = await this.class_mapsModel.create({
        student_id: createClassMapDto.student_id,
        classroom_id: createClassMapDto.classroom_id,
      });
      return result;
    }
  }

  async findAll(): Promise<class_maps[]> {
    return this.class_mapsModel.findAll({
      where: {
        isActive: true,
      },
      include: [
        {
          model: classrooms,
          as: 'classrooms',
        },
        {
          model: students,
          as: 'students',
        },
      ],
    });
  }

  async findOne(id: number) {
    const data = await this.class_mapsModel.findOne({
      where: {
        class_map_id: id,
        isActive: true,
      },
      include: [
        {
          model: classrooms,
          as: 'classrooms',
        },
        {
          model: students,
          as: 'students',
        },
      ],
    });
    if (!data) {
      throw new NotFoundException('class_mapsModel not found');
    }
    return data;
  }

  async findByRoomId(id: number) {
    const data = await this.class_mapsModel.findAll({
      include: [
        {
          model: classrooms,
          as: 'classrooms',
          where: {
            classroom_id: id,
          },
        },
        {
          model: students,
          as: 'students',
        },
      ],
    });
    if (!data) {
      throw new NotFoundException('class_mapsModel not found');
    }
    return data;
  }

  update(id: number, updateClassMapDto: UpdateClassMapDto) {
    return `This action updates a #${id} classMap`;
  }

  async remove(id: number) {
    try {
      const classMapToRemove = await this.class_mapsModel.findAll({
        where: {
          class_map_id: id,
        },
      });
      if (classMapToRemove.length == 0)
        throw new NotFoundException(`ClassMap with id ${id} not found`);
      await this.class_mapsModel.destroy({
        where: {
          class_map_id: id,
        },
      });
      return `ClassMap with id ${id} has been successfully removed`;
    } catch (e) {
      throw e.message;
    }
  }
}
