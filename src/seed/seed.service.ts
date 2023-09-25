import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
import { Character } from 'src/characters/entities/character.entity';
import { DevilFruit } from 'src/devil_fruits/entities/devil_fruit.entity';
import { Location } from 'src/locations/entities/location.entity';
import { PirateCrew } from 'src/pirate_crews/entities/pirate_crew.entity';
import { v4 as UUID } from "uuid";

@Injectable()
export class SeedService {

  constructor(
    private readonly productsService: ProductsService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Character)
    private readonly characterRepository: Repository<Character>,

    @InjectRepository(DevilFruit)
    private readonly devilFruitRepository: Repository<DevilFruit>,

    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,

    @InjectRepository(PirateCrew)
    private readonly pirateCrewRepository: Repository<PirateCrew>,
  )
  {}

  async runSeed() {
    await this.deleteTables();
    const initialUsers: User[] = await this.insertUsers();
    const devilFruits: DevilFruit[] = await this.insertDevilFruits();
    await this.insertNewProducts(initialUsers[0]);
    return 'SEED EXECUTED';
  }

  private async deleteTables(){
    await this.productsService.deleteAllProducts();

    const queryBuilderUser = this.userRepository.createQueryBuilder();
    await queryBuilderUser.delete().where({}).execute();

    const queryBuilderCharacter = this.characterRepository.createQueryBuilder();
    await queryBuilderCharacter.delete().where({}).execute();

    const queryBuilderDevilFruit = this.devilFruitRepository.createQueryBuilder();
    await queryBuilderDevilFruit.delete().where({}).execute();

    const queryBuilderLocation = this.locationRepository.createQueryBuilder();
    await queryBuilderLocation.delete().where({}).execute();

    const queryBuilderPirateCrew = this.pirateCrewRepository.createQueryBuilder();
    await queryBuilderPirateCrew.delete().where({}).execute();
  }

  private async insertUsers(){
    const seedUsers = initialData.users;
    const users: User[] = [];
    
    seedUsers.forEach( user => {
      const {password, ...dataUser } = user;
      users.push(this.userRepository.create({...dataUser, password: bcrypt.hashSync(password,10)}))
    })
    const usersDone = await this.userRepository.save(users)
    return usersDone;
  }

  private async insertDevilFruits(){
    const seedDevilFruits = initialData.devilFruits;
    const devilFruits: DevilFruit[] = []
    seedDevilFruits.forEach( devilFruit => {
      devilFruits.push(this.devilFruitRepository.create({id: UUID(), ...devilFruit}))
    } )
    const devilFruitsDone = await this.devilFruitRepository.save(devilFruits);
    return devilFruitsDone;
  }

  private async insertNewProducts(user: User){
    await this.productsService.deleteAllProducts();
    const products = initialData.products;

    const insertPromises = [];

    products.forEach( product => {
      insertPromises.push(this.productsService.create(product, user))
    });
    await Promise.all(insertPromises);
    return true
  }
}
