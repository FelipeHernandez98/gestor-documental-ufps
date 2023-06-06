import { Module } from '@nestjs/common';
import { CharacteristicEvidenceService } from './characteristic_evidence.service';
import { CharacteristicEvidenceController } from './characteristic_evidence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacteristicEvidence } from './entities/characteristic_evidence.entity';

@Module({
  controllers: [CharacteristicEvidenceController],
  providers: [CharacteristicEvidenceService],
  imports: [
    TypeOrmModule.forFeature([ CharacteristicEvidence ])
  ],
  exports: [
    CharacteristicEvidenceService,
    TypeOrmModule
  ]
})
export class CharacteristicEvidenceModule {}
