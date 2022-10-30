import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { StoreDto } from './store.dto';
import { StoreEntity } from './store.entity';
import { StoreService } from './store.service';

@Controller('stores')
@UseInterceptors(BusinessErrorsInterceptor)
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get(':storeId')
  async findOne(@Param('storeId') storeId: string) {
    return await this.storeService.findOne(storeId);
  }

  @Post()
  async create(@Body() storeDto: StoreDto) {
    const store: StoreEntity = plainToInstance(StoreEntity, storeDto);
    return await this.storeService.create(store);
  }
}
