import { IsDecimal }  from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAspectEvidenceDto {
   
    @IsDecimal()
    @ApiProperty()
    aspect_id: number;

    @IsDecimal()
    @ApiProperty()
    evidence_id: number;
}
