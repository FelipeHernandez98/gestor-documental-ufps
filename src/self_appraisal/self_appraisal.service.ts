import { Injectable } from '@nestjs/common';
import { CreateSelfAppraisalDto } from './dto/create-self_appraisal.dto';
import { UpdateSelfAppraisalDto } from './dto/update-self_appraisal.dto';

@Injectable()
export class SelfAppraisalService {
  create(createSelfAppraisalDto: CreateSelfAppraisalDto) {
    return 'This action adds a new selfAppraisal';
  }

  findAll() {
    return `This action returns all selfAppraisal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} selfAppraisal`;
  }

  update(id: number, updateSelfAppraisalDto: UpdateSelfAppraisalDto) {
    return `This action updates a #${id} selfAppraisal`;
  }

  remove(id: number) {
    return `This action removes a #${id} selfAppraisal`;
  }
}
