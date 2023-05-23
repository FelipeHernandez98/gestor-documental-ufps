import { IsString, MaxLength } from "class-validator";

export class CreateFacultyDto {

    @IsString()
    @MaxLength(100)
    name: string;

    @IsString()
    @MaxLength(100)
    dean: string;

    @IsString()
    @MaxLength(100)
    email: string;
}

