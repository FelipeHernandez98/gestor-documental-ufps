import { IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateFacultyDto {

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    name: string;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    dean: string;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    email: string;
}

