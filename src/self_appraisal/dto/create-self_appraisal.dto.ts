import { IsBoolean, IsDecimal, IsString, Max, MaxLength, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSelfAppraisalDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    agreement_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    program_id: number;
    
    @IsString()
    @MaxLength(100)
    @ApiProperty()
    year: string;

    @IsBoolean()
    @ApiProperty()
    state: boolean;
}
