import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { class_maps } from 'src/class_maps/schemas/class_maps.model';

@Table
export class classrooms extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  classroom_id: number;

  @Column
  room_number: string;

  @Column
  room_name: string;

  @Column
  grade_level: string;

  @Column
  academic_year: number;

  @Column
  teacher_name: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => class_maps, { foreignKey: 'classroom_id' })
  class_maps: class_maps[];
}
