import { Module } from '@nestjs/common';
import { SelfAppraisalService } from './self_appraisal.service';
import { SelfAppraisalController } from './self_appraisal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelfAppraisal } from './entities/self_appraisal.entity';

@Module({
  controllers: [SelfAppraisalController],
  providers: [SelfAppraisalService],
  imports: [
    TypeOrmModule.forFeature([ SelfAppraisal ])
  ],
  exports: [
    SelfAppraisalService, 
    TypeOrmModule
  ]
})
export class SelfAppraisalModule {}
