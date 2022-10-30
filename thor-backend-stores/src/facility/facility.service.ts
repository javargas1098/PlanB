import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BusinessLogicException,
  BusinessError,
} from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { FacilityEntity } from './facility.entity';

@Injectable()
export class FacilityService {
  constructor(
    @InjectRepository(FacilityEntity)
    private readonly facilityRepository: Repository<FacilityEntity>,
  ) {}

  async findOne(facilityId: string): Promise<FacilityEntity> {
    const facility: FacilityEntity = await this.facilityRepository.findOne({
      where: { facilityId: facilityId },
      loadRelationIds: true,
    });
    if (!facility)
      throw new BusinessLogicException(
        'The facility with the given id was not found',
        BusinessError.NOT_FOUND,
      );

    return facility;
  }

  async create(facility: FacilityEntity): Promise<FacilityEntity> {
    return await this.facilityRepository.save(facility);
  }
}
