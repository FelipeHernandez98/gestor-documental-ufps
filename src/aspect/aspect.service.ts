import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateAspectDto } from './dto/create-aspect.dto';
import { UpdateAspectDto } from './dto/update-aspect.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Aspect } from './entities/aspect.entity';

@Injectable()
export class AspectService {

  private readonly logger = new Logger('AgreementService');

  constructor(
    @InjectRepository(Aspect)
    private readonly aspectRepository: Repository<Aspect>,
    private readonly dataSource: DataSource
  ){}

  async create(createAspectDto: CreateAspectDto) {
    try {
      const aspect = await this.aspectRepository.create(createAspectDto);
      await this.aspectRepository.save(aspect);
      return aspect;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const aspects = await this.aspectRepository.find();
    if(aspects.length == 0){
      return "No hay registros en la BD"
    }else {
      return aspects;
    }

  }

  async findOne(id: number) {
    const aspect = await this.aspectRepository.findBy({ aspect_id: id})
    if( !aspect ) throw new NotFoundException(`El aspect con id ${id} no existe`); 
    return aspect;
  }

  async update(id: number, updateAspectDto: UpdateAspectDto) {
    const aspect = await this.aspectRepository.findOne({ where: {aspect_id: id}})
    const aspectActualizado = { ...aspect, ...updateAspectDto }
    if( !aspect ) throw new NotFoundException(`El aspect con id ${id} no existe`)
    try {
      await this.aspectRepository.save(aspectActualizado);
      return aspectActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const aspect = await this.findOne(id);
    return await this.aspectRepository.remove(aspect);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
