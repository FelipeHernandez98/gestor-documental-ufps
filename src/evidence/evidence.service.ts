import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { UpdateEvidenceDto } from './dto/update-evidence.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Evidence } from './entities/evidence.entity';

@Injectable()
export class EvidenceService {

  private readonly logger = new Logger('EvidenceService');

  constructor(
    @InjectRepository(Evidence)
    private readonly evidenceRepository: Repository<Evidence>,
    private readonly dataSource: DataSource
  ){}

  async create(createEvidenceDto: CreateEvidenceDto) {
    try {
      const evidence = await this.evidenceRepository.create(createEvidenceDto);
      await this.evidenceRepository.save(evidence);
      return evidence;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const evidence = await this.evidenceRepository.find();
    if(evidence.length == 0){
      return "No hay registros en la BD"
    }else {
      return evidence;
    }
  }

  async findOne(id: number) {
    const evidence = await this.evidenceRepository.findBy({ evidence_id: id})
    if( !evidence ) throw new NotFoundException(`El evidence con id ${id} no existe`); 
    return evidence;
  }

  async update(id: number, updateEvidenceDto: UpdateEvidenceDto) {
    const evidence = await this.evidenceRepository.findOne({ where: {evidence_id: id}})
    const evidenceActualizado = { ...evidence, ...updateEvidenceDto }
    if( !evidence ) throw new NotFoundException(`El evidence con id ${id} no existe`)
    try {
      await this.evidenceRepository.save(evidenceActualizado);
      return evidenceActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const evidence = await this.findOne(id);
    return await this.evidenceRepository.remove(evidence);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
