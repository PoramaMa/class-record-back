import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { class_maps } from 'src/class_maps/schemas/class_maps.model';

@Table
export class students extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  student_id: number;

  @Column({ type: DataType.STRING(6) })
  student_code: string;

  @Column
  title: string;

  @Column
  fname: string;

  @Column
  lname: string;

  @Column
  gender: string;

  @Column
  birthdate: Date;

  @Column({ type: DataType.INTEGER })
  grade_level: number;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => class_maps, { foreignKey: 'student_id' })
  class_maps: class_maps[];
}
