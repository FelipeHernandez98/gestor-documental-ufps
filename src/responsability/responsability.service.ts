import { Injectable } from '@nestjs/common';
import { CreateResponsabilityDto } from './dto/create-responsability.dto';
import { UpdateResponsabilityDto } from './dto/update-responsability.dto';

@Injectable()
export class ResponsabilityService {
  create(createResponsabilityDto: CreateResponsabilityDto) {
    return 'This action adds a new responsability';
  }

  findAll() {
    return `This action returns all responsability`;
  }

  findOne(id: number) {
    return `This action returns a #${id} responsability`;
  }

  update(id: number, updateResponsabilityDto: UpdateResponsabilityDto) {
    return `This action updates a #${id} responsability`;
  }

  remove(id: number) {
    return `This action removes a #${id} responsability`;
  }
}
