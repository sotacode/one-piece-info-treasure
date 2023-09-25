import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Location } from './entities/location.entity';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService],
  imports: [
    TypeOrmModule.forFeature([Location]),
    AuthModule
  ],
  exports: [
    LocationsService,
    TypeOrmModule
  ]
})
export class LocationsModule {}
