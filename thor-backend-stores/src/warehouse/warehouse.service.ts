import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BusinessLogicException,
  BusinessError,
} from 'src/shared/errors/business-errors';
import { Repository } from 'typeorm';
import { WarehouseEntity } from './warehouse.entity';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(WarehouseEntity)
    private readonly warehouseRepository: Repository<WarehouseEntity>,
  ) {}

  async findOne(warehouseId: string): Promise<WarehouseEntity> {
    const warehouse: WarehouseEntity = await this.warehouseRepository.findOne({
      where: { warehouseId: warehouseId },
      loadRelationIds: true,
    });
    if (!warehouse)
      throw new BusinessLogicException(
        'The warehouse with the given id was not found',
        BusinessError.NOT_FOUND,
      );

    return warehouse;
  }

  async create(warehouse: WarehouseEntity): Promise<WarehouseEntity> {
    return await this.warehouseRepository.save(warehouse);
  }
}
