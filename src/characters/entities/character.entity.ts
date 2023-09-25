import { DevilFruit } from "src/devil_fruits/entities/devil_fruit.entity";
import { PirateCrew } from "src/pirate_crews/entities/pirate_crew.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Character {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text', {nullable: true})
    alias: string;
    
    @Column('text', {nullable: true})
    age: number;

    @Column('text', {nullable: true})
    date_of_birth: string;
    
    @Column('text', {nullable: true})
    bounty: string;

    @Column('text', { nullable: true})
    role: string;

    @OneToMany(
        () => DevilFruit,
        (devilFruit) => devilFruit.id
    )
    devil_fruit_id: DevilFruit[];

    @OneToMany(
        () => PirateCrew,
        (pirateCrew) => pirateCrew.id
    )
    crew_id: PirateCrew[];
}
