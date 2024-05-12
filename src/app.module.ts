import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { classrooms } from './classrooms/schemas/classrooms.model';
import { ClassMapsModule } from './class_maps/class_maps.module';
import { class_maps } from './class_maps/schemas/class_maps.model';
import { HomeController } from './home/home.controller';
import { students } from './students/schemas/students.model';
import { StudentsModule } from './students/students.module';
require('dotenv').config();

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
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      autoLoadModels: true,
      synchronize: true,
      models: [students, classrooms, class_maps],
    }),
    StudentsModule,
    ClassroomsModule,
    ClassMapsModule,
  ],
  controllers: [AppController, HomeController],
  providers: [AppService, HomeController],
})
export class AppModule {}
