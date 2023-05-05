import { Module } from '@nestjs/common';
import { ResponsabilityService } from './responsability.service';
import { ResponsabilityController } from './responsability.controller';

@Module({
  controllers: [ResponsabilityController],
  providers: [ResponsabilityService]
})
export class ResponsabilityModule {}
