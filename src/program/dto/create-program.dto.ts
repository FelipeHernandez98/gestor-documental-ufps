import { IsDecimal, IsString, Max, MaxLength, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProgramDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    faculty_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    person_id: number;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    name: string;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    code: string;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    modality: string;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    building: string;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    formal_duration: string;
}
