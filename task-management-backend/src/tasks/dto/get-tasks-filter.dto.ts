import {
  IsEnum,
  IsIn,
  IsNegative,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTaskFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus, {
    message:
      `"$value" is an invalid status. ` +
      `The allowed values are: ${Object.keys(TaskStatus)}`,
  })
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
