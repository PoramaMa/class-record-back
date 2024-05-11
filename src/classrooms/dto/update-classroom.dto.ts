import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateClassroomDto {
  @IsOptional()
  @IsString()
  readonly room_number?: string;

  @IsOptional()
  @IsString()
  readonly room_name?: string;

  @IsOptional()
  @IsNumber()
  readonly academic_year?: number;

  @IsOptional()
  @IsString()
  readonly teacher_name?: string;
}
