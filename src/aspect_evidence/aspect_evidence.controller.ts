import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AspectEvidenceService } from './aspect_evidence.service';
import { CreateAspectEvidenceDto } from './dto/create-aspect_evidence.dto';
import { UpdateAspectEvidenceDto } from './dto/update-aspect_evidence.dto';

@Controller('aspect-evidence')
export class AspectEvidenceController {
  constructor(private readonly aspectEvidenceService: AspectEvidenceService) {}

  @Post()
  create(@Body() createAspectEvidenceDto: CreateAspectEvidenceDto) {
    return this.aspectEvidenceService.create(createAspectEvidenceDto);
  }

  @Get()
  findAll() {
    return this.aspectEvidenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aspectEvidenceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAspectEvidenceDto: UpdateAspectEvidenceDto) {
    return this.aspectEvidenceService.update(+id, updateAspectEvidenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aspectEvidenceService.remove(+id);
  }
}
