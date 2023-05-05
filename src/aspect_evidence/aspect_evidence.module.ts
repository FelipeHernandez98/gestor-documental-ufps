import { Module } from '@nestjs/common';
import { AspectEvidenceService } from './aspect_evidence.service';
import { AspectEvidenceController } from './aspect_evidence.controller';

@Module({
  controllers: [AspectEvidenceController],
  providers: [AspectEvidenceService]
})
export class AspectEvidenceModule {}
