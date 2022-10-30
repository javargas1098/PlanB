import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pb_warehouses' })
export class WarehouseEntity {
  @PrimaryColumn({ name: 'pb_warehouse_code' })
  warehouseId: string;

  @Column({ name: 'pb_warehouse_name' })
  warehouseName: string;

  @Column({ name: 'pb_warehouse_status', type: 'bit' })
  warehouseStatus: boolean;
}
