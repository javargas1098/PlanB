import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pb_facilities' })
export class FacilityEntity {
  @PrimaryColumn({ name: 'pb_facility_code' })
  facilityId: string;

  @Column({ name: 'pb_facility_name' })
  facilityName: string;
}
