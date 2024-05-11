import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateClassroomDto {
  @IsOptional()
  @IsString()
  readonly room_number?: string;

  @IsOptional()
  @IsString()
  readonly room_name?: string;

  @IsOptional()
  @IsDateString()
  readonly academic_year?: Date;

  @IsOptional()
  @IsString()
  readonly teacher_name?: string;
}
