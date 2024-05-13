import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  readonly student_code?: string;

  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly fname?: string;

  @IsOptional()
  @IsString()
  readonly lname?: string;

  @IsOptional()
  @IsString()
  readonly gender?: string;

  @IsOptional()
  @IsDateString()
  readonly birthdate?: Date;

  @IsOptional()
  @IsNumber()
  readonly grade_level?: number;
}
