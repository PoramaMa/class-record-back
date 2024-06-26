import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { class_maps } from 'src/class_maps/schemas/class_maps.model';

@Table
export class classrooms extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  classroom_id: number;

  @Column({ type: DataType.STRING(3) })
  room_number: string;

  @Column
  room_name: string;

  @Column({ type: DataType.STRING(3) })
  grade_level: string;

  @Column
  academic_year: number;

  @Column
  teacher_name: string;

  @Column({ allowNull: false, defaultValue: true })
  isActive: boolean;

  @HasMany(() => class_maps, { foreignKey: 'classroom_id' })
  class_maps: class_maps[];
}
