import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { classrooms } from 'src/classrooms/schemas/classrooms.model';

@Table
export class teachers extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  teacher_id: number;

  @Column
  title: string;

  @Column
  fname: string;

  @Column
  lname: string;

  @Column
  gender: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => classrooms, 'teacher_id')
  classrooms: classrooms[];
}
