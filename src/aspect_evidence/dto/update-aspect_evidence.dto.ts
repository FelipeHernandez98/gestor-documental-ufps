import { PartialType } from '@nestjs/mapped-types';
import { CreateAspectEvidenceDto } from './create-aspect_evidence.dto';

export class UpdateAspectEvidenceDto extends PartialType(CreateAspectEvidenceDto) {}
