import { IsBoolean, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateFactorDto {

    @IsNumber()
    @Min(0)
    @Max(11)
    agreement_id: number;

    @IsString()
    @MaxLength(100)
    name: string;

    @IsString()
    @MaxLength(2000)
    description: string;

    @IsNumber()
    @Min(1)
    @Max(11)
    weighing: number;

    @IsBoolean()
    editable: boolean;
}
