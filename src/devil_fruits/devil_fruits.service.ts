import { Injectable } from '@nestjs/common';
import { CreateDevilFruitDto } from './dto/create-devil_fruit.dto';
import { UpdateDevilFruitDto } from './dto/update-devil_fruit.dto';

@Injectable()
export class DevilFruitsService {
  create(createDevilFruitDto: CreateDevilFruitDto) {
    return 'This action adds a new devilFruit';
  }

  findAll() {
    return `This action returns all devilFruits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devilFruit`;
  }

  update(id: number, updateDevilFruitDto: UpdateDevilFruitDto) {
    return `This action updates a #${id} devilFruit`;
  }

  remove(id: number) {
    return `This action removes a #${id} devilFruit`;
  }
}
