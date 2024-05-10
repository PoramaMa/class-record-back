import { IsNumber, IsString } from 'class-validator';

export class CreateClassroomDto {
  @IsString()
  readonly number: string;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly grade_level: number;

  @IsNumber()
  readonly school_year: number;

  @IsNumber()
  readonly teacher_id: bigint;
}
