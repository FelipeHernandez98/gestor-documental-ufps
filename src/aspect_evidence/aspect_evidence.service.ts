import { Injectable } from '@nestjs/common';
import { CreateAspectEvidenceDto } from './dto/create-aspect_evidence.dto';
import { UpdateAspectEvidenceDto } from './dto/update-aspect_evidence.dto';

@Injectable()
export class AspectEvidenceService {
  create(createAspectEvidenceDto: CreateAspectEvidenceDto) {
    return 'This action adds a new aspectEvidence';
  }

  findAll() {
    return `This action returns all aspectEvidence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aspectEvidence`;
  }

  update(id: number, updateAspectEvidenceDto: UpdateAspectEvidenceDto) {
    return `This action updates a #${id} aspectEvidence`;
  }

  remove(id: number) {
    return `This action removes a #${id} aspectEvidence`;
  }
}
