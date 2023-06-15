import { IsDecimal, Max, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateFactorEvidenceDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    factor_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    evidence_id: number;
}
