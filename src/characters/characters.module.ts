import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService],
  imports: [
    TypeOrmModule.forFeature([Character]),
    AuthModule
  ],
  exports: [
    CharactersService,
    TypeOrmModule
  ]
})
export class CharactersModule {}
