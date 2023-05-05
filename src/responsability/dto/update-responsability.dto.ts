import { PartialType } from '@nestjs/mapped-types';
import { CreateResponsabilityDto } from './create-responsability.dto';

export class UpdateResponsabilityDto extends PartialType(CreateResponsabilityDto) {}
