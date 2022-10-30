import { IsNotEmpty, IsString } from 'class-validator';
export class ProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
