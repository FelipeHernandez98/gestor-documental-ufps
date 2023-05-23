import { IsDecimal, IsString, IsBoolean, MinLength, MaxLength, Min, Max } from "class-validator";

export class CreateAspectDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    characteristic_id:number;

    @IsString()
    @MinLength(1)
    @MaxLength(100)
    name: string;

    @IsString()
    @MinLength(1)
    @MaxLength(2000)
    description: string;

    @IsDecimal()
    @Min(1)
    @Max(11)
    weighing: number;

    @IsBoolean()
    editanle: boolean;
}
