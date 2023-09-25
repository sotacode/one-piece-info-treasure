import { Module } from '@nestjs/common';
import { DevilFruitsService } from './devil_fruits.service';
import { DevilFruitsController } from './devil_fruits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevilFruit } from './entities/devil_fruit.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DevilFruitsController],
  providers: [DevilFruitsService],
  imports: [
    TypeOrmModule.forFeature([DevilFruit]),
    AuthModule
  ],
  exports: [
    DevilFruitsService,
    TypeOrmModule
  ]
})
export class DevilFruitsModule {}
