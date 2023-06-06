import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateFactorDto } from './dto/create-factor.dto';
import { UpdateFactorDto } from './dto/update-factor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Factor } from './entities/factor.entity';

@Injectable()
export class FactorService {

  private readonly logger = new Logger('FactorService');

  constructor(
    @InjectRepository(Factor)
    private readonly factorRepository: Repository<Factor>,
    private readonly dataSource: DataSource
  ){}

  async create(createFactorDto: CreateFactorDto) {
    try {
      const factor = await this.factorRepository.create(createFactorDto);
      await this.factorRepository.save(factor);
      return factor;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const factor = await this.factorRepository.find();
    if(factor.length == 0){
      return "No hay registros en la BD"
    }else {
      return factor;
    }
  }

  async findOne(id: number) {
    const factor = await this.factorRepository.findBy({ factor_id: id})
    if( !factor ) throw new NotFoundException(`El factor con id ${id} no existe`); 
    return factor;
  }

  async update(id: number, updateFactorDto: UpdateFactorDto) {
    const factor = await this.factorRepository.findOne({ where: {factor_id: id}})
    const factorActualizado = { ...factor, ...updateFactorDto }
    if( !factor ) throw new NotFoundException(`El factor con id ${id} no existe`)
    try {
      await this.factorRepository.save(factorActualizado);
      return factorActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const factor = await this.findOne(id);
    return await this.factorRepository.remove(factor);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
