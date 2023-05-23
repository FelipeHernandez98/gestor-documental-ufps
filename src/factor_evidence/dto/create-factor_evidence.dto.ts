import { IsDecimal, Max, Min } from "class-validator";

export class CreateFactorEvidenceDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    factor_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    evidence_id: number;
}
