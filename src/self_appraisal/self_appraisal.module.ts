import { Module } from '@nestjs/common';
import { SelfAppraisalService } from './self_appraisal.service';
import { SelfAppraisalController } from './self_appraisal.controller';

@Module({
  controllers: [SelfAppraisalController],
  providers: [SelfAppraisalService]
})
export class SelfAppraisalModule {}
