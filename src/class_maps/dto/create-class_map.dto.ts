import { IsNumber } from 'class-validator';

export class CreateClassMapDto {
  @IsNumber()
  readonly student_id: bigint;

  @IsNumber()
  readonly classroom_id: bigint;
}
