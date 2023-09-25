import { Injectable } from '@nestjs/common';
import { CreatePirateCrewDto } from './dto/create-pirate_crew.dto';
import { UpdatePirateCrewDto } from './dto/update-pirate_crew.dto';

@Injectable()
export class PirateCrewsService {
  create(createPirateCrewDto: CreatePirateCrewDto) {
    return 'This action adds a new pirateCrew';
  }

  findAll() {
    return `This action returns all pirateCrews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pirateCrew`;
  }

  update(id: number, updatePirateCrewDto: UpdatePirateCrewDto) {
    return `This action updates a #${id} pirateCrew`;
  }

  remove(id: number) {
    return `This action removes a #${id} pirateCrew`;
  }
}
