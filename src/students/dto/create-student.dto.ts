import { IsDateString, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  readonly student_code: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly fname: string;

  @IsString()
  readonly lname: string;

  @IsString()
  readonly gender: string;

  @IsDateString()
  readonly birthdate: Date;

  @IsString()
  readonly grade_level: string;
}
