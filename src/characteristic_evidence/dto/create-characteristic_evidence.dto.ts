import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDecimal, IsString, Max, MaxLength, Min }  from "class-validator";
export class CreateCharacteristicEvidenceDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    characteristic_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    evidence_id: number;
}
