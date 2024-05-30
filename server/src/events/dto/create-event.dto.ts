import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  IsDate,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEventDto {
  @IsString()
  @MaxLength(255)
  name: string;

  @IsString()
  @MaxLength(600)
  description: string;

  @Type(() => Date)
  @IsDate()
  @ValidateIf((o) => o.startDate < new Date())
  startDate: Date = new Date();

  @IsString()
  @MaxLength(255)
  address: string;

  @IsString()
  @MaxLength(20)
  latitude: string = '40.7128'; // Placeholder value

  @IsString()
  @MaxLength(20)
  longitude: string = '-74.0060'; // Placeholder value

  @IsString()
  @MaxLength(100)
  gamepace: string;

  @IsBoolean()
  areBoardAndPiecesProvided: boolean;

  @IsInt()
  @Min(0)
  @IsOptional()
  cashprize: number | null;
}
