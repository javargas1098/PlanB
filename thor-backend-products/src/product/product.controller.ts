import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { ProductDto } from './product.dto';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Controller('products')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':productId')
  async findOne(@Param('productId') productId: string) {
    return await this.productService.findOne(productId);
  }

  @Post()
  async create(@Body() productDto: ProductDto) {
    const product: ProductEntity = plainToInstance(ProductEntity, productDto);
    return await this.productService.create(product);
  }
}
