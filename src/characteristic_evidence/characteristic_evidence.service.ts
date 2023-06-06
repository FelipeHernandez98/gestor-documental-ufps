import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCharacteristicEvidenceDto } from './dto/create-characteristic_evidence.dto';
import { UpdateCharacteristicEvidenceDto } from './dto/update-characteristic_evidence.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CharacteristicEvidence } from './entities/characteristic_evidence.entity';


@Injectable()
export class CharacteristicEvidenceService {

  private readonly logger = new Logger('CharacteristicEvidenceService');

  constructor(
    @InjectRepository(CharacteristicEvidence)
    private readonly characteristicEvidenceRepository: Repository<CharacteristicEvidence>,
    private readonly dataSource: DataSource
  ){}

  async create(createCharacteristicEvidenceDto: CreateCharacteristicEvidenceDto) {
    try {
      const CharacteristicEvidence = await this.characteristicEvidenceRepository.create(createCharacteristicEvidenceDto);
      await this.characteristicEvidenceRepository.save(CharacteristicEvidence);
      return CharacteristicEvidence;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const characteristicEvidence = await this.characteristicEvidenceRepository.find();
    if(characteristicEvidence.length == 0){
      return "No hay registros en la BD"
    }else {
      return characteristicEvidence;
    }
  }

  async findOne(id: number) {
    const characteristic = await this.characteristicEvidenceRepository.findBy({ characteristic_id: id})
    if( !characteristic ) throw new NotFoundException(`El characteristic con id ${id} no existe`); 
    return characteristic;
  }

  async update(id: number, updateCharacteristicEvidenceDto: UpdateCharacteristicEvidenceDto) {
    const characteristicEvidence = await this.characteristicEvidenceRepository.findOne({ where: {cha_evidence_id: id}})
    const characteristicEvidenceActualizado = { ...characteristicEvidence, ...updateCharacteristicEvidenceDto }
    if( !characteristicEvidence ) throw new NotFoundException(`El characteristicEvidence evidence con id ${id} no existe`)
    try {
      await this.characteristicEvidenceRepository.save(characteristicEvidenceActualizado);
      return characteristicEvidenceActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const characteristicEvidence = await this.findOne(id);
    return await this.characteristicEvidenceRepository.remove(characteristicEvidence);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
