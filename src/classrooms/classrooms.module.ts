import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeachersModule } from '../teachers/teachers.module';
import { ClassroomsController } from './classrooms.controller';
import { ClassroomsService } from './classrooms.service';
import { classrooms } from './schemas/classrooms.model';

@Module({
  imports: [SequelizeModule.forFeature([classrooms]), TeachersModule],
  controllers: [ClassroomsController],
  providers: [ClassroomsService],
})
export class ClassroomsModule {}
