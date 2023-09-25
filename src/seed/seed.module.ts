import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductsModule } from 'src/products/products.module';
import { AuthModule } from 'src/auth/auth.module';
import { CharactersModule } from 'src/characters/characters.module';
import { DevilFruitsModule } from 'src/devil_fruits/devil_fruits.module';
import { LocationsModule } from 'src/locations/locations.module';
import { PirateCrewsModule } from 'src/pirate_crews/pirate_crews.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    ProductsModule,
    CharactersModule,
    DevilFruitsModule,
    LocationsModule,
    PirateCrewsModule,
    AuthModule
  ]
})
export class SeedModule {}
