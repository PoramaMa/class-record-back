import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassMapsService } from './class_maps.service';
import { CreateClassMapDto } from './dto/create-class_map.dto';
import { UpdateClassMapDto } from './dto/update-class_map.dto';

@Controller('class-maps')
export class ClassMapsController {
  constructor(private readonly classMapsService: ClassMapsService) {}

  @Post()
  create(@Body() createClassMapDto: CreateClassMapDto) {
    return this.classMapsService.create(createClassMapDto);
  }

  @Get()
  findAll() {
    return this.classMapsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classMapsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassMapDto: UpdateClassMapDto) {
    return this.classMapsService.update(+id, updateClassMapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classMapsService.remove(+id);
  }
}
