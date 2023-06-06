import { Module } from '@nestjs/common';
import { FactorEvidenceService } from './factor_evidence.service';
import { FactorEvidenceController } from './factor_evidence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactorEvidence } from './entities/factor_evidence.entity';

@Module({
  controllers: [FactorEvidenceController],
  providers: [FactorEvidenceService],
  imports: [
    TypeOrmModule.forFeature([ FactorEvidence ])
  ],
  exports: [
    FactorEvidenceService,
    TypeOrmModule
  ]
})
export class FactorEvidenceModule {}
