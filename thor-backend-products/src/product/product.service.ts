import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BusinessLogicException,
  BusinessError,
} from 'src/shared/business-errors';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async findOne(productId: string): Promise<ProductEntity> {
    const product: ProductEntity = await this.productRepository.findOne({
      where: { id: productId },
      loadRelationIds: true,
    });
    if (!product)
      throw new BusinessLogicException(
        'The product with the given id was not found',
        BusinessError.NOT_FOUND,
      );

    return product;
  }

  async create(product: ProductEntity): Promise<ProductEntity> {
    return await this.productRepository.save(product);
  }
}
