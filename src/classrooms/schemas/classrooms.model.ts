import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { teachers } from 'src/teachers/schemas/teachers.model';

@Table
export class classrooms extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  classroom_id: number;

  @Column
  number: string;

  @Column
  name: string;

  @Column
  grade_level: number;

  @Column
  school_year: number;

  @Column
  teacher_id: number;

  @Column({ defaultValue: true })
  isActive: boolean;

  @BelongsTo(() => teachers, 'teacher_id')
  teachers: teachers;
}
