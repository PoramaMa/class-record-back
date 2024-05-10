import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { teachers } from './schemas/teachers.model';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  imports: [SequelizeModule.forFeature([teachers])],
  controllers: [TeachersController],
  providers: [TeachersService],
  exports: [TeachersService],
})
export class TeachersModule {}
