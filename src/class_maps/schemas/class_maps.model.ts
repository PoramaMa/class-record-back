import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { classrooms } from 'src/classrooms/schemas/classrooms.model';
import { students } from 'src/students/schemas/students.model';

@Table
export class class_maps extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  class_map_id: number;

  @ForeignKey(() => students)
  @Column({ allowNull: false })
  student_id: number;

  @ForeignKey(() => classrooms)
  @Column({ allowNull: false })
  classroom_id: number;

  @BelongsTo(() => students)
  students: students;

  @BelongsTo(() => classrooms)
  classrooms: classrooms;

  @Column({ allowNull: false, defaultValue: true })
  isActive: boolean;
}
