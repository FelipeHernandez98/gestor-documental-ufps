import { Injectable } from '@nestjs/common';
import { CreateAspectDto } from './dto/create-aspect.dto';
import { UpdateAspectDto } from './dto/update-aspect.dto';

@Injectable()
export class AspectService {
  create(createAspectDto: CreateAspectDto) {
    return 'This action adds a new aspect';
  }

  findAll() {
    return `This action returns all aspect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aspect`;
  }

  update(id: number, updateAspectDto: UpdateAspectDto) {
    return `This action updates a #${id} aspect`;
  }

  remove(id: number) {
    return `This action removes a #${id} aspect`;
  }
}
