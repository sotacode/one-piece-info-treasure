import { Character } from "src/characters/entities/character.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DevilFruit {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text', {nullable: true})
    secondName: string;

    @Column('text')
    type: string;

    @Column('text')
    description: string;

    @OneToOne(
        () => Character,
        (character) => character.devil_fruit_id
    )
    character: Character;


}
