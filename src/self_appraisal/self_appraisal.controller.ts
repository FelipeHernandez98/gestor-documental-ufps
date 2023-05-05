import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SelfAppraisalService } from './self_appraisal.service';
import { CreateSelfAppraisalDto } from './dto/create-self_appraisal.dto';
import { UpdateSelfAppraisalDto } from './dto/update-self_appraisal.dto';

@Controller('self-appraisal')
export class SelfAppraisalController {
  constructor(private readonly selfAppraisalService: SelfAppraisalService) {}

  @Post()
  create(@Body() createSelfAppraisalDto: CreateSelfAppraisalDto) {
    return this.selfAppraisalService.create(createSelfAppraisalDto);
  }

  @Get()
  findAll() {
    return this.selfAppraisalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.selfAppraisalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSelfAppraisalDto: UpdateSelfAppraisalDto) {
    return this.selfAppraisalService.update(+id, updateSelfAppraisalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.selfAppraisalService.remove(+id);
  }
}
