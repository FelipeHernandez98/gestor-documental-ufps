import { PartialType } from '@nestjs/mapped-types';
import { CreateFactorEvidenceDto } from './create-factor_evidence.dto';

export class UpdateFactorEvidenceDto extends PartialType(CreateFactorEvidenceDto) {}
