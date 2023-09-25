import { PartialType } from '@nestjs/mapped-types';
import { CreatePirateCrewDto } from './create-pirate_crew.dto';

export class UpdatePirateCrewDto extends PartialType(CreatePirateCrewDto) {}
