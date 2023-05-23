import { IsBoolean, IsDecimal, IsString, Max, MaxLength, Min }  from "class-validator";

export class CreateCharacteristicDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    factor_id: number;

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
