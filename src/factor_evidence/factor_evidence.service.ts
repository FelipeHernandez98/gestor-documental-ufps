import { Injectable } from '@nestjs/common';
import { CreateFactorEvidenceDto } from './dto/create-factor_evidence.dto';
import { UpdateFactorEvidenceDto } from './dto/update-factor_evidence.dto';

@Injectable()
export class FactorEvidenceService {
  create(createFactorEvidenceDto: CreateFactorEvidenceDto) {
    return 'This action adds a new factorEvidence';
  }

  findAll() {
    return `This action returns all factorEvidence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factorEvidence`;
  }

  update(id: number, updateFactorEvidenceDto: UpdateFactorEvidenceDto) {
    return `This action updates a #${id} factorEvidence`;
  }

  remove(id: number) {
    return `This action removes a #${id} factorEvidence`;
  }
}
