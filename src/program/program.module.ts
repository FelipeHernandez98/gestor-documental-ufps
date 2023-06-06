import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Program } from './entities/program.entity';

@Module({
  controllers: [ProgramController],
  providers: [ProgramService],
  imports: [
    TypeOrmModule.forFeature([ Program ])
  ],
  exports: [
    ProgramService,
    TypeOrmModule
  ]
})
export class ProgramModule {}
