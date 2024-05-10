import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { classrooms } from './classrooms/schemas/classrooms.model';
import { ClassMapsModule } from './class_maps/class_maps.module';
import { class_maps } from './class_maps/schemas/class_maps.model';
import { students } from './students/schemas/students.model';
import { StudentsModule } from './students/students.module';
import { teachers } from './teachers/schemas/teachers.model';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      host: '45.150.129.195',
      port: 3306,
      username: 'root',
      password: 'ZZ1RUfSQ6o33V-Yb',
      database: 'class_record',
      autoLoadModels: true,
      synchronize: true,
      models: [students, teachers, classrooms, class_maps],
    }),
    StudentsModule,
    TeachersModule,
    ClassroomsModule,
    ClassMapsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
