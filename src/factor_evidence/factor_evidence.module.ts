import { Module } from '@nestjs/common';
import { FactorEvidenceService } from './factor_evidence.service';
import { FactorEvidenceController } from './factor_evidence.controller';

@Module({
  controllers: [FactorEvidenceController],
  providers: [FactorEvidenceService]
})
export class FactorEvidenceModule {}
