import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateClassMapDto } from './dto/create-class_map.dto';
import { UpdateClassMapDto } from './dto/update-class_map.dto';
import { class_maps } from './schemas/class_maps.model';

@Injectable()
export class ClassMapsService {
  constructor(
    @InjectModel(class_maps) private class_mapsModel: typeof class_maps,
  ) {}

  async create(createClassMapDto: CreateClassMapDto): Promise<class_maps> {
    try {
      const result = await this.class_mapsModel.create({
        student_id: createClassMapDto.student_id,
        classroom_id: createClassMapDto.classroom_id,
      });
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findAll(): Promise<class_maps[]> {
    return this.class_mapsModel.findAll({
      where: {
        isActive: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} classMap`;
  }

  update(id: number, updateClassMapDto: UpdateClassMapDto) {
    return `This action updates a #${id} classMap`;
  }

  remove(id: number) {
    return `This action removes a #${id} classMap`;
  }
}
