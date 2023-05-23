import { IsBoolean, IsDecimal, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateFactorDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    agreement_id: number;

    @IsString()
    @MaxLength(100)
    name: string;

    @IsString()
    @MaxLength(2000)
    description: string;

    @IsDecimal()
    @Min(1)
    @Max(11)
    weighing: number;

    @IsBoolean()
    editanle: boolean;
}
