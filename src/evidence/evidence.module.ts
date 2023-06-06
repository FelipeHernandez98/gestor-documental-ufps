import { Module } from '@nestjs/common';
import { EvidenceService } from './evidence.service';
import { EvidenceController } from './evidence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evidence } from './entities/evidence.entity';

@Module({
  controllers: [EvidenceController],
  providers: [EvidenceService],
  imports: [
    TypeOrmModule.forFeature([ Evidence ])
  ],
  exports: [
    EvidenceService,
    TypeOrmModule
  ]
})
export class EvidenceModule {}
