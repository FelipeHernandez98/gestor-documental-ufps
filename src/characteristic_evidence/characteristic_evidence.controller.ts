import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacteristicEvidenceService } from './characteristic_evidence.service';
import { CreateCharacteristicEvidenceDto } from './dto/create-characteristic_evidence.dto';
import { UpdateCharacteristicEvidenceDto } from './dto/update-characteristic_evidence.dto';

@Controller('characteristic-evidence')
export class CharacteristicEvidenceController {
  constructor(private readonly characteristicEvidenceService: CharacteristicEvidenceService) {}

  @Post()
  create(@Body() createCharacteristicEvidenceDto: CreateCharacteristicEvidenceDto) {
    return this.characteristicEvidenceService.create(createCharacteristicEvidenceDto);
  }

  @Get()
  findAll() {
    return this.characteristicEvidenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characteristicEvidenceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacteristicEvidenceDto: UpdateCharacteristicEvidenceDto) {
    return this.characteristicEvidenceService.update(+id, updateCharacteristicEvidenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characteristicEvidenceService.remove(+id);
  }
}
