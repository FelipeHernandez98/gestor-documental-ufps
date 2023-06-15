import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsString, IsBoolean, MinLength, MaxLength, Min, Max } from "class-validator";

export class CreateAspectDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    characteristic_id:number;

    @IsString()
    @MinLength(1)
    @MaxLength(100)
    @ApiProperty()
    name: string;

    @IsString()
    @MinLength(1)
    @MaxLength(2000)
    @ApiProperty()
    description: string;

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    weighing: number;

    @IsBoolean()
    @ApiProperty()
    editable: boolean;
}
