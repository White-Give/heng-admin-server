import { IsNumberString, IsString } from 'class-validator';

export class PaginationDto {
  @IsNumberString()
  pageCurrent: number;

  @IsNumberString()
  pageSize: number;

  @IsString()
  orderByColumn: string;
}
