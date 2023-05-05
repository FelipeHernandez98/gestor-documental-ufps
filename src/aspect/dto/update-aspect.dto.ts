import { PartialType } from '@nestjs/mapped-types';
import { CreateAspectDto } from './create-aspect.dto';

export class UpdateAspectDto extends PartialType(CreateAspectDto) {}
