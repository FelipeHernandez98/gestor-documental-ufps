import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactorEvidenceService } from './factor_evidence.service';
import { CreateFactorEvidenceDto } from './dto/create-factor_evidence.dto';
import { UpdateFactorEvidenceDto } from './dto/update-factor_evidence.dto';

@Controller('factor-evidence')
export class FactorEvidenceController {
  constructor(private readonly factorEvidenceService: FactorEvidenceService) {}

  @Post()
  create(@Body() createFactorEvidenceDto: CreateFactorEvidenceDto) {
    return this.factorEvidenceService.create(createFactorEvidenceDto);
  }

  @Get()
  findAll() {
    return this.factorEvidenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factorEvidenceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactorEvidenceDto: UpdateFactorEvidenceDto) {
    return this.factorEvidenceService.update(+id, updateFactorEvidenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factorEvidenceService.remove(+id);
  }
}
