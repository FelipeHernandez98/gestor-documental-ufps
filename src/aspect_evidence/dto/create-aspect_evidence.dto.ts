import { IsDecimal }  from "class-validator";

export class CreateAspectEvidenceDto {
   
    @IsDecimal()
    aspect_id: number;

    @IsDecimal()
    evidence_id: number;
}
