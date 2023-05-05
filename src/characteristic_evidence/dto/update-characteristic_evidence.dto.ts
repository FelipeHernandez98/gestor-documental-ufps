import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacteristicEvidenceDto } from './create-characteristic_evidence.dto';

export class UpdateCharacteristicEvidenceDto extends PartialType(CreateCharacteristicEvidenceDto) {}
