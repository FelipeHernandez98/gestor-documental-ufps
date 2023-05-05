import { PartialType } from '@nestjs/mapped-types';
import { CreateSelfAppraisalDto } from './create-self_appraisal.dto';

export class UpdateSelfAppraisalDto extends PartialType(CreateSelfAppraisalDto) {}
