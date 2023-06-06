import { Module } from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';
import { CharacteristicController } from './characteristic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Characteristic } from './entities/characteristic.entity';

@Module({
  controllers: [CharacteristicController],
  providers: [CharacteristicService],
  imports: [
    TypeOrmModule.forFeature([ Characteristic ])
  ],
  exports: [
    CharacteristicService,
    TypeOrmModule
  ]
})
export class CharacteristicModule {}
