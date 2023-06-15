import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateFactorDto {

    @IsNumber()
    @Min(0)
    @Max(11)
    @ApiProperty()
    agreement_id: number;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    name: string;

    @IsString()
    @MaxLength(2000)
    @ApiProperty()
    description: string;

    @IsNumber()
    @Min(1)
    @Max(11)
    @ApiProperty()
    weighing: number;

    @IsBoolean()
    @ApiProperty()
    editable: boolean;
}
