import { Injectable } from '@nestjs/common';
import { CreateCharacteristicEvidenceDto } from './dto/create-characteristic_evidence.dto';
import { UpdateCharacteristicEvidenceDto } from './dto/update-characteristic_evidence.dto';

@Injectable()
export class CharacteristicEvidenceService {
  create(createCharacteristicEvidenceDto: CreateCharacteristicEvidenceDto) {
    return 'This action adds a new characteristicEvidence';
  }

  findAll() {
    return `This action returns all characteristicEvidence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characteristicEvidence`;
  }

  update(id: number, updateCharacteristicEvidenceDto: UpdateCharacteristicEvidenceDto) {
    return `This action updates a #${id} characteristicEvidence`;
  }

  remove(id: number) {
    return `This action removes a #${id} characteristicEvidence`;
  }
}
