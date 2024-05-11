import { IsDateString, IsString } from 'class-validator';

export class CreateClassroomDto {
  @IsString()
  readonly room_number: string;

  @IsString()
  readonly room_name: string;

  @IsDateString()
  readonly academic_year: Date;

  @IsString()
  readonly teacher_name: string;
}
