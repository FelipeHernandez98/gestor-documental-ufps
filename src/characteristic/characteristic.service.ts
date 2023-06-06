import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';
import { Characteristic } from './entities/characteristic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CharacteristicService {

  private readonly logger = new Logger('CharacteristicService');

  constructor(
    @InjectRepository(Characteristic)
    private readonly characteristicRepository: Repository<Characteristic>,
    private readonly dataSource: DataSource
  ){}

  async create(createCharacteristicDto: CreateCharacteristicDto) {
    try {
      const characteristic = await this.characteristicRepository.create(createCharacteristicDto);
      await this.characteristicRepository.save(characteristic);
      return characteristic;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const characteristic = await this.characteristicRepository.find();
    if(characteristic.length == 0){
      return "No hay registros en la BD"
    }else {
      return characteristic;
    }
  }

  async findOne(id: number) {
    const characteristic = await this.characteristicRepository.findBy({ characteristic_id: id})
    if( !characteristic ) throw new NotFoundException(`El characteristic con id ${id} no existe`); 
    return characteristic;
  }

  async update(id: number, updateCharacteristicDto: UpdateCharacteristicDto) {
    const characteristic = await this.characteristicRepository.findOne({ where: {characteristic_id: id}})
    const characteristicActualizado = { ...characteristic, ...updateCharacteristicDto }
    if( !characteristic ) throw new NotFoundException(`El characteristic evidence con id ${id} no existe`)
    try {
      await this.characteristicRepository.save(characteristicActualizado);
      return characteristicActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const characteristic = await this.findOne(id);
    return await this.characteristicRepository.remove(characteristic);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
