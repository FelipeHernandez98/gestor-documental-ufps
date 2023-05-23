import { IsDecimal, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateProgramDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    faculty_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    person_id: number;

    @IsString()
    @MaxLength(100)
    name: string;

    @IsString()
    @MaxLength(100)
    code: string;

    @IsString()
    @MaxLength(100)
    modality: string;

    @IsString()
    @MaxLength(100)
    building: string;

    @IsString()
    @MaxLength(100)
    formal_duration: string;
}
