import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateAgreementDto } from './dto/create-agreement.dto';
import { UpdateAgreementDto } from './dto/update-agreement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Agreement } from './entities/agreement.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AgreementService {

  private readonly logger = new Logger('AgreementService');

  constructor(

    @InjectRepository(Agreement)
    private readonly agreementRepository: Repository<Agreement>,

    private readonly dataSource: DataSource

  ){}

  async create(createAgreementDto: CreateAgreementDto) {

    try {

      const agreement = await this.agreementRepository.create(createAgreementDto);
      await this.agreementRepository.save(agreement);

      return agreement;

    } catch( error ){
      this.handleDBExceptions(error);
    }
    
  }

  async findAll() {
    return await this.agreementRepository.find()
  }

  async findOne(id: number) {
    const agreement =  await this.agreementRepository.findBy({agreement_id: id});
    if( !agreement ) throw new NotFoundException(`El agreement con id ${id} no existe`); 
    return agreement;
    
  }

  async update(id: number, updateAgreementDto: UpdateAgreementDto) {
    const agreement = await this.agreementRepository.findOne({where : {agreement_id: id}});
    const agreementActualizada = { ...agreement, ...updateAgreementDto }
    if( !agreement ) throw new NotFoundException(`El agreement con id ${id} no existe`); 
    try{
      await this.agreementRepository.save(agreementActualizada);
      return agreementActualizada;
    } catch(error) {
      this.handleDBExceptions(error);
    }
    
  }

  async remove(id: number) {
    const agreement = await this.findOne(id);
    return await this.agreementRepository.remove(agreement);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }

}
