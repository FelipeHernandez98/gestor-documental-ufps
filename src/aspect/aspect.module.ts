import { Module } from '@nestjs/common';
import { AspectService } from './aspect.service';
import { AspectController } from './aspect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aspect } from './entities/aspect.entity';

@Module({
  controllers: [AspectController],
  providers: [AspectService],
  imports: [
    TypeOrmModule.forFeature([Aspect])
  ],
  exports: [
    AspectService,
    TypeOrmModule
  ]
})
export class AspectModule {}
