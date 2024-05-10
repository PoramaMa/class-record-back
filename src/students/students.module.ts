import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { students } from './schemas/students.model';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports: [SequelizeModule.forFeature([students])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
