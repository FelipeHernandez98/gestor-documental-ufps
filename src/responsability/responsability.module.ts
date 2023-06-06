import { Module } from '@nestjs/common';
import { ResponsabilityService } from './responsability.service';
import { ResponsabilityController } from './responsability.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsability } from './entities/responsability.entity';

@Module({
  controllers: [ResponsabilityController],
  providers: [ResponsabilityService],
  imports: [
    TypeOrmModule.forFeature([ Responsability ])
  ],
  exports: [
    ResponsabilityService,
    TypeOrmModule
  ]
})
export class ResponsabilityModule {}
