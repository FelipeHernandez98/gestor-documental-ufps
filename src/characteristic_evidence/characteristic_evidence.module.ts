import { Module } from '@nestjs/common';
import { CharacteristicEvidenceService } from './characteristic_evidence.service';
import { CharacteristicEvidenceController } from './characteristic_evidence.controller';

@Module({
  controllers: [CharacteristicEvidenceController],
  providers: [CharacteristicEvidenceService]
})
export class CharacteristicEvidenceModule {}
