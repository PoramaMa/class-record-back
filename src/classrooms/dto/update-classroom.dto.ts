import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateClassroomDto {
  @IsOptional()
  @IsString()
  readonly number?: string;

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsNumber()
  readonly grade_level?: number;

  @IsOptional()
  @IsNumber()
  readonly school_year?: number;

  @IsOptional()
  @IsNumber()
  readonly teacher_id?: bigint;
}
