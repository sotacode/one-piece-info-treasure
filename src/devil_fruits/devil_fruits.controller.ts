import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevilFruitsService } from './devil_fruits.service';
import { CreateDevilFruitDto } from './dto/create-devil_fruit.dto';
import { UpdateDevilFruitDto } from './dto/update-devil_fruit.dto';

@Controller('devil-fruits')
export class DevilFruitsController {
  constructor(private readonly devilFruitsService: DevilFruitsService) {}

  @Post()
  create(@Body() createDevilFruitDto: CreateDevilFruitDto) {
    return this.devilFruitsService.create(createDevilFruitDto);
  }

  @Get()
  findAll() {
    return this.devilFruitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devilFruitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDevilFruitDto: UpdateDevilFruitDto) {
    return this.devilFruitsService.update(+id, updateDevilFruitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devilFruitsService.remove(+id);
  }
}
