import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateComputerDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  brand: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  ram: number;

  @IsString()
  procesador: string
}
