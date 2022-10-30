import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pb_stores' })
export class StoreEntity {
  @PrimaryColumn({ name: 'pb_store_code' })
  storeId: string;

  @Column({ name: 'pb_store_name' })
  storeName: string;

  @Column({ name: 'pb_store_facility_code' })
  storeFacilityCode: string;

  @Column({ name: 'pb_store_parent_code' })
  storeParentCode: string;

  @Column({ name: 'pb_store_warehouse_code' })
  storeWarehouseCode: string;
}
