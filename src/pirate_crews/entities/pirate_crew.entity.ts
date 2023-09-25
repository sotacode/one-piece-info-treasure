import { Character } from "src/characters/entities/character.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PirateCrew {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    leader: string;

    @Column('text')
    history: string;

    @OneToMany(
        () => Character,
        (pirateCrew) => pirateCrew.crew_id
    )
    character: Character[];

}
