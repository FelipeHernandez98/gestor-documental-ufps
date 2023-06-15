import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDecimal, IsString, Max, MaxLength, Min }  from "class-validator";

export class CreateCharacteristicDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    factor_id: number;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    name: string;

    @IsString()
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
