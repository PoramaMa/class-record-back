import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClassMapsController } from './class_maps.controller';
import { ClassMapsService } from './class_maps.service';
import { class_maps } from './schemas/class_maps.model';

@Module({
  imports: [SequelizeModule.forFeature([class_maps])],
  controllers: [ClassMapsController],
  providers: [ClassMapsService],
})
export class ClassMapsModule {}
