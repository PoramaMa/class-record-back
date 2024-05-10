import { IsNumber, IsOptional } from 'class-validator';

export class UpdateClassMapDto {
  @IsOptional()
  @IsNumber()
  readonly student_id?: bigint;

  @IsOptional()
  @IsNumber()
  readonly classroom_id?: bigint;
}
