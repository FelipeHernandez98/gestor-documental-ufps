import { IsBoolean, IsDecimal, IsString, Max, MaxLength, Min }  from "class-validator";
export class CreateCharacteristicEvidenceDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    characteristic_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    evidence_id: number;
}
