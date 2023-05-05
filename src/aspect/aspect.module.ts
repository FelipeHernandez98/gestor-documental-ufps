import { Module } from '@nestjs/common';
import { AspectService } from './aspect.service';
import { AspectController } from './aspect.controller';

@Module({
  controllers: [AspectController],
  providers: [AspectService]
})
export class AspectModule {}
