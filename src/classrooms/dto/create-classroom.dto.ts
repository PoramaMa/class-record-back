import { IsNumber, IsString } from 'class-validator';

export class CreateClassroomDto {
  @IsString()
  readonly room_number: string;

  @IsString()
  readonly room_name: string;

  @IsString()
  readonly grade_level: string;

  @IsNumber()
  readonly academic_year: number;

  @IsString()
  readonly teacher_name: string;
}
