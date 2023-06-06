import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateFactorEvidenceDto } from './dto/create-factor_evidence.dto';
import { UpdateFactorEvidenceDto } from './dto/update-factor_evidence.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { FactorEvidence } from './entities/factor_evidence.entity';

@Injectable()
export class FactorEvidenceService {

  private readonly logger = new Logger('FactorEvidenceService');

  constructor(
    @InjectRepository(FactorEvidence)
    private readonly factorEvidenceRepository: Repository<FactorEvidence>,
    private readonly dataSource: DataSource
  ){}
  
  async create(createFactorEvidenceDto: CreateFactorEvidenceDto) {
    try {
      const factorEvidence = await this.factorEvidenceRepository.create(createFactorEvidenceDto);
      await this.factorEvidenceRepository.save(factorEvidence);
      return factorEvidence;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const factorEvidence = await this.factorEvidenceRepository.find();
    if(factorEvidence.length == 0){
      return "No hay registros en la BD"
    }else {
      return factorEvidence;
    }
  }

  async findOne(id: number) {
    const factorEvidence = await this.factorEvidenceRepository.findBy({ fact_evidence_id: id})
    if( !factorEvidence ) throw new NotFoundException(`El factor evidence con id ${id} no existe`); 
    return factorEvidence;
  }

  async update(id: number, updateFactorEvidenceDto: UpdateFactorEvidenceDto) {
    const factorEvidence = await this.factorEvidenceRepository.findOne({ where: {fact_evidence_id: id}})
    const factorEvidenceActualizado = { ...factorEvidence, ...updateFactorEvidenceDto }
    if( !factorEvidence ) throw new NotFoundException(`El factor _evidence con id ${id} no existe`)
    try {
      await this.factorEvidenceRepository.save(factorEvidenceActualizado);
      return factorEvidenceActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const factorEvidence = await this.findOne(id);
    return await this.factorEvidenceRepository.remove(factorEvidence);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
