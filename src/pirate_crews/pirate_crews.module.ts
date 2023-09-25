import { Module } from '@nestjs/common';
import { PirateCrewsService } from './pirate_crews.service';
import { PirateCrewsController } from './pirate_crews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PirateCrew } from './entities/pirate_crew.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PirateCrewsController],
  providers: [PirateCrewsService],
  imports: [
    TypeOrmModule.forFeature([PirateCrew]),
    AuthModule
  ],
  exports: [
    PirateCrewsService,
    TypeOrmModule
  ]
})
export class PirateCrewsModule {}
