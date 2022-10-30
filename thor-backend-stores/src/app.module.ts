import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreEntity } from './store/store.entity';
import { StoreModule } from './store/store.module';
import { FacilityModule } from './facility/facility.module';
import { WarehouseModule } from './warehouse/warehouse.module';

@Module({
  imports: [
    StoreModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'postgres',
      entities: [StoreEntity],
      dropSchema: false,
      synchronize: false,
      keepConnectionAlive: true,
    }),
    FacilityModule,
    WarehouseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
