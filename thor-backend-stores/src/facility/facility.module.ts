import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { FacilityController } from './facility.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacilityEntity } from './facility.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FacilityEntity])],
  providers: [FacilityService],
  controllers: [FacilityController],
})
export class FacilityModule {}
