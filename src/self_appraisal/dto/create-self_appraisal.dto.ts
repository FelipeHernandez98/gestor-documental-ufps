import { IsBoolean, IsDecimal, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateSelfAppraisalDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    agreement_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    program_id: number;
    
    @IsString()
    @MaxLength(100)
    year: string;

    @IsBoolean()
    state: boolean;
}
