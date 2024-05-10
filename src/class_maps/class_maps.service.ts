import { Injectable } from '@nestjs/common';
import { CreateClassMapDto } from './dto/create-class_map.dto';
import { UpdateClassMapDto } from './dto/update-class_map.dto';

@Injectable()
export class ClassMapsService {
  create(createClassMapDto: CreateClassMapDto) {
    return 'This action adds a new classMap';
  }

  findAll() {
    return `This action returns all classMaps`;
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
