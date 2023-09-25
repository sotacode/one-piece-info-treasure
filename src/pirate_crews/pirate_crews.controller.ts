import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PirateCrewsService } from './pirate_crews.service';
import { CreatePirateCrewDto } from './dto/create-pirate_crew.dto';
import { UpdatePirateCrewDto } from './dto/update-pirate_crew.dto';

@Controller('pirate-crews')
export class PirateCrewsController {
  constructor(private readonly pirateCrewsService: PirateCrewsService) {}

  @Post()
  create(@Body() createPirateCrewDto: CreatePirateCrewDto) {
    return this.pirateCrewsService.create(createPirateCrewDto);
  }

  @Get()
  findAll() {
    return this.pirateCrewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pirateCrewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePirateCrewDto: UpdatePirateCrewDto) {
    return this.pirateCrewsService.update(+id, updatePirateCrewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pirateCrewsService.remove(+id);
  }
}
