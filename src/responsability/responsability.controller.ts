import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponsabilityService } from './responsability.service';
import { CreateResponsabilityDto } from './dto/create-responsability.dto';
import { UpdateResponsabilityDto } from './dto/update-responsability.dto';

@Controller('responsability')
export class ResponsabilityController {
  constructor(private readonly responsabilityService: ResponsabilityService) {}

  @Post()
  create(@Body() createResponsabilityDto: CreateResponsabilityDto) {
    return this.responsabilityService.create(createResponsabilityDto);
  }

  @Get()
  findAll() {
    return this.responsabilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsabilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResponsabilityDto: UpdateResponsabilityDto) {
    return this.responsabilityService.update(+id, updateResponsabilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsabilityService.remove(+id);
  }
}
