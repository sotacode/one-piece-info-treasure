import { PartialType } from '@nestjs/mapped-types';
import { CreateDevilFruitDto } from './create-devil_fruit.dto';

export class UpdateDevilFruitDto extends PartialType(CreateDevilFruitDto) {}
