import { Module } from '@nestjs/common';
import { FactorService } from './factor.service';
import { FactorController } from './factor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factor } from './entities/factor.entity';

@Module({
  controllers: [FactorController],
  providers: [FactorService],
  imports: [
    TypeOrmModule.forFeature([ Factor ])
  ],
  exports: [
    FactorService,
    TypeOrmModule
  ]
})
export class FactorModule {}
