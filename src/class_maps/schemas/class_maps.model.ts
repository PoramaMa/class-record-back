import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class class_maps extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  class_map_id: number;

  @Column
  student_id: number;

  @Column
  classroom_id: number;

  @Column({ defaultValue: true })
  isActive: boolean;
}
