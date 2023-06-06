import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {

  private readonly logger = new Logger('PersonService');

  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
    private readonly dataSource: DataSource
  ){}

  async create(createPersonDto: CreatePersonDto) {
    try {
      const person = await this.personRepository.create(createPersonDto);
      await this.personRepository.save(person);
      return person;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const person = await this.personRepository.find();
    if(person.length == 0){
      return "No hay registros en la BD"
    }else {
      return person;
    }
  }

  async findOne(id: number) {
    const person = await this.personRepository.findBy({ person_id: id})
    if( !person ) throw new NotFoundException(`El person con id ${id} no existe`); 
    return person;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const person = await this.personRepository.findOne({ where: {person_id: id}})
    const personActualizado = { ...person, ...updatePersonDto }
    if( !person ) throw new NotFoundException(`El person con id ${id} no existe`)
    try {
      await this.personRepository.save(personActualizado);
      return personActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const person = await this.findOne(id);
    return await this.personRepository.remove(person);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
