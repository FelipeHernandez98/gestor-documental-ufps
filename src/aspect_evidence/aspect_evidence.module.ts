import { Module } from '@nestjs/common';
import { AspectEvidenceService } from './aspect_evidence.service';
import { AspectEvidenceController } from './aspect_evidence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AspectEvidence } from './entities/aspect_evidence.entity';

@Module({
  controllers: [AspectEvidenceController],
  providers: [AspectEvidenceService],
  imports: [
    TypeOrmModule.forFeature([AspectEvidence])
  ],
  exports: [
    AspectEvidenceService,
    TypeOrmModule
  ]
})
export class AspectEvidenceModule {}
