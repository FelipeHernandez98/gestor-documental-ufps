import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateAspectEvidenceDto } from './dto/create-aspect_evidence.dto';
import { UpdateAspectEvidenceDto } from './dto/update-aspect_evidence.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AspectEvidence } from './entities/aspect_evidence.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AspectEvidenceService {

  private readonly logger = new Logger('AspectEvidenceService');

  constructor(
    @InjectRepository(AspectEvidence)
    private readonly aspectEvidenceRepository: Repository<AspectEvidence>,
    private readonly dataSource: DataSource
  ){}

  async create(createAspectEvidenceDto: CreateAspectEvidenceDto) {
    try {
      const aspectEvidence = await this.aspectEvidenceRepository.create(createAspectEvidenceDto);
      await this.aspectEvidenceRepository.save(aspectEvidence);
      return aspectEvidence;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const aspects = await this.aspectEvidenceRepository.find();
    if(aspects.length == 0){
      return "No hay registros en la BD"
    }else {
      return aspects;
    }
  }

  async findOne(id: number) {
    const aspect = await this.aspectEvidenceRepository.findBy({ asp_evidence_id: id})
    if( !aspect ) throw new NotFoundException(`El aspect evidence con id ${id} no existe`); 
    return aspect;
  }

  async update(id: number, updateAspectEvidenceDto: UpdateAspectEvidenceDto) {
    const aspect = await this.aspectEvidenceRepository.findOne({ where: {asp_evidence_id: id}})
    const aspectActualizado = { ...aspect, ...updateAspectEvidenceDto }
    if( !aspect ) throw new NotFoundException(`El aspect evidence con id ${id} no existe`)
    try {
      await this.aspectEvidenceRepository.save(aspectActualizado);
      return aspectActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const aspect = await this.findOne(id);
    return await this.aspectEvidenceRepository.remove(aspect);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
